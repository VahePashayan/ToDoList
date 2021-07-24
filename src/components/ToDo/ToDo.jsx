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

  handleAdd = () => {
    this.inputList.push(this.state.inputValue);
    this.setState({ tasksList: this.inputList });
    this.setState({ inputValue: "" });
    console.log(this.inputList);
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
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
        <Task list={this.state.tasksList} />
      </div>
    );
  }
}

export default ToDo;
