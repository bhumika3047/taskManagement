// App.tsx
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, editTask } from './redux/actions';
import { Task } from './redux/types';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const tasks = useSelector((state: any) => state.tasks);
  const dispatch = useDispatch();

  const openModal = (task?: Task) => {
    setEditingTask(task || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleSaveTask = (task: Task) => {
    if (editingTask) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask(task));
    }
  };

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="app">
      <button onClick={() => openModal()}>Add New Task</button>
      <TaskList tasks={tasks} onEdit={openModal} onDelete={handleDeleteTask} />
      <TaskForm
        isOpen={isModalOpen}
        editingTask={editingTask}
        onClose={closeModal}
        onSave={handleSaveTask}
      />
    </div>
  );
};

export default App;
