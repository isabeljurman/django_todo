import axios from "axios";

// Create an instance of Axios with a base URL for the task API.
const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

// Get all tasks from the API.
export const getAllTasks = () => tasksApi.get('');

// Get a specific task by its ID.
export const getTask = (id) => tasksApi.get(`/${id}/`);

// Create a new task by sending a POST request to the API.
export const createTask = (task) => tasksApi.post('', task);

// Delete a task by sending a DELETE request to the API with its ID.
export const deleteTask = (id) => tasksApi.delete(`/${id}/`);

// Update an existing task by sending a PUT request to the API with its ID and the updated data.
export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);
