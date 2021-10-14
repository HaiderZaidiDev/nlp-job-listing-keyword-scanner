import React, { useState, useEffect } from 'react';
import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Keywords from './Keywords'

const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const KeywordSearch = () => {
  /** Fetching keywords from a job description using the Watson AI (NLP) platform. **/
  const [link, setLink] = useState('')
  const [keywords, setKeywords] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    nlp(e.target.value)
  }

  const nlp = async() => {
    /** Queries results from the Watson API, proxied through the express API server. **/
    const response = await fetch('/watson_nlp?url='+link);
    const res = await response.json();
    setKeywords(res.express.result.keywords)
  }


  return (
    <Row>
      <Col xs={12}>
          <div className="keyword-search">
            <div className="keyword-search-content">
              <h2> Keyword Scan </h2>
              <p className="search-desc"> Paste either a link or the responsibilities of a job listing (more accurate) in the box below.</p>
              <label> Job Listing URL (e.g., LinkedIn, Indeed)</label>
              <form onSubmit={submitHandler}>
                <input
                  className="listing-link"
                  placeholder="Paste a link to a job listing here and get keywords from the listing to include in your resume."
                  onChange={(event) => setLink(event.target.value)}
                  >
                </input>
              </form>
              {keywords && <Keywords keywords={keywords}/>}
            </div>
          </div>
      </Col>
    </Row>
  );
}

export default KeywordSearch;
