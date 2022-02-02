import React, {Component} from "react";

class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    render() {
      return (
        <div>
          <h1>My Car {this.props.brand}  {this.props.model} {this.props.color} {this.props.year}</h1>
        </div>
      );
    }
  }

  export default Car;


