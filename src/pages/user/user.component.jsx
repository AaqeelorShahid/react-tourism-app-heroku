import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import userService from "../../services/userService";
import "./user.style.css"
import { ForceDirectedGraph } from "react-animated-web";

class user extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    userService.getUserList()
    .then((response) => {
      console.log(response)
      this.setState({ userData: response.data });
    })

   
  }

  routeToFormPage = (id) =>{
    this.state.userData.map((data) => {
      if(data.id === id){
        console.log(data);
        this.props.history.push({
            pathname: `${this.props.match.url}/edit`,
            state: {data: data}
        })
      }
    })
  }

  routeToAddUser = () =>{
    this.props.history.push({
        pathname: `${this.props.match.url}/add`
    })
  }

  deleteUser = (id) => {
    userService.deleteUser(id).then(()=>{
      userService.getUserList().then((response) => {
            this.setState({ userData: response.data });
          });
    }
    )
  }

  render() {
    return (
      <div >

        <div className="header">
          <h1 style={{ textAlign:"center" }}>Users</h1>
              <Button variant="success" style = {{height:"100%", width:700}}  onClick={()=>{ this.routeToAddUser() }}>Add User</Button>
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
              </tr>
            </thead>
            <tbody>
              {this.state.userData.map((row) => (
                <tr key={row.id}>
                  <td align="right">{row.id}</td>
                  <td align="right">{row.name}</td>
                  <td align="right">{row.email}</td>
                  <td align="right">{row.address}</td>
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

export default user;
