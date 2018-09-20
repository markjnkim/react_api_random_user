import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar.js';
import List from './components/List/List.js';

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

  filterNames(e){
    this.setState({users: this.state.store.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))})
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
