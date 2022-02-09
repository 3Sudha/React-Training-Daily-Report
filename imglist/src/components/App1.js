import React from "react";
import SeacrhInput from "./SearchInput";
import axios from "axios";
import Imagelist from "./imagelist";

class App1 extends React.Component
{
    state = {
        Image: [],
      };

    onSearchSubmit = async (entry) => {
     const response = await axios.get(`https://pixabay.com/api/?key=25316199-75c72a14e3bd5b3ea77971285&q=${entry}&image_type=photo`);
     this.setState({ Image: response.data.hits });
  };
    
  
    render(){
    return(
        <div className="ui container" style={{marginTop:'30px'}}>
            <SeacrhInput onSearchSubmit={this.onSearchSubmit}/>
            <Imagelist Image={this.state.Image} />
        </div>
    ); 
  }
}

export default App1;