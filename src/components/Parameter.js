import React, { Component } from 'react';
 
class Parameter extends Component {
   constructor(props){
       super(props);
       this.state={
           input:""
       }
   }
    
   acceptInput=()=>{
     this.setState({input: this.props.inputFromArea});
   }
  render() {
    return (
      <div>
      <div>Component 2 --------</div>
        Parameter:
        <button onClick={this.acceptInput}>
          Parameter
        </button>
        
        <div >Accept input from area: <span style = {{color:"red"}}>{this.state.input}</span></div>
        <div>Component 2 --------</div>
      </div>
    );
  }
}
 
export default Parameter;