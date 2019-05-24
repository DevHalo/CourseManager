import React from 'react';
import { Button } from "@blueprintjs/core";

export default class App extends React.Component {
  render() {
    return (<div>
      <h2>Welcome to React!</h2>
      <Button onClick={this.test} />
    </div>
    );
  }

  test() {
    console.log("hello");
  }
}