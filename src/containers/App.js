import React, { Component } from 'react';
import Scroll from '../components/Scroll';
import './App.css';
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
    // console.log('1 constructor');
  };

  componentDidMount() {
    // this.setState({ robots: robots });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      // console.log('2 didMount; users: ', users);
      this.setState({ robots: users });
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value});
    //console.log(filteredRobots);
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    // console.log('3 render');

    if (!robots.length) {  // robots.length === 0
      return <h1 className='tc f1'>Loading...</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RobotFriends</h1>
          <React.StrictMode>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
          </React.StrictMode>
        </div>
      );
    };
  };
}

export default App;
