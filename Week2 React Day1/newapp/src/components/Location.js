
import React, {Component}from "react";

export class App5 extends Component {
    constructor(props) {
      super(props);
      this.state = {latitude: null, errorMessage: ''}
      };
    }
  
    // componentDidMount() {
    //     window.navigator.geolocation.getCurrentPosition(function(position) {
    //     console.log("Latitude is :", position.coords.latitude);
    //     console.log("Longitude is :", position.coords.longitude);
    //   });
    // }
  
    render()
    {
        window.navigator.geolocation.getCurrentPosition( 
            (position)=>{
                this.setState({latitude: position.coords.latitude})
            }
            (Error)=>
            {
                this.setState({errorMessage: error.message})
            }
        );
        
      return (
        <div>
          {/* <h4>My Geolocation is:</h4> */}
          {this.state.latitude}
          {this.state.errorMessage}
        </div>
      );
    }
}


  
// function App5(){
//     window.navigator.geolocation.getCurrentPosition(
//         {position} console.log(position),
//         {error} =console.log(error)
//     );
//     return <div>List Link</div>;
// }
