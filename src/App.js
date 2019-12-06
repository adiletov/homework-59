import './App.css';
import React, {Component} from 'react';
import Task1 from "./Containers/Task1/Task1";
import Task2 from "./Containers/Task2/Task2";

class App extends Component {
  render() {
    return (
            <div className="App">
                <Task1/>
                <Task2/>
            </div>
    );
  }
}

export default App;