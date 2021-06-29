import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import customerServices from "../../services/customerServices";
import "./customer.style.css"

class customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerData: [],
    };
  }

  componentDidMount() {
    customerServices.getCustomerList().then((response) => {
      console.log(response)
      this.setState({ customerData: response.data });
    });
  }

  routeToFormPage = (id) =>{
    this.props.history.push({
        pathname: `${this.props.match.url}/edit`,
        state: {data: this.state.customerData[id]}
    })
  }

  routeToAddCustomer = (id) =>{
    this.props.history.push({
        pathname: `${this.props.match.url}/add`
    })
  }

  deleteUser = (id) => {
    customerServices.deletCustomer(id).then(()=>{
        customerServices.getCustomerList().then((response) => {
            this.setState({ customerData: response.data });
          });
    }
    )
  }

  render() {
    return (
      <div >
        <div className="header">
          <h1 style={{ textAlign:"center" }}>Customers</h1>
              <Button variant="success" style = {{height:"100%", width:700}}  onClick={()=>{ this.routeToAddCustomer() }}>ADD Customer</Button>
        </div>
        <div className="table" style = {{height:"100%", width:700}}>
          <Table table striped bordered variant="dark">    
            <thead>
              <tr className="head_row">
                <th align="right" className="head_row">ID</th>
                <th align="right" className="head_row">Name</th>
                <th align="right">Email</th>
                <th align="right">Address</th>
                <th align="right">Actions</th>
                <th align="right"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.customerData.map((row) => (
                <tr key={row.id}>
                  <td align="right">{row.id}</td>
                  <td align="right">{row.name}</td>
                  <td align="right">{row.email}</td>
                  <td align="right">{row.address}</td>
                  <td align="right"><Button onClick={()=>{ this.routeToFormPage(row.id - 1)}}>EDIT</Button></td>
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

export default customer;
