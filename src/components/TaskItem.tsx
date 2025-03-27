// TaskItem.tsx
import React from 'react';
import { Task } from '../redux/types';

interface TaskItemProps {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
    return (
        <div className="task-item">
            <div className="task-details">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Status: {task.status}</p>
                <p>Due Date: {task.dueDate}</p>
            </div>
            <div className="task-actions">
                <button className="edit-btn" onClick={() => onEdit(task)}>Edit</button>
                <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    );
};

export default TaskItem;
