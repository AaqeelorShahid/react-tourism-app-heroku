import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './useredit.style.css'
import userService from "../../services/userService";

class useredit extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userData : { }
    };
  }

  componentDidMount(){
    const { data } = this.props.location.state || {};
    this.setState({userData : data })
  }

  updateDatabase = () => {
    console.log(this.state.userData, this.state.userData.id);
    userService.editUser(this.state.userData, this.state.userData.id);
  }

  render() {
    return (
        <div>
                <h1 style={{ textAlign:"center" }}>Edit User</h1>
                <Form style={{ width: 700 }} className='form'>
                <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Edit name" 
                        onChange={e => this.setState({userData: {...this.state.userData, name: e.target.value }}) } 
                        defaultValue={this.state.userData.name}                      
                      />
                    </Form.Group>

                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" 
                        placeholder="Edit email" 
                        onChange={e => this.setState({userData: {...this.state.userData, email: e.target.value }})}
                        defaultValue={this.state.userData.email}   
                        />
                    </Form.Group>

                    <Form.Group controlId="formGroup">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="address" 
                        placeholder="Edit address" 
                        onChange={e => this.setState({userData: {...this.state.userData, address: e.target.value }}) }
                        defaultValue={this.state.userData.address}   
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

export default useredit;
