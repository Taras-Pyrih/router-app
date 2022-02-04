import { v4 as uuidv4 } from 'uuid';
import './UserList.scss';

export const UserList = props => {
  const userList = props.data.map(item => {
    return (
      <li className='listItem' key={uuidv4()}>
        <span>{item.id}</span>
        <span>{item.username}</span>
        <span>{item.name}</span>
      </li>
    );
  });

  return (
    userList.length != 0 &&
    <div className='UserList'>
      <ul>{userList}</ul>
    </div>
  );
}