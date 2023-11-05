import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard.jsx";

export function ToDoList() {
    // State for storing the tasks and selected category
    const [tasks, setTasks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Fetch tasks when the component mounts
    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks();
            setTasks(res.data);
        }

        loadTasks();
    }, []);

    // Filter tasks based on the selected category
    const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter(task => task.category === selectedCategory);

    return (
        <div>
            <div>
                {/* Label for the category filter */}
                <label className="block mb-2 text-sm font-medium text-gray-300" htmlFor="category">Filter by
                    Category:</label>
                {/* Select dropdown for category selection */}
                <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-3 mb-4"
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Work">Work</option>
                    <option value="Home">Home</option>
                    <option value="Personal">Personal</option>
                    <option value="Health">Health</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="grid grid-cols-3 gap-3">
                {/* Map and render the filtered tasks using TaskCard component */}
                {filteredTasks.map(task => (
                    <TaskCard key={task.id} task={task}/>
                ))}
            </div>
        </div>
    );
}
