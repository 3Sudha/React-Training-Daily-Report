import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Route path='./Home' components={Home} />
      <Route path='./About' components={About} />
      <Route path='./Contact' components={Contact}/>
    </div>
    </Router>
  );
}

export default App;
