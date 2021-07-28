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
        const newState = {
          tasksList: [
            ...prevState.tasksList,
            { value: this.state.inputValue, id: this.id },
          ],
          inputValue: "",
        };
        return newState;
      });
    }
  };

  componentDidMount() {
    const stateData = JSON.parse(localStorage.getItem("state"));
    if (localStorage.getItem("state")) {
      this.setState({
        inputValue: stateData.inputValue,
        tasksList: stateData.tasksList,
      });
    } else {
      this.setState({
        inputValue: "",
        tasksList: [],
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state));
  }

  handleChange = (e) => {
    this.setState(() => {
      const newItem = { inputValue: e.target.value }
      return newItem;
    });
  };

  handleDelete = (id) => {
    this.setState((prevState) => {
      const deletedItem ={ tasksList: prevState.tasksList.filter((el) => el.id !== id) };
      return deletedItem;
    });
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
        <Task list={this.state.tasksList} onClick={this.handleDelete} />
      </div>
    );
  }
}

export default ToDo;
