import React ,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "adish", age: 22 },
      { name: "alfi", age: 18 },
      { name: "hamza", age: 13 }
    ]
  }
  
  switchNameHandler = () =>{
    console.log('was clicked!')
  }
  render(){
    return (
      <div className="App">
        <h1>Hi! I am a react app</h1>
        <button onClick = {this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>some random text</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
  
}

export default App;
