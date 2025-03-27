// App.tsx
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, editTask } from './redux/actions';
import { Task } from './redux/types';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null); // `null` is allowed now

  const tasks = useSelector((state: any) => state.tasks);
  const dispatch = useDispatch();

  const openModal = (task?: Task) => {
    setEditingTask(task || null);  // Pass `null` here, since it's valid now
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);  // Reset editing task to `null`
  };

  const handleSaveTask = (task: Task) => {
    if (editingTask) {
      dispatch(editTask(task)); // Edit task
    } else {
      dispatch(addTask(task)); // Add new task
    }
  };

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));  // Delete task
  };

  return (
    <div className="app">
      <button onClick={() => openModal()}>Add New Task</button>
      <TaskList tasks={tasks} onEdit={openModal} onDelete={handleDeleteTask} />
      <TaskForm
        isOpen={isModalOpen}
        editingTask={editingTask}  // Now passing `null` is okay
        onClose={closeModal}
        onSave={handleSaveTask}
      />
    </div>
  );
};

export default App;
