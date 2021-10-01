import React, { Component } from "react";
import './App.css';
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";

class App extends Component  {
  render(){
    return (
      <div className="App">
        <Greet name="Bruce" heroName="Batman" >
          <p>This is children props - this correnspnds to the innerHTML of the Greet component</p>
          <h3>Will this 2nd prop show</h3>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Dayana" heroName="Wonder Woman" /><hr />


        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;


/**Note */

/**
 * - Props (short for property(ies) is the optional input that your component can accept)
 * - A prop is an object which contains the attribute and the values which have been passed 
 * from the parent component
 * - To specify props in a component, we specify them as attributes eg <Greet name="Bruce" />
 * - After passing the name attribute, go to the component(in this case Greet.js) and add a parameter
 *  to the functional componenet(you can call it props or any other name)
 * - Use the parameter you passed into the function in the function body
 * - if nothing is passed in the parent component(app.js), props.children(in Greet.js) renders nothing
 * - in class based component, the props are available through this.props(which is reserved 
 * keyword in class components)
 * - One big rule is that props are immutable i.e the value cannot be changed
 * - Tutorial Source - https://www.youtube.com/watch?v=m7OWXtbiXX8
 */
