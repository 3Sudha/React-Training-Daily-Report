import React,{useState} from "react";


const App4= () =>{
    let time= new Date().toLocaleDateString();
    const [ctime, setCtime] = useState(time);

 const UpdateTime= ()=>{
   
    time = new Date().toLocaleTimeString();
   
   setCtime(time);
};
   
   setInterval(UpdateTime, 1000);
   return(
    <div>
    <h1>This is My Digital Clock</h1>
        <h1>{ctime}</h1>
        
    </div>
    );

}

export default App4;