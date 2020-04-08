import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import styled from 'styled-components';

const MainDiv = styled.div`
  width: 90vw;
  padding: 5%;
  background-color: black;
  color: white;

  h1 {
    font-size: 3.6rem;
  }
`;

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
    const storedList = localStorage.getItem("mySpecialTodoList");
    let newList = [];

    if (storedList !== undefined) {
      const splitList = storedList.split(';');
      newList = splitList.map(entry=>{
        const item = entry.split(',');
        let completed = false;
        if (item[2]==='true') {
          completed = true;
        }
        return {id: item[0], task: item[1], completed: completed};
      });
    }

    this.state = {
      listOfTodos: newList,
      todosShowing: newList
    };
  }

  saveList = (list) => {
    const newList = list.map(entry=>{
      let completedString = 'false';
      if (entry.completed) {
        completedString = 'true';
      }
      return `${entry.id},${entry.task},${completedString}`;
    })
    localStorage.setItem("mySpecialTodoList", newList.join(';'));
  }

  addTodo = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };
    const newList = [...this.state.listOfTodos, newTodo];
    this.setState({
      listOfTodos: newList,
      todosShowing: newList
    });
    this.saveList(newList);
  }

  setCompleted = (taskId, value) => {
      const newList = this.state.listOfTodos.map(task=>{
            if (task.id===taskId) {
              return {
                task: task.task,
                completed: value,
                id: task.id
              };
            } else {
              return task;
            }
      });
      this.setState({listOfTodos: newList, todosShowing: newList});
      this.saveList(newList);
  }

  clearCompleted = () => {
    const newList = this.state.listOfTodos.filter(t=>t.completed===false);
    this.setState({listOfTodos: newList, todosShowing: newList});
    this.saveList(newList);
  }

  searchFunction = (searchFilter) => {
    const filteredList = this.state.listOfTodos.filter(t=>t.task.toLowerCase().includes(searchFilter.toLowerCase()));
    this.setState({todosShowing: filteredList});
  }

  render() {
    return (
      <MainDiv>
        <h1>Quick To-Do List</h1>
        <TodoForm addFunction={this.addTodo} clearCompleted={this.clearCompleted} searchFunction={this.searchFunction} />
        <TodoList list={this.state.todosShowing} completedFunction={this.setCompleted} />
      </MainDiv>
    );
  }
}

export default App;
