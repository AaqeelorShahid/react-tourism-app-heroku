import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./adduser.style.css";
import userService from "../../services/userService";

class adduser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };
  }

  addToDatabase(){
    userService.addUser(this.state.userData)
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign:"center" }} >Add User</h1>
        <Form style={{ width: 700 }} className="form">
        <Form.Group controlId="formGroupID">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="ID"
              required
              onChange={(e) =>
                this.setState({
                  userData: {
                    ...this.state.userData,
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
                  userData: {
                    ...this.state.userData,
                    name: e.target.value,
                  },
                })
              }
            />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              required
              onChange={(e) =>
                this.setState({
                  userData: {
                    ...this.state.userData,
                    email: e.target.value,
                  },
                })
              }
            
            />
          </Form.Group>

          <Form.Group controlId="formGroup">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="address"
              placeholder="Address"
              required
              onChange={(e) =>
                this.setState({
                  userData: {
                    ...this.state.userData,
                    address: e.target.value,
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
            Add Customer
          </Button>
        </Form>
      </div>
    );
  }
}

export default adduser;
