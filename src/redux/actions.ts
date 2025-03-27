import { Task } from "./types";

export const addTask = (task: Task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const editTask = (task: Task) => ({
  type: "EDIT_TASK",
  payload: task,
});

export const deleteTask = (id: number) => ({
  type: "DELETE_TASK",
  payload: id,
});
