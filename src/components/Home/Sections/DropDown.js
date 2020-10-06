import React, { Component } from "react";
import { FormGroup, Input } from "reactstrap";

class DropDown extends Component {

  constructor() {
    super();
    this.state = {
      value : '0'
    }
  }

  onHandleChange = (e) => {
    this.setState({ value : e.target.value })
    this.props.filters(e.target.value);
  }

  render() {
    const { list } = this.props

    return (
      <div>
        <FormGroup>
          <Input type="select" className = 'w-50' onChange = {this.onHandleChange} value = { this.state.value } name="select" id="exampleSelect">
            {list.map((data) => (
              <option value = { `${data.id}` } key = { data.id } >{data.name}</option>
            ))}
          </Input>
        </FormGroup>
      </div>
    );
  }
}

export default DropDown;
