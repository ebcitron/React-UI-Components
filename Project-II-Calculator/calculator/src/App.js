import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      total:'',
      hold: 0
    }
  }

  changeHandler = e => {
   this.setState({[this.state.total]: e.target.value}) 
  }
  
  render() {
    return (
      <div className="App">
        <h3>Welcome to React Calculator</h3>
        <div className="Calculator">
          <div className="Display">
            <CalculatorDisplay total={this.state.total} text='testing' />
          </div>
          <div id="row">
       
            <ActionButton buttonStyle="Action" text="clear" />
            <NumberButton buttonStyle="Red" text="/" />
          </div>
          <div id="row">
            <NumberButton buttonStyle="Regular" text="7" />
            <NumberButton buttonStyle="Regular" text="8" />
            <NumberButton buttonStyle="Regular" text="9" />
            <NumberButton buttonStyle="Red" text="X" />
          </div>
          <div id="row">
            <NumberButton buttonStyle="Regular" text="4" />
            <NumberButton buttonStyle="Regular" text="5" />
            <NumberButton buttonStyle="Regular" text="6" />
            <NumberButton buttonStyle="Red" text="-" />
          </div>
          <div id="row">
            <NumberButton buttonStyle="Regular" text="1" />
            <NumberButton  buttonStyle="Regular" text="2" />
            <NumberButton buttonStyle="Regular" text="3" />
            <NumberButton buttonStyle="Red" text="+" />
          </div>
          <div id="row">
            <ActionButton buttonStyle="Action" text="0" />
            <NumberButton buttonStyle="Red" text="=" />
          </div>
        </div>
      </div>
  
    );
  }
};

export default App;
