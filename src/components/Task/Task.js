import React, { Component } from "react";
import MenuBar from "../Reusable/MenuBar";
import axios from "axios";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { Spinner } from "reactstrap";

class Task extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      modal: false,
      title: "",
      completed: false,
      userId: 1,
      loading: true,
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      this.setState({ todos: res.data.splice(0, 5), loading: false });
    });
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleChanges = (e) => {
    this.setState({ completed: e.target.value });
  };

  onTaskSubmit = () => {
    const { title, userId, completed } = this.state;
    let id = this.state.todos.length + 1; 
    this.setState({
      todos: [
        ...this.state.todos,
        { userId: userId, id: id, title: title, completed: completed },
      ],
    });
    this.setState({ modal: false });
  };

  onDelete = (id) => {
    this.setState({ todos: this.state.todos.filter((task) => task.id !== id) });
  };

  render() {
    const { todos, modal, loading } = this.state;
    const { className } = this.props;
    let data;
    if (loading === true) {
      data = <Spinner type="grow" color="primary" />
    } else {
      data = (
        <React.Fragment>
          <div className="container my-5">
            <Table>
              <tbody>
                {todos !== null
                  ? todos.map((todo) => (
                      <tr key={todo.id}>
                        <th scope="row">{todo.id}</th>
                        <td>{todo.title}</td>
                        <td>{todo.completed.toString()}</td>
                        <td>
                          <Button
                            color="danger"
                            onClick={this.onDelete.bind(this, todo.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </Table>
            <Button color="primary" onClick={this.toggle}>
              Add Task
            </Button>
          </div>

          <div>
            <Modal isOpen={modal} toggle={this.toggle} className={className}>
              <ModalHeader toggle={this.toggle}>Add Task</ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    {/* <Label for="exampleEmail">id</Label> */}
                    {/* <Input
                      type="numbar"
                      name="id"
                      placeholder="id"
                      onChange={this.onHandleChange}
                    /> */}
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="title"
                      placeholder="title"
                      onChange={this.onHandleChange}
                    />
                  </FormGroup>
                  {/* <FormGroup>
                  <Input
                    type="text"
                    name="completed"
                    placeholder="completed"
                    onChange={this.onHandleChanges}
                  />
                </FormGroup> */}
                  <FormGroup>
                    <Input
                      type="select"
                      name="completed"
                      id="exampleSelect"
                      onChange={this.onHandleChanges}
                      value = { this.state.completed }
                    >
                      <option>false</option>
                      <option>true</option>
                    </Input>
                  </FormGroup>
                  <Button color="success btn-block" onClick={this.onTaskSubmit}>
                    Submit Task
                  </Button>
                </Form>
              </ModalBody>
            </Modal>
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <MenuBar />
        { data }
      </React.Fragment>
    );
  }
}

export default Task;
