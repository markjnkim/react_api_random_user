import React from 'react';
import LoadingHOC from '../LoadingHOC.js';
import '../styles/main.css'; 

const List = props => {
  const {usernames} = props;
  return(
    <ul>
      {usernames.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}

export default LoadingHOC(List);

