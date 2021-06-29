import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './packedit.style.css'
import packageController from "../../services/packageController";

class packedit extends Component {
  constructor(props) {
    super(props);
    this.state = {
        packData : { }
    };
  }

  componentDidMount(){
    const { data } = this.props.location.state || {};
    this.setState({packData : data })
  }

  updateDatabase = () => {
    console.log(this.state.packData, this.state.packData.id);
    packageController.editPackage(this.state.packData, this.state.packData.id);
  }

  render() {
    return (
        <div>
                <h1 style={{ textAlign:"center" }}>Edit Package</h1>
                <Form style={{ width: 700 }} className='form'>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Edit name" 
                        onChange={e => this.setState({packData: {...this.state.packData, name: e.target.value }}) } 
                        defaultValue={this.state.packData.name}                      
                      />
                    </Form.Group>

                    <Form.Group controlId="formGroupPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Edit price" 
                        onChange={e => this.setState({packData: {...this.state.packData, price: e.target.value }})}
                        defaultValue={this.state.packData.price}   
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

export default packedit;
