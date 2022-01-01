import React, { useState, useEffect } from 'react';
import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Keywords from './Keywords'

const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const KeywordSearch = () => {
  /** Fetching keywords from a job description using the Watson AI (NLP) platform. **/
  const [text, setText] = useState('')
  const [keywords, setKeywords] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    nlp(e.target.value)
  }

  const nlp = async() => {
    /** Queries results from the Watson API, proxied through the express API server. **/
    const response = await fetch('/watson_nlp/?text='+text);
    const res = await response.json();
    setKeywords(res.express.result.keywords)
  }

  return (
    <Row>
      <Col xs={12}>
          <div className="keyword-search">
            <div className="keyword-search-content">
              <h2> Keyword Scan </h2>
              <p className="search-desc"> Paste the responsiblities section from
                a job listing below, here's a link to a <a id="sample-link"
                  href="https://www.linkedin.com/jobs/view/2854876732/"
                  target="_blank">
                  sample listing
                </a>.
              </p>
              <label> Job Responsibilities </label>
              <form onSubmit={submitHandler}>
                {/* In the text area, we use RegEx to replace line breaks with
                  spaces, to ensure the text plays nicely with the API. */}
                <textarea
                  className="listing-text"
                  placeholder="With great artificial intelligence platforms, come great responsibilities... for your resume!"
                  onChange={(event) => setText(event.target.value.replace(/(\r\n|\n|\r)/gm, " "))}
                  >
                </textarea>
                <button type="submit" class="action-btn" id="submit">Submit</button>
              </form>
              {keywords && <Keywords keywords={keywords}/>}
            </div>
          </div>
      </Col>
    </Row>
  );
}

export default KeywordSearch;
