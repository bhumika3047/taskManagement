import React, { useState, useEffect } from "react";
import { Task } from "../redux/types";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";

interface TaskFormProps {
  editingTask?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({ editingTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"To Do" | "In Progress" | "Done">(
    "To Do"
  );
  const [dueDate, setDueDate] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
      setDueDate(editingTask.dueDate);
    }
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const task: Task = {
      id: editingTask ? editingTask.id : Math.floor(Math.random() * 1000000), // Random number as id
      title,
      description,
      status,
      dueDate,
    };

    if (editingTask) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask(task));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value as "To Do" | "In Progress" | "Done")
        }
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <button type="submit">{editingTask ? "Edit Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
