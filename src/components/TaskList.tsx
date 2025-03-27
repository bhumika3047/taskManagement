// TaskList.tsx
import React, { useState } from 'react';
import { Task } from '../redux/types';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onEdit: (task: Task) => void;
    onDelete: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
    // Filter state
    const [statusFilter, setStatusFilter] = useState<'All' | 'To Do' | 'In Progress' | 'Done'>('All');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    // Filter tasks based on status
    const filteredTasks = statusFilter === 'All' ? tasks : tasks.filter(task => task.status === statusFilter);

    // Sort tasks by due date
    const sortedTasks = filteredTasks.sort((a, b) => {
        const dateA = new Date(a.dueDate).getTime();
        const dateB = new Date(b.dueDate).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatusFilter(e.target.value as 'All' | 'To Do' | 'In Progress' | 'Done');
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(e.target.value as 'asc' | 'desc');
    };

    return (
        <div>
            <div className="filters">
                <select value={statusFilter} onChange={handleStatusChange}>
                    <option value="All">All Statuses</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>

                <select value={sortOrder} onChange={handleSortChange}>
                    <option value="asc">Sort by Due Date (Ascending)</option>
                    <option value="desc">Sort by Due Date (Descending)</option>
                </select>
            </div>

            <div className="task-list">
                {sortedTasks.map(task => (
                    <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
};

export default TaskList;
