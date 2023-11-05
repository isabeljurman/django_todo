import { Link } from 'react-router-dom';

// This component represents the navigation bar for the To-Do List.
export function Navigation() {
    return (
        // A flex container with space between items, and padding on the top and bottom.
        <div className="flex justify-between py-3">
            {/* Title of the app linked to the "tasks" page */}
            <Link to={"/tasks"}>
                <h1 className="font-bold text-3xl mb-4 text-sky-200 hover:text-sky-300">To-Do List</h1>
            </Link>
            {/* Create task button with a link to the "create" task page */}
            <button className="bg-indigo-500 px-3 py-2 rounded-lg hover:bg-indigo-600">
                <Link to={"/tasks/create"}>Create new task</Link>
            </button>
        </div>
    );
}