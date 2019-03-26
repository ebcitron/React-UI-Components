import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div className = "App">
      <h3>Welcome to React Calculator</h3>
      <div className="Calculator">
        <div className="Display">
        <CalculatorDisplay text = 'testing' />
        </div>
        <div id="row">
       
          <ActionButton buttonStyle = "Action" text="clear" /> 
          <NumberButton buttonStyle = "Red" text="/" />
        </div>
        <div id="row">
        <NumberButton buttonStyle = "Regular" text="1" />
      <NumberButton buttonStyle = "Regular"  text="2" />
          <NumberButton buttonStyle = "Regular" text="3" />
          <NumberButton buttonStyle = "Red" text="X" />
        </div>
        <div id="row">
        <NumberButton buttonStyle = "Regular"  text="1" />
      <NumberButton buttonStyle = "Regular" text="2" />
          <NumberButton buttonStyle = "Regular" text="3" />
          <NumberButton buttonStyle = "Red" text="-" />
        </div>
        <div id="row">
        <NumberButton buttonStyle = "Regular"  text="1" />
      <NumberButton buttonStyle = "Regular" text="2" />
          <NumberButton buttonStyle = "Regular" text="3" />
          <NumberButton buttonStyle = "Red" text="+" />
        </div>
        <div id="row">
        <ActionButton buttonStyle = "Action" text = "0" />
          <NumberButton buttonStyle = "Red" text="=" />
        </div>
      </div>
    </div>
  
  );
};

export default App;
