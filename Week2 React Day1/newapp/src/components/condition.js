import React,{Component} from "react";

 export class Condition extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:true
        }

    }

    render(){
        if(this.state.isLoggedIn){
            return(
                <div>
                    Welcome Sudha
                </div>
            )
        }
        else{
            return(
                <div>
                    <div>Welcome Guest</div>
                </div>
            )
        }

        // return(
        //     <div>
        //     <div>Welcome Sudha</div>
        //     <div>Welcome Guest</div>
        //     </div>
        // )
    }
}