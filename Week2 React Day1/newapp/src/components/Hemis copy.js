import React from "react";
import ReactDom from 'react-dom';

const Hemisphere = ({latitude})=> {
    //console.log(latitude)
    const hemisphere = latitude >0 ? 'Northern Hemisphere': 'Southern hemisphere';
    return(
        //<div>Hey You are in Northern Hemisphere</div>
        <div>{hemisphere}</div>
    )
}

export default Hemisphere;