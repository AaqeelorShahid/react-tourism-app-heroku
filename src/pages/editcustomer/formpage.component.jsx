import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './formpage.style.css'
import customerServices from "../../services/customerServices";

class formpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        customerData : { 
            id: "",
            name: "",
            email : "",
            address: ""
        }
    };
  }

  componentDidMount(){
    const { data } = this.props.location.state || {};
    this.setState({customerData : data })
  }

  updateDatabase = () => {
    console.log(this.state.customerData, this.state.customerData.id);
    customerServices.editCustomer(this.state.customerData, this.state.customerData.id);
    console.log("asdasdas");
  }


  render() {
    return (
        <div>
                <h1 style={{ textAlign:"center" }}>Edit Customer</h1>
                <Form style={{ width: 700 }} className='form'>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Edit name" 
                        onChange={e => this.setState({customerData: {...this.state.customerData, name: e.target.value }}) } 
                        defaultValue={this.state.customerData.name}                      
                      />
                    </Form.Group>

                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" 
                        placeholder="Edit email" 
                        onChange={e => this.setState({customerData: {...this.state.customerData, email: e.target.value }})}
                        defaultValue={this.state.customerData.email}   
                        />
                    </Form.Group>

                    <Form.Group controlId="formGroup">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="address" 
                        placeholder="Edit address" 
                        onChange={e => this.setState({customerData: {...this.state.customerData, address: e.target.value }}) }
                        defaultValue={this.state.customerData.address}   
                   />
                    </Form.Group>
                    <Button variant="primary" onClick={()=> {this.updateDatabase()}} >
                        Submit
                    </Button>
                </Form>

                   
        </div>
    );
  }
}

export default formpage;
