import React from 'react';
import { Button } from "@blueprintjs/core";
import TestComponent from './components/TestComponent';

export default class App extends React.Component {
  render() {
    return (<div>
      <h2>Welcome to React!</h2>
      <Button onClick={this.test}>asdasd</Button>
      <TestComponent />
    </div>
    );
  }

  test() {
    console.log("hello");
  }
}