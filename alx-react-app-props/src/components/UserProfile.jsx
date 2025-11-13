import { createContext, useContext } from 'react';
import UserContext from './UserContext';
function UserProfile() {
  const userData = useContext(UserContext);
  
  return (
    <div>
      <h2 style={{ color: 'blue' }}>{userData.name}</h2>
      <p>Age: <span style={{ marginLeft: '10px' }}>{userData.age}</span></p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
}

export default UserProfile;