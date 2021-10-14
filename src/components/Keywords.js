import React, { useState, useEffect } from 'react';
import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { CircleCheckFill } from 'akar-icons';

const Keyword = (props) => {
  /* Rendering individual keywords, adding a green/yellow check icon indicated relevance level. */
  return (
    <div className="keyword">
      <h3>{props.text} {props.relevance > 0.6 && <CircleCheckFill size={24} id="green" /> } {props.relevance < 0.6 && <CircleCheckFill size={24} id="yellow" /> }</h3>
      <p>Relevance - {(props.relevance*100).toFixed(2)}%</p>
    </div>
  );
}

const Keywords = (props) => {
  /* Rendering keywords found from the NLP analysis. */
  return (
    <Row>
      <div className="keywords">
        {props.keywords.map(keyword => (
          <Keyword
            text={keyword.text}
            relevance={keyword.relevance}
            />
        ))}
      </div>
    </Row>
  );
}
export default Keywords;
