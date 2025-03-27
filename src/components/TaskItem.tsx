import React from 'react';
import { Task } from '../redux/types';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';

interface TaskItemProps {
    task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Due Date: {task.dueDate}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TaskItem;
