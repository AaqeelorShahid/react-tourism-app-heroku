import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import hotelService from "../../services/hotelService";
import "./hotel.style.css"

class hotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelData: [],
    };
  }

  componentDidMount() {
    hotelService.getHotelList()
    .then((response) => {
      this.setState({ hotelData: response.data });
    })
  }

  routeToFormPage = (id) =>{
    this.state.hotelData.map((data) => {
      if(data.id === id){
        console.log(data);
        this.props.history.push({
            pathname: `${this.props.match.url}/edit`,
            state: {data: data}
        })
      }
    })
    // 
  }

  routeToAddHotel = () =>{
    this.props.history.push({
        pathname: `${this.props.match.url}/add`
    })
  }

  deleteUser = (id) => {
    hotelService.deleteHotel(id).then(()=>{
      hotelService.getHotelList().then((response) => {
            this.setState({ hotelData: response.data });
          });
    }
    )
  }

  render() {
    return (
      <div >
        <div className="header">
          <h1 style={{ textAlign:"center" }}>Hotels</h1>
              <Button variant="success" style = {{height:"100%", width:700}}  onClick={()=>{ this.routeToAddHotel() }}>Add Hotel</Button>
        </div>
        <div className="table" style = {{height:"100%", width:700}}>
          <Table table striped bordered variant="dark">    
            <thead>
              <tr className="head_row">
                <th align="right" className="head_row">ID</th>
                <th align="right" className="head_row">Name</th>
                <th align="right">Location</th>
                <th align="right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.hotelData.map((row) => (
                <tr key={row.id}>
                  <td align="right">{row.id}</td>
                  <td align="right">{row.name}</td>
                  <td align="right">{row.location}</td>
                  <td align="right"><Button onClick={()=>{ this.routeToFormPage(row.id)}}>EDIT</Button></td>
                  <td align="right"><Button variant="danger" onClick={()=>{ this.deleteUser(row.id)}} >REMOVE</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
      </div>
    );
  }
}

export default hotel;
