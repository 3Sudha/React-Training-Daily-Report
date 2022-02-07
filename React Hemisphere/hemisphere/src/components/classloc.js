import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

class App1 extends React.Component{

  render(){
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
      console.log(position),
      (error) => 
      console.log(error)
      );
      
      return(
        <div><h1>You are in Northern hemisphere</h1></div>
      )
    }
    
}

  





ReactDOM.render(
  
    <App1 />,

  document.querySelector('#root')
);

