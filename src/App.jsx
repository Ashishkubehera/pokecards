import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component
{
  constructor(){
    super();

    this.state={
      monster: []
    };
  }

  componentDidMount()
  {
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monster: users}));
  }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          this.state.monster.map(
            monster =>
            <h1 key={monster.id}>
               { monster.name } 
            </h1>)
        }
        </header>
      </div>
    );
  }
}

export default App;
