import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Funcomp from './components/Funcomp';
import Welcome from './components/Welcome';



// function App() {
//   return (
//     <div className="App">
//     <Greet/>
  //     <Funcomp/>
//     <Welcome/>
//     </div>
//   );
// }



class App extends Component{
  render(){
    return(
      <div className="App">
        <Greet/>
        <Funcomp/>
        <Welcome/>
      </div>
    );
  }
}

export default App;
