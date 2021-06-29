import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './edithotel.css'
import hotelService from "../../services/hotelService";

class edithotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hotelData : { }
    };
  }

  componentDidMount(){
    const { data } = this.props.location.state || {};
    this.setState({hotelData : data })
    console.log(data)
  }

  updateDatabase = () => {
    console.log(this.state.hotelData)
    hotelService.editHotel(this.state.hotelData, this.state.hotelData.id);
  }


  render() {
    return (
        <div>
                <h1 style={{ textAlign:"center" }}>Edit Hotels</h1>
                <Form style={{ width: 700 }} className='form'>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Edit name" 
                        onChange={e => this.setState({hotelData: {...this.state.hotelData, name: e.target.value }}) } 
                        defaultValue={this.state.hotelData.name}                      
                      />
                    </Form.Group>

                    <Form.Group controlId="formGroupLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Edit location" 
                        onChange={e => this.setState({hotelData: {...this.state.hotelData, location: e.target.value }})}
                        defaultValue={this.state.hotelData.location}   
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

export default edithotel;
