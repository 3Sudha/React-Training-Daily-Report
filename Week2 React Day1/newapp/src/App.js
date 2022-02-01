import React, {Component} from 'react';
//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Myfun from './components/Funcomp';
import Welcome from './components/Welcome';
import {Book} from './components/name';
import {DemoClass} from './components/checkcomp';
import Funpro from './components/prophello';
import Message from './components/state';
import Car from './components/usingstate';
import {Myapp} from './components/Calculator';
import {Formapp} from './components/Form1';
import Addition from './components/Avg';
import {Mygrade} from './components/GradeCal';



// function App() {
//   return (
//     <div className="App">
//     <Addition/>
    
   
//     </div>
//   );
// }



class App extends Component{
  render(){
    return(
      <div className="App">
        
      <Mygrade a={90} b={90} c={85}/> 
      <Message/>
      <Addition  a={90} b={90} c={85}/>
      

        
      </div>
    );
  }
}

/* <Funpro name="Sudha" function="Arrow Function"/>
    <Funpro name="Jai" function="Arrow Function"/>
    <Funpro name="Sudheer" function="Arrow Function"/>
    <Funpro name="Megha" function="Arrow Function" /> */

export default App;
