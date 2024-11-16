// src/App.tsx
import React from 'react';
import UserInfo from './components/UserInfo';
import Card from './components/Card';

const App: React.FC = () => {
  const user = {
    username: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
  };

  return (
    <div>
      <Card>
      <UserInfo 
        username={user.username} 
        age={user.age} 
        email={user.email} 
      />
      </Card>
    </div>
  );
};

export default App;
