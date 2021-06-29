import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./addcustomer.style.css";
import customerServices from "../../services/customerServices";


class addcustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerData: {},
    };
  }

  addToDatabase(){
      customerServices.addCustomer(this.state.customerData)
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign:"center" }} >Add Customer</h1>
        <Form style={{ width: 700 }} className="form">

        <Form.Group controlId="formGroupID">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="ID"
              required
              onChange={(e) =>
                this.setState({
                  customerData: {
                    ...this.state.customerData,
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
                  customerData: {
                    ...this.state.customerData,
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
                  customerData: {
                    ...this.state.customerData,
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
                  customerData: {
                    ...this.state.customerData,
                    address: e.target.value,
                  },
                })
              }
            
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              this.addToDatabase()
            }}
          >
            Add User
          </Button>
        </Form>
      </div>
    );
  }
}

export default addcustomer;
