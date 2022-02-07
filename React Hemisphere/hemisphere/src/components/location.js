import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

class App1 extends React.Component{
  constructor(props){
    super(props)
    this.state ={latitude:null, errorMessage:''}
  }

  render(){
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
      {
      console.log(position)
      this.setState({latitude:position.coords.latitude})
      this.setState.latitude=position.coords.latitude

      // this.setState({longitude:position.coords.longitude})
      // this.setState.longitude=position.coords.longitude
      },
      (error) => {
      console.log(error)
      this.setState({errorMessage: error.message})
      }

      
      );
      
      
      return(
        <div>
        {/* <h1>You are in Northern hemisphere</h1> */}
        {this.state.latitude}
        {this.state.errorMessage}
        </div>
      )
    }
    
}

  





ReactDOM.render(
  
    <App1 />,

  document.querySelector('#root')
);

