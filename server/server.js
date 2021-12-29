const express = require('express');
const app = express();
var https = require('https')
var fs = require('fs')
require('dotenv').config();
const port = process.env.PORT || 5000;


//Creating the proxy server, supporting SSL.
https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(port, () => console.log(`Listening on port ${port}`));

app.get('/watson_nlp', async(req, res) => {
  /* Proxy API service to fetch results from the IBM Watson NLP API.*/
  const listingText = req.query.text
  const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
  const { IamAuthenticator } = require('ibm-watson/auth');

  const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: '2021-08-01',
    authenticator: new IamAuthenticator({
      apikey: process.env.API_KEY,
    }),
    serviceUrl: process.env.SERVICE_URL,
  });

  const analyzeParams = {
    'text': listingText,
    'features': {
      'keywords': {
        'limit': 10
      }
    }
  };

  const nlp = naturalLanguageUnderstanding.analyze(analyzeParams)
    .then(analysisResults => {
      console.log(analysisResults)
      return analysisResults;
    })
    .catch(err => {
      console.log('error:', err);
    });
  const nlpResults = await nlp
  res.send({ express: nlpResults});
});
