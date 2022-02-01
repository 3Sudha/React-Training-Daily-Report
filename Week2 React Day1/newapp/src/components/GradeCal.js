import React, {component} from "react";
 export class Mygrade extends React.Component
 {
   constructor(props){
    super(props);
    //this.state = {a:90, b:89, c:99};
    this.state={
      a: props.a,
      b:props.b,
      c:props.c,
    };
  }
   
   render()
   { 
    var result = (this.state.a+ this.state.b+this.state.c)/3;
    
    if(result>90 && result<100)
     {
    return(
      <h1> Grade A</h1>
    )
    }
    else if(result>80 && result<90)
    {
    return(
      <h1>Grade B</h1>
    );
    }
   else if(result>70 && result<80)
   {
    return(
      <h1>Grade C</h1>
    )
   }

   else{
    return(
      <h1>Fail</h1>
    )
   }

   }

}

