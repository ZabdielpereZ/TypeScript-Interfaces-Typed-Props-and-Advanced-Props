// src/components/UserInfo.tsx
import React from 'react';
import { UserInfoProps } from '../interfaces/UserInfoProps';

const UserInfo: React.FC<UserInfoProps> = ({ username, age, email }) => {
  return (
    <div>
      <h2>User Info</h2>
      <p>Username: {username}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserInfo;
