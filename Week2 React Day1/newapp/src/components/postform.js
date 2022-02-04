import React, { Component } from "react";
import axios from "axios";

export class PostForm extends Component{
    constructor(props){
        super(props)
        this.state={
            userId:'',
            userName:'',
            Title:'',
            Body:''
        }
    }

    changeHandler = eve =>
    {
        this.setState({ [eve.target.name]: eve.target.value})
    }

    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        document.write(this.state)

        axios
            .post(`https://jsonplaceholder.typicode.com/users`, this.state)
            .then(response =>{
                console.log(response)
            })
            .catch(errroe =>{
                console.log(Error)
            })
    }

    render(){
        const{userId, userName, Title, Body} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
          
          <label> Enter userId:</label>
            <input type="Number"  name="userId" value={userId} onChange={this.changeHandler}/>
          
          <br />
          <br />

          <label>Enter userName:</label>
            <input type="text" name="userName" value={userName} onChange={this.changeHandler} />
          
          <br />
          <br />

          <label>Title:</label>
            <input type="text"  name="Title" value={Title} onChange={this.changeHandler}/>
          
          <br/>
          <br/>

          <label>Body: </label>
            <input type="text"  name="Body" value={Body} onChange={this.changeHandler}/>
          
          <br/>
          <br/>
          <button type="submit">Submit</button>
        </form>
        </div>
        )
    }

}
