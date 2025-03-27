export interface Task {
  id: number;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
  dueDate: string; // ISO format string
}

export interface TaskState {
  tasks: Task[];
}

export interface AddTaskAction {
  type: "ADD_TASK";
  payload: Task;
}

export interface EditTaskAction {
  type: "EDIT_TASK";
  payload: Task;
}

export interface DeleteTaskAction {
  type: "DELETE_TASK";
  payload: number; // Task id
}

export type TaskActions = AddTaskAction | EditTaskAction | DeleteTaskAction;
