import './App.css';
import Header from './components/Header';
import KeywordSearch from './components/KeywordSearch'
import Container from 'react-bootstrap/Container'

const App = () => {
  return (
    <Container fluid>
      <Header/>
      <KeywordSearch/>
    </Container>
  );
}

export default App;
