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
    let filteredList = this.inputList.filter((el) => el.id !== id);
    this.setState({ tasksList: filteredList });
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
        {/* <Task  list={this.state.tasksList} onClick={this.handleDelete}/> */}
        {this.state.tasksList.map(({ value, id }) => (
          <span>
            <p>{value}</p>
            <button
              className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => {
                this.setState((prevState) => {
                  return { tasksList: prevState.tasksList.filter((el) => el.id !== id) };
                });
              }}
            >
              Delete
            </button>
          </span>
        ))}
      </div>
    );
  }
}

export default ToDo;
