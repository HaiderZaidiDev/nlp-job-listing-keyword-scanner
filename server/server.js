const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/watson_nlp', async(req, res) => {
  // API service to fetch results from the IBM Watson NLP API.
  const listingURL = req.query.url
  const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
  const { IamAuthenticator } = require('ibm-watson/auth');

  const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: '2021-08-01',
    authenticator: new IamAuthenticator({
      apikey: proccess.env.API_KEY,
    }),
    serviceUrl: proccess.env.SERVICE_URL,
  });

  const analyzeParams = {
    'text': listingURL,
    'features': {
      'keywords': {
        'limit': 10
      }
    }
  };

  const nlp = naturalLanguageUnderstanding.analyze(analyzeParams)
    .then(analysisResults => {
      return analysisResults;
    })
    .catch(err => {
      console.log('error:', err);
    });
  const nlpResults = await nlp
  res.send({ express: nlpResults});
});
