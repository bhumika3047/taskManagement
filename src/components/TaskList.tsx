// TaskList.tsx
import React from 'react';
import { Task } from '../redux/types';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onEdit: (task: Task) => void;
    onDelete: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
    return (
        <div className="task-list">
            {tasks.length === 0 ? (
                <p>No tasks available. Add a new task!</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
                ))
            )}
        </div>
    );
};

export default TaskList;
