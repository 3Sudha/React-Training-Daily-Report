import React from "react";
//import ReactDom from 'react-dom';

const Hemisphere = ({latitude})=> {
   console.log({latitude})
    const hemisphere = latitude > 0 ? 'Northern Hemisphere': 'Southern hemisphere';
    return(
       
        <div>{hemisphere}</div>
    )
}

export default Hemisphere;