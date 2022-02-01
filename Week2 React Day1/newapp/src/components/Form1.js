import React, {Component} from "react";

export class Formapp extends React.Component{
    constructor(props){
      super(props);
      this.state = {value1:'' , value2:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event){
      this.setState({value1:event.target.value1});
      this.setState({value2:event.target.value2});
      console.log("from on change"+this.state.value);
    }
  
    handleSubmit(){    
      alert('Are you sure? '+ parseInt(this.state.value1)+parseInt(this.state.value2))
      //take to backend
    }
  
    render(){
  
      
      return(
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Number 1:
            <input type="number" value={this.state.value1} onChange={this.handleChange}/>
          </label>
          <br />
          <br />
          
          <label>
            Enter Number 2:
            <input type="number" value={this.state.value2} onChange={this.handleChange}/>
          </label>
          <br />
          <br />
          <input type="submit" value="Submit"/>
        </form>
      );
  
    };
  
  }
  