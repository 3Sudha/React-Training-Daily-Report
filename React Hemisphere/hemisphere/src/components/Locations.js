import React from "react";
import Hemisphere from './Hemisphere'

export default class Location extends React.Component{

    state ={latitude:20, errorMessage:''}
    
  
    
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
          if(!this.state.errorMessage && this.state.latitude)
          {
              return <div><Hemisphere latitude= {this.state.latitude}></Hemisphere></div>
          }
          else{
              return <div>{this.state.errorMessage}</div>
          }
  
         
        
  
        }
      }
    