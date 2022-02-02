
import React, { Component } from 'react'; 
export class Formapp1 extends React.Component{
    constructor(props){
      super(props);
      this.state = {value1:'' , value2:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);

      
    }
  
    handleChange(event){
      this.setState({value1:event.target.value});
      
     // console.log("from on change"+this.state.value);
    }

    handleChange2(event){
        this.setState({value2:event.target.value});
        
       // console.log("from on change"+this.state.value);
      }
    
  
    handleSubmit(event){    
      document.write('Are you sure? '+ parseInt(this.state.value1) +" " +parseInt(this.state.value2))
      event.preventDefault();
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
            <input type="number" value={this.state.value2} onChange={this.handleChange2}/>
          </label>
          <br />
          <br />
          <input type="submit" value="Submit"/>
        </form>
      );
  
    }
}

  
  
  