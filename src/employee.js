import React, { Component } from 'react';
import {connect} from 'react-redux';
import {mapStatetoProp,mapDispatchtoProp} from './configStore'
class Emp extends Component {
  render() {
    return (
      <div>
        <h1>name:{this.props.rxEmployee.name}</h1>
        <h3>age:{this.props.rxEmployee.age}</h3>
        <h3>age:{this.props.rxSalary.salary}</h3>
      </div>
    );
  }
}

export default connect(mapStatetoProp,mapDispatchtoProp)(Emp);
