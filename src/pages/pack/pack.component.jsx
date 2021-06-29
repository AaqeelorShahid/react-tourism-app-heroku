import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import packageController from "../../services/packageController";
import "./pack.style.css"

class pack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packData: [],
    };
  }

  componentDidMount() {
    packageController.getPackageList()
    .then((response) => {
      this.setState({ packData: response.data });
    })

    console.log(this.state)
  }

  routeToFormPage = (id) =>{
    this.state.packData.map((data) => {
      if(data.id === id){
        console.log(data);
        this.props.history.push({
            pathname: `${this.props.match.url}/edit`,
            state: {data: data}
        })
      }
    })
  }

  routeToAddPack = () =>{
    this.props.history.push({
        pathname: `${this.props.match.url}/add`
    })
  }

  deleteUser = (id) => {
    packageController.deletePackage(id).then(()=>{
      packageController.getPackageList().then((response) => {
            this.setState({ packData: response.data });
          });
    }
    )
  }

  render() {
    return (
      <div >
        <div className="header">
          <h1 style={{ textAlign:"center" }}>Tourism Packages</h1>
              <Button variant="success" style = {{height:"100%", width:700}}  onClick={()=>{ this.routeToAddPack() }}>Add Package</Button>
        </div>
        <div className="table" style = {{height:"100%", width:700}}>
          <Table table striped bordered variant="dark">    
            <thead>
              <tr className="head_row">
                <th align="right" className="head_row">ID</th>
                <th align="right" className="head_row">Name</th>
                <th align="right">Price</th>
                <th align="right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.packData.map((row) => (
                <tr key={row.id}>
                  <td align="right">{row.id}</td>
                  <td align="right">{row.name}</td>
                  <td align="right">{row.price}</td>
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

export default pack;
