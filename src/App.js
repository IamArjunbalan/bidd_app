
import { Col, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Assembly from './components/Assembly';
import Job from './components/Job';





function App() {
  return (
    <div className="App">
      <Header/>
      <Row>
        <Col sm={12} md={6} lg={1}>
          <Sidebar/>
        </Col>
        <Col sm={12} md={6} lg={5}>
          <Assembly/>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <Job/>
          
        </Col>
      </Row>
      
    </div>
  );
}

export default App;
