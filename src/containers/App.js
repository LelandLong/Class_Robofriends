import React, { useState, useEffect } from 'react';
import Scroll from '../components/Scroll';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      // console.log('2 didMount; users: ', users);
      setRobots(users);
    });
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
    //console.log(filteredRobots);
  };

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  console.log('App robots:' + JSON.stringify(robots) + ' ; searchField:' + searchField);

  if (!robots.length) {  // robots.length === 0
    return <h1 className='tc f1'>Loading...</h1>
  } else {
    return (
      <div className='tc'>
        <h1 className='f1'>RobotFriends</h1>
        <React.StrictMode>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </React.StrictMode>
      </div>
    );
  };
}

export default App;
