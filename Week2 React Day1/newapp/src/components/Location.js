
import React, {Component}from "react";
import ReactDom from 'react-dom';

import Hemisphere from './Hemis';

export class App5 extends Component {
  state ={latitude:null, errorMessage:''}


  componentDidMount(){
  window.navigator.geolocation.getCurrentPosition(
      (position)=>
      {
          this.setState({latitude: position.coords.latitude})
  
      },
      (error)=>
      {
          this.setState({errorMessage: error.message})
      }
  );
  }
  
  render(){
      if(!this.state.errorMessage && !this.state.latitude)
      {
          return <div>{this.state.latitude}</div>
      }
  
      if(!this.state.errorMessage && this.state.latitude)
      {
          return <div>{this.state.errorMessage}</div>
      }
      else{
          return <div>Loading..</div>
      }
    }
  }
  
  
// function App5(){
//     window.navigator.geolocation.getCurrentPosition(
//         {position} console.log(position),
//         {error} =console.log(error)
//     );
//     return <div>List Link</div>;
// }
