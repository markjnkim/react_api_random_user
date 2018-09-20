import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users:[],
      store: []
    }
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
      .then( json => json.data.results.map(res => (
        {
        name: `${res.name.first} ${res.name.last}`,
        id: res.registered
      })))
      .then(newData => this.setState({ users: newData, store: newData }))
      .catch(err => alert(err));
  }


  render() {
    const {users} = this.state;
    return (
      <div className="Card">
        <div className="header">NAME LIST</div>
      <SearchBar searchFunc={(e) => this.filterNames(e)}/>
      <List usernames={users}/>
      </div>
    );
  }
}

export default App;
