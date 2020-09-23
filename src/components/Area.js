import React, { Component } from 'react';
 
class Area extends Component {
    constructor(props) {
        super(props);
        this.state={
            food:"Chicken",
            input:""
        }   
      }
 
      getInput=(event)=>{
          this.setState({
             input: event.target.value
      })
          
      }
  render() {
    return (
      <div>
       <div>Component 1 start------------ </div>
        Area:
        <input type ="text" value = {this.state.input} onChange = {this.getInput}></input> 
        
        <div>Get the input : {this.state.input}</div>
        <button onClick={() => this.props.update(this.state.input)}>
          Area
        </button>
        <div>Component 1 end ----------</div>
      </div>
    );
  }
}
 
export default Area;