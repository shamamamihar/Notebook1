
import { Button, Container,Row } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="main">
    <Container>
      <Row>
        <div className="intro-text">
          <div>
            <h1 className="title">Note Pad</h1>
         
          </div>
          <div className="buttonContainer">
           
              <Button size="lg" className="landingbutton">
                Login
              </Button>
              
            
           
              <Button
                variant="outline-primary"
                size="lg"
                className="landingbutton"
              >
                Signup
              </Button>
             
          </div>
        </div>
      </Row>
    </Container>
  </div>
  );
};

export default LandingPage;