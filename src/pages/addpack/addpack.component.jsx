import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./addpack.style.css";
import packageController from "../../services/packageController";

class addpack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packData: {},
    };
  }

  addToDatabase(){
    packageController.addPackage(this.state.packData)
      console.log(this.state.packData);
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign:"center" }} >Add Package</h1>
        <Form style={{ width: 700 }} className="form">
        <Form.Group controlId="formGroupID">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="ID"
              required
              onChange={(e) =>
                this.setState({
                  packData: {
                    ...this.state.packData,
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
                  packData: {
                    ...this.state.packData,
                    name: e.target.value,
                  },
                })
              }
            />
          </Form.Group>

          <Form.Group controlId="formGroupLocation">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Price"
              required
              onChange={(e) =>
                this.setState({
                  packData: {
                    ...this.state.packData,
                    price: e.target.value,
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
            Add Package
          </Button>
        </Form>
      </div>
    );
  }
}

export default addpack;
