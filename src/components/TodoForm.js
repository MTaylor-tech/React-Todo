import React from 'react';
import styled from 'styled-components';

const FormDiv = styled.div`
    .blueButton {
      box-shadow:inset 0px -3px 7px 0px #29bbff;
      background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
      background-color:#2dabf9;
      border-radius:3px;
      border:1px solid #0b0e07;
      display:inline-block;
      cursor:pointer;
      color:#ffffff;
      font-family:Arial;
      font-size:1.5rem;
      padding:9px 23px;
      text-decoration:none;
      text-shadow:0px 1px 0px #263666;
    }
    .blueButton:hover {
      background:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
      background-color:#0688fa;
    }
    .blueButton:active {
      position:relative;
      top:1px;
    }
    .redButton {
    	box-shadow:inset 0px -3px 7px 0px #781f1f;
    	background:linear-gradient(to bottom, #f72e2e 5%, #4d0808 100%);
    	background-color:#f72e2e;
    	border-radius:3px;
    	border:1px solid #0d060a;
    	display:inline-block;
    	cursor:pointer;
    	color:#ffffff;
    	font-family:Arial;
    	font-size:1.5rem;
    	padding:9px 23px;
    	text-decoration:none;
    	text-shadow:0px 1px 0px #662727;
      margin-top: 2vh;
    }
    .redButton:hover {
    	background:linear-gradient(to bottom, #4d0808 5%, #f72e2e 100%);
    	background-color:#4d0808;
    }
    .redButton:active {
    	position:relative;
    	top:1px;
    }

    input {
      height: 2.4rem;
      font-size: 2rem;
      margin-right: 2vw;
    }
`;

class TodoForm extends React.Component {
  constructor () {
    super();
    this.state = {
      task: 'Task'
    };
  }

  changeHandler = (event) => {
    this.setState({task: event.target.value});
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.addFunction(this.state.task);
    this.setState({task: 'Task'});
    event.target.reset();
  }

  render() {
    return (
      <FormDiv>
        <form onSubmit={this.submitHandler}>
          <input onChange={this.changeHandler} placeholder={this.state.task} />
          <button className="blueButton" type="submit">Add Task</button>
        </form>
        <button className="redButton" onClick={this.props.clearCompleted}>Clear Completed</button>
      </FormDiv>
    );
  }
}

export default TodoForm;
