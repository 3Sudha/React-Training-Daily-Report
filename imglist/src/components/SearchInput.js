import React from 'react';


class SeacrhInput extends React.Component{
 
    state ={entry : ""}
    // onInputChange(event){
    //     event.preventDefault()
    //    console.log(event.target.value)
    //    //this.props.onSearchInput()
       onFormSubmit = (e) => {

        e.preventDefault();
    
        this.props.onSearchSubmit(this.state.entry);
    
      };



    render(){
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className= 'ui form' >
                    <div className='field'>
                        <div className='ui massive icon input'>
                    {/* <label>Input: </label><br/> */}
                    <input type="text" 
                    placeholder='search' onChange={(e)=>this.setState({entry:e.target.value})}
                    value ={this.state.entry}/>
                    <i className='search icon'/>
                    </div>
                        </div>
                        <br/>
                </form>
            </div>
        )
    }
}

export default SeacrhInput;