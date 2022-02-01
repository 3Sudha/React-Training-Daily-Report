import React, {component} from "react";

function Addition(props)
{
  var result=(props.a+props.b+props.c);
  return(
    <div>
      <h1>Addition of two numbers {props.a} ,{props.b} and {props.c} is {result}</h1>
      <h1> The Percentage is: {result/3}</h1>
    </div>
    
  );

}

export default Addition;