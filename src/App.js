import react, { Component } from 'react';
import './App.test';
import { cardlist } from './component/card-list/card-list.components';

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
      <div className='App'>
      
      <cardlist name='Ashish'>
      <h1>Ashish</h1>
      </cardlist>
     
      {
          this.state.monster.map(
            monster =>
            (<h1 key={monster.id}>
               { monster.name } 
            </h1>))
      }
      </div>
    );
  }
}

export default App;
