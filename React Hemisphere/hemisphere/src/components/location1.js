import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import hemisphere from './hemis';

//import reportWebVitals from './reportWebVitals';

class App1 extends React.Component{
  constructor(props){
    super(props)
    this.state ={latitude:null, errorMessage:''}
  }

  
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
            return <div>Error: {this.state.errorMessage}</div>
        }
    
        if(!this.state.errorMessage && this.state.latitude)
        {
            return <div>Latitude: {this.state.latitude}</div>
        }
        else{
            return <div>Loading..</div>
        }
      

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

