import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./addhotel.style.css";
import hotelService from "../../services/hotelService";

class addhotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelData: {},
    };
  }

  addToDatabase(){
      hotelService.addHotel(this.state.hotelData)
      console.log(this.state.hotelData);
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign:"center" }} >Add Hotel</h1>
        <Form style={{ width: 700 }} className="form">

        <Form.Group controlId="formGroupID">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="ID"
              required
              onChange={(e) =>
                this.setState({
                  hotelData: {
                    ...this.state.hotelData,
                    id: e.target.value,
                  },
                })
              }
            />
          </Form.Group>

          <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              required
              onChange={(e) =>
                this.setState({
                  hotelData: {
                    ...this.state.hotelData,
                    name: e.target.value,
                  },
                })
              }
            />
          </Form.Group>

          <Form.Group controlId="formGroupLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Location"
              required
              onChange={(e) =>
                this.setState({
                  hotelData: {
                    ...this.state.hotelData,
                    location: e.target.value,
                  },
                })
              }
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={() => {
              this.addToDatabase()
            }}
          >
            Add Hotel
          </Button>
        </Form>
      </div>
    );
  }
}

export default addhotel;
