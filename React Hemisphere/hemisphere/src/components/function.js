import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const App1=()=>{

  window.navigator.geolocation.getCurrentPosition(
  (position) =>
  console.log(position),
  (error) => 
  console.log(error)
  );
  
  return(
    <div>Latitude:</div>
  )


}






ReactDOM.render(
  
    <App1 />,

  document.querySelector('#root')
);

