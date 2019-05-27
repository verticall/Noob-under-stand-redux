import React, { Component } from 'react';
import {connect} from 'react-redux';
import {mapStatetoProp,mapDispatchtoProp} from './configStore'
import Emp from './employee';
class App extends Component {
  render() {
    return (
      <div>
        <Emp />
        <button onClick={()=>this.props.changeName(this.props.rxEmployee.name+" | -__- | ")}>
          click
        </button>
        <br/>
        <button onClick={()=>this.props.changeAge(this.props.rxEmployee.age+1)}>
          change age to next
        </button>
        <br/>
        <button onClick={()=>this.props.AddSalary(Math.floor(Math.random()*(5000+50)+50))}>
          เพิ่มเงินเดือน 500 บาบท
        </button>
      </div>
    );
  }
}
export default connect(mapStatetoProp,mapDispatchtoProp)(App);
