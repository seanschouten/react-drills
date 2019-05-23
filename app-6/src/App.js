import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Todo from './Components/Todo'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todoList: [],
      userInput: '',
    }
  }

    handleTodo(val){
      this.setState({
        userInput: val
      })
    }

    addTodo = () => {
      this.setState({
        todoList:
        [...this.state.todoList, this.state.userInput]
      })
    }
  







  render() {
    console.log(this.state.todoList)
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input type='text' placeholder='Enter new task' onChange ={(e) => this.handleTodo(e.target.value)}/>
        <button onClick={this.addTodo}>Add</button>
        <Todo />
      </div>
    );
  }
}

export default App;
