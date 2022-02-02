
import React, { Component } from 'react'; 
export class Formapp2 extends React.Component{
    constructor(props){
      super(props);
      this.state = {name:'' , phone:'', email:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleValidation = this.handleValidation.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        //Name
        if (!fields["name"]) {
          formIsValid = false;
          errors["name"] = "Cannot be empty";
        }
    
        if (typeof fields["name"] !== "undefined") {
          if (!fields["name"].match(/^[A-Z]+$/)) {
            formIsValid = false;
            errors["name"] = "Only letters";
          }
        }
    
        //Email
        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "Cannot be empty";
        }
    
        if (typeof fields["email"] !== "undefined") {
          let lastAtPos = fields["email"].lastIndexOf("@");
          let lastDotPos = fields["email"].lastIndexOf(".");
    
          if (
            !(
              lastAtPos < lastDotPos &&
              lastAtPos > 0 &&
              fields["email"].indexOf("@@") == -1 &&
              lastDotPos > 2 &&
              fields["email"].length - lastDotPos > 2
            )
          ) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
          }
        }
    
        this.setState({ errors: errors });
        return formIsValid;
      }
    
      contactSubmit(e) {
        e.preventDefault();
    
        if (this.handleValidation()) {
          alert("Form submitted");
        } else {
          alert("Form has errors.");
        }
      }
  
    handleChange(event){
      this.setState({name:event.target.value});
      
     // console.log("from on change"+this.state.value);
    }

    handleChange2(event){
        this.setState({phone:event.target.value});
        
       // console.log("from on change"+this.state.value);
      }

    handleChange3(event){
        this.setState({email:event.target.value});
        
       // console.log("from on change"+this.state.value);
      }
    
  
    handleSubmit(event){    
      document.write('Are you sure? '+ parseInt(this.state.name) +" " +parseInt(this.state.number) +" " +parseInt(this.state.email) )
      event.preventDefault();
      //take to backend
    }
  
    render(){
  
      
      return(
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} required/>
          </label>
          <br />
          <br />
          
          <label>
            Enter PhoneNumber:
            <input type="number" value={this.state.phone} onChange={this.handleChange2} required/>
          </label>
          <br />
          <br />
          <label>
            Enter Email:
            <input type="text" value={this.state.email} onChange={this.handleChange3} required/>
          </label>
          <br/>
              <br>
          </br>
          <input type="submit" value="Submit"/>
        </form>
      );
  
    }
}

  
  
  