import React from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Main from "./Main";

class App extends React.Component {
  render() {
    return (
      <div>
        App changed
        <Header />
        <Dashboard />
        <Main />
      </div>
    );
  }
}

export default App;
