import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  state = {users: []}
  
    componentDidMount() {
      fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }
  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the test server</h1>
        </header>
        <p className="App-intro">
          Testing Node and React 
        </p>

        <div>
        <h1>User list from node back-end</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
      </div>
    );
  }
}

export default App;
