import React from 'react';
import styled from 'styled-components';

const TodoDiv = styled.div`
  margin: 2vh 2vw;

  label {
    font-size: 2.4rem;
    margin-left: 2vw;
  }

  .strikeThru {
    text-decoration: line-through;
    color: grey;
  }
`;

class Todo extends React.Component {
  constructor (props) {
    super();
    this.state = {
      taskName: props.task.task,
      completed: props.task.completed,
      id: props.task.id
    };
  }

  changeHandler = (event) => {
    const completed = !this.state.completed;
    this.setState({completed: completed});
    this.props.completedFunction(this.state.id, completed);
  }

  render() {
    return (
      <TodoDiv>
        {this.state.completed?<input name={this.state.id} type="checkbox" defaultChecked onChange={this.changeHandler} />:<input name={this.state.id} type="checkbox" onChange={this.changeHandler} />}
        {this.state.completed?<label htmlFor={this.state.id} className="strikeThru" onClick={this.changeHandler} >{this.state.taskName}</label>:<label htmlFor={this.state.id} onClick={this.changeHandler} >{this.state.taskName}</label>}
      </TodoDiv>
    );
  }
}

export default Todo;
