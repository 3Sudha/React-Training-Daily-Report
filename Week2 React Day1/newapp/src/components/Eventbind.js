import React, {Component} from "react";

export class Eventbind extends React.Component{
    constructor(props){
      super(props);
      this.state = {value1:'1' , value2:'2'};
     
      
        this.clickHandler=this.clickHandler.bind(this)
    }
  
   
    clickHandler(){
        this.setState({
           
            value1 :"Yes get updated",
            
            
        })
        console.log(this)

    }
  
    render(){
  
      
      return(
        <form >
          <label>
            Enter Number 1:
            <input type="number" value={this.state.value1} />
          </label>
          <br />
          <br />
          
          <label>
            Enter Number 2:
            <input type="number" value={this.state.value2} />
          </label>
          <br />
          <br />
          <button onClick ={()=>this.clickHandler()}>Click</button>
        </form>
      );
  
    };
  
  }
  export default Eventbind;
  