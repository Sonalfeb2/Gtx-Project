import React, { Component } from "react";
export default class employee extends Component {
  render() {
    return (
      <div>
        <li>
          id = {this.props.id}
          <br />
          {this.props.name}
          <br />
          {this.props.email}
          <br />
          {this.props.contact}
          <br />
          <button onClick={this.props.delete}>Delete </button>
          <hr />
        </li>
      </div>
    );
  }
}
