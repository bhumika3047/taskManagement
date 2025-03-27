import React from 'react';
import { useSelector } from 'react-redux';
import { Task } from '../redux/types';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
    const tasks = useSelector((state: any) => state.tasks);

    return (
        <div>
            {tasks.map((task: Task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
