import React, {Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import "./homepage.style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  navigateToPage = (url) =>{
    this.props.history.push({
      pathname: `${url}`
  })
  }

  render() { 
    return ( 
    <div>
        <section>
          <Carousel>
            <Carousel.Item>
              <img
                style={{ height: 650 }}
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>A Destination For The New Millennium</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: 650 }}
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>A New Pulse Of Dream.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: 650 }}
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1589394760151-b4c9890765fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>A New Sky ,A New Life.</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>

        <section className="cardSection">
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="https://images.golos.io/DQmdFbpFT9zH3jhH1KWj1qjXyR5qaNkbEY5phMUnG5oTqYT/illustrated-people.jpg" />
              <Card.Body>
                <Card.Title>User Section</Card.Title>
                <Card.Text>
                  This is a section where you manage the user details
                </Card.Text>
              </Card.Body>
              <Card.Footer className="footer">
                <Button onClick={()=> {this.navigateToPage("user")}}> Click here </Button>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img variant="top" src="https://etpl.lk/wp-content/uploads/2019/06/hotels.jpg" />
              <Card.Body>
                <Card.Title>Hotels Section</Card.Title>
                <Card.Text>
                  Section for managing the Hotel which are associated with our organization
                </Card.Text>
              </Card.Body>
              <Card.Footer className="footer">
                <Button onClick={()=> {this.navigateToPage("hotels")}}> Click here </Button>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img variant="top" src="https://www.engagebay.com/blog/wp-content/uploads/2020/05/customer-management-strategies.png" />
              <Card.Body>
                <Card.Title>Customer Section</Card.Title>
                <Card.Text>
                  In this section we manage the customer details
                </Card.Text>
              </Card.Body>
              <Card.Footer className="footer">
                <Button onClick={()=> {this.navigateToPage("customer")}}> Click here </Button>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img variant="top" src="https://www.gannett-cdn.com/media/2019/11/21/USATODAY/usatsports/MotleyFool-TMOT-2c201c94-porch-package.jpg?auto=webp&crop=1615,909,x411,y354&format=pjpg&width=1200" />
              <Card.Body>
                <Card.Title>Package Section</Card.Title>
                <Card.Text>
                  This section for Hotel package management
                </Card.Text>
              </Card.Body>
              <Card.Footer className="footer">
                <Button onClick={()=> {this.navigateToPage("packs")}}> Click here </Button>
              </Card.Footer>
            </Card>

          </CardDeck>
        </section>
      </div>
     );
  }
}
 
export default Home;