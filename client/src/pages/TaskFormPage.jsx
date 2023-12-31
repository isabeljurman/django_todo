import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getTask, createTask, deleteTask, updateTask } from "../api/tasks.api.js";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function TaskFormPage() {
    const {
        register, // Register form input elements
        handleSubmit, // Handle form submission
        formState: { errors }, // Handle form validation errors
        setValue // Set form input values
    } = useForm();

    const navigate = useNavigate(); // Navigate to different routes
    const params = useParams(); // Get route parameters

    const onSubmit = handleSubmit(async (data) => {
        // Handle form submission
        if (params.id) {
            // If there is a task ID, update the task
            await updateTask(params.id, data);
            toast.success('Task updated', {
                position: 'top-center',
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            });
        } else {
            // If there is no task ID, create a new task
            await createTask(data);
            toast.success('Task created', {
                position: 'top-center',
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            });
        }
        navigate('/tasks'); // Navigate to the "/tasks" route
    });

    useEffect(() => {
        // Fetch task details when component mounts
        if (params.id) {
            const fetchTask = async () => {
                const { data: { title, category, description } } = await getTask(params.id);
                setValue('title', title);
                setValue('category', category);
                setValue('description', description);
            };
            fetchTask();
        }
    }, []);

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                <input type="text"
                       placeholder="Title"
                       {...register("title", { required: true })}
                       className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                />
                {errors.title && <span>Title is required</span>}
                <select
                    {...register("category", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                >
                    <option value="Work">Work</option>
                    <option value="Home">Home</option>
                    <option value="Personal">Personal</option>
                    <option value="Health">Health</option>
                    <option value="Other">Other</option>
                </select>
                {errors.category && <span>Category is required</span>}
                <textarea rows="3"
                          placeholder="Description"
                          {...register("description")}
                          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                ></textarea>
                <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3 hover:bg-indigo-600">Save</button>
            </form>
            {params.id &&
                <button
                    className="bg-red-500 p-3 rounded-lg block w-full mt-3 hover:bg-red-600"
                    onClick={async () => {
                        const accepted = window.confirm('Are you sure?');
                        if (accepted) {
                            await deleteTask(params.id);
                            toast.success('Task deleted', {
                                position: 'top-center',
                                style: {
                                    background: "#101010",
                                    color: "#fff"
                                }
                            });
                            navigate('/tasks'); // Navigate to the "/tasks" route after deleting the task
                        }
                    }}>
                    Delete
                </button>}
        </div>
    );
}
