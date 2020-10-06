import React, { Component } from "react";
import { Card } from "reactstrap";

class Information extends Component {
  render() {
    const { info } = this.props;
    return (
      <div>
        <Card className = 'p-4 my-5'>
          <p>{info}</p>
        </Card>
      </div>
    );
  }
}

export default Information;
