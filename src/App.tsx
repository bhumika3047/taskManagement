import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Task Management</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
