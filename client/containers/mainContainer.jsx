import React, { Component } from 'react';
import InputsContainer from './inputsContainer.jsx';
import DisplayContainer from './displayContainer.jsx';


class MainContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        name: '',
        amount: 0,
        category: '',
        total: 0,
        budget: 0
      };
      this.submit = this.submit.bind(this);
    }

    submit(){
      this.setState({name: document.getElementById('transactionName').value});
      console.log(this.state.name);
    }

    render(){
      return (
        <div className = 'mainContainer'>
          <h1><center>Pockets</center></h1>
          <InputsContainer state={this.state} submit={this.submit}/>
          <div>{this.state.name}</div>
          <DisplayContainer />
        </div>
      )
    }
}

export default MainContainer;