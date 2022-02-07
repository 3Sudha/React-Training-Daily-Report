import React, {component} from "react";
import ReactDom from 'react-dom';

import Hemisphere from './Hemis';

export class App9 extends React.Component{

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
        return <div>{this.state.errorMessage}</div>
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

ReactDom.render(
    <App9/>,
    document.querySelector('#root')
)
