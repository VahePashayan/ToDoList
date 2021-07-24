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

  inputList = [];

  id = 0;

  handleAdd = () => {
    this.id = this.id + 1;
    this.inputList.push({ value: this.state.inputValue, id: this.id });
    this.setState({ tasksList: this.inputList });
    this.setState({ inputValue: "" });
    console.log(this.state.tasksList);
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleDelete = () => {
    this.setState(({ tasksList }) => ({
      tasksList: tasksList.filter((el) => el.id !== this.id),
    }));
    console.log(this.state.tasksList);
  };

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
        <Task list={this.state.tasksList} onClick={this.handleDelete}/>
      </div>
    );
  }
}

export default ToDo;
