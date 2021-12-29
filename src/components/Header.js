import '../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Header = () => {
  return (
    <Row>
      <Col xs={12}>
          <div className="header">
            <div className="header-content">
              <h1> Optimize your resume, with AI-driven keyword scanning. </h1>
              <p> Powered by the IBM Watson Natural Language Proccessing (NLP) API.</p>
              <a href="https://github.com/HaiderZaidiDev/nlp-job-listing-keyword-scanner" target="_blank"><button class="action-btn">See the Code</button></a>
            </div>
          </div>
      </Col>
    </Row>
  );
}

export default Header;
