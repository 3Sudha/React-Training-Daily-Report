import React from "react";
import north from './image/north.png';
import South from './image/South.jpg';

import './Hemisphere.css';

const Hemisphere = ({latitude}) =>
{
    //const hemisphere = latitude>0 ? 'Northern Hemisphere' : 'Southern Hemisphere';
    const hemisphere= latitude>0?'You are currently in : Northern Hemisphere !!' : 'You are currently in : Southern Hemisphere !!';
     //const picture = latitude>0 ?north :South;
     const picture = latitude>0 ? north : South
        if(picture== north){
            return(
                <div className="north">
                <div className="inner">
                <img src={picture} alt="" />
                </div>
                <h3> {hemisphere} </h3>
               </div>
              
            )

        }
        else{
             return(
        <div className="South">
            <div className="inner">
            <img src={picture} alt="" />
            </div>
            <h3> {hemisphere} </h3>
        </div>
    )
        }

}

export default Hemisphere;