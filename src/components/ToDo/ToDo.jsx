import React, { Component } from "react";
import Input from "../Input";
import Task from "../Task";
import "./ToDo.css";

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      tasksList: [],
    };
  }

  id = 0;


  handleAdd = () => {
    if (this.state.inputValue.length > 0) {
      this.id = this.id + 1;
      this.setState((prevState) => { 
        return {tasksList: [...prevState.tasksList, { value: this.state.inputValue, id: this.id }], inputValue: ""} 
      });
    }
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleDelete = (id) => {
      this.setState((prevState) => {
        return { tasksList: prevState.tasksList.filter((el) => el.id !== id) };
      });
    }

  render() {
    return (
      <div className="container">
        <span>
          <Input
            value={this.state.inputValue}
            onChange={this.handleChange}
            onClick={this.handleAdd}
          />
        </span>
        <Task  list={this.state.tasksList} onClick={this.handleDelete}/>
      </div>
    );
  }
}

export default ToDo;
