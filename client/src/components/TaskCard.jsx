import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
    // Import 'useNavigate' from React Router to navigate to other pages

    const navigate = useNavigate();  // Create a navigation function

    return (
        <div
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer rounded-lg"
            onClick={() => {
                navigate(`/tasks/${task.id}`);  // Trigger navigation to a specific task's details page
            }}
        >
            <h1 className="font-bold uppercase">{task.title}</h1> {/* Display the task's title in bold uppercase */}
            <h3 className="font-bold text-slate-300">{task.category}</h3> {/* Display the task's category in bold with a specific text color */}
            <p className="text-slate-400">{task.description}</p> {/* Display the task's description with a specific text color */}
        </div>
    );
}