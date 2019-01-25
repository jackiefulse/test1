import React, { Component } from 'react';
import './App.css';
import NameForm from './nameform.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.setValid = this.setValid.bind(this);
    this.state = {isValid:true};
  }
  setValid(isValid){
    console.log("valid" + isValid);
    this.setState({isValid:isValid});
  }
  render() {
    return (
      <div><NameForm setValid={this.setValid}/>
      {(this.state.isValid) ? null : <div> invalid input</div>}
      </div>
    );
  }
}

export default App;
