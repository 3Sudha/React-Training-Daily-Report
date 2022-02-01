import React, {Component} from "react";


export class Myapp extends React.Component
 {
   constructor(props){
    super(props);
    this.state = {a:20, b:20};
   }

   render()
   {
     return(
       <div>
       <h1> The addition of a and b is{this.state.a} and {this.state.b} is {this.state.a+ this.state.b}</h1>
       <h1> The subtraction of a and b is{this.state.a} and {this.state.b} is {this.state.a- this.state.b}</h1>
       <h1> The multipication of a and b is{this.state.a} and {this.state.b} is {this.state.a* this.state.b}</h1>
       <h1> The division of a and b is{this.state.a} and {this.state.b} is {this.state.a/ this.state.b}</h1>
       </div>
      
     );
   };
    
    
 }

