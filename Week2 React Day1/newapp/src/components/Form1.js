import React, {Component} from "react";

export class Formapp extends React.Component{
    constructor(props){
      super(props);
      
      this.updateSubmit = this.updateSubmit.bind(this); 
      this.input = React.createRef();  
    }
  
    updateSubmit(event) {  
      console.log('You have entered the Num1 and Num2 successfully.');  
      event.preventDefault();  
  }  
  
    render(){
  
      
      return(
        <form onSubmit={this.updateSubmit}>
        <h2>Uncontrolled Form</h2>
          <label>
            Enter Number 1:
            <input type="number"  ref={this.input} />
          </label>
          <br />
          <br />
          
          <label>
            Enter Number 2:
            <input type="number"  ref={this.input} />
          </label>
          <br />
          <br />
          <input type="submit" value="Submit"/>
        </form>
      );
  
    };
  
  }
  