import React, { Component } from "react";
import Employee from "./component/employee";
import "./App.css";
export default class App extends Component {
  constructor() {
    super();
    this.empId = 0;
    this.state = {
      empArray: [],
      id: "",
      name: "",
      email: "",
      contact: "",
    };
  }
  delete = (index) => {
    const copyempArray = Object.assign([], this.state.empArray); //copying the array
    copyempArray.splice(index, 1); ///splice the element only 1
    this.setState({
      empArray: copyempArray,
    });
  };
  addEmp = () => {
    this.empId = this.empId + 1;
    const copyempArray = Object.assign([], this.state.empArray);
    copyempArray.push({
      id: this.empId,
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact,
    });
    this.setState({
      empArray: copyempArray,
    });
  };
  render() {
    return (
      <div className="form">
        Name{" "}
        <input
          type="text"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <br />
        email{" "}
        <input
          type="text"
          onChange={(e) => {
            this.setState({ email: e.target.value });
          }}
        />
        <br />
        contact{" "}
        <input
          type="text"
          onChange={(e) => {
            this.setState({ contact: e.target.value });
          }}
        />
        <br />
        <button onClick={this.addEmp}>Add </button>
        <ul>
          {this.state.empArray.map((value, index) => {
            return (
              <Employee
                id={value.id}
                name={value.name}
                contact={value.contact}
                email={value.email}
                delete={this.delete.bind(this, index)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
