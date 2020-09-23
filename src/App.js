import React, { Component } from 'react';
import Area from './components/Area';
import Parameter from './components/Parameter';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFromArea:"",
      data: 0,
      len: 40,
      bre: 50
    }   
  }

 
  getInputFromArea = (value) =>{
    this.setState({inputFromArea:value});
  }
  render() {
    return (
      <div>
        Calculation: {this.state.data}
        <Area update={this.getInputFromArea}></Area>
        <div>this.state.inputFromArea: {this.state.inputFromArea}</div>
        <br></br>

       <Parameter inputFromArea={this.state.inputFromArea}></Parameter>

      </div>
    )
  }
}
 
export default App;