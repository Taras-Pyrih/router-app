import { useState, useEffect } from 'react';
import { UserList } from '../UserList/UserList.js';
import './PageThree.scss';

export const PageThree = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users.length == 0) {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(array => setUsers(array));
    }
  });

  return (
    <div className='PageThree'>
      <h1>PageThree</h1>
      <UserList data={users}/>
    </div>
  ); 
}