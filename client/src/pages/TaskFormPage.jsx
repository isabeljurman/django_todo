import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {getTask, createTask, deleteTask, updateTask} from "../api/tasks.api.js";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-hot-toast";

export function TaskFormPage() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue
    } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
                if (params.id) {
                    await updateTask(params.id, data);
                    toast.success('Task updated', {
                        position: 'top-center',
                        style: {
                            background: "#101010",
                            color: "#fff"
                        }
                    });
                } else {
                    await createTask(data);
                    toast.success('Task created', {
                        position: 'top-center',
                        style: {
                            background: "#101010",
                            color: "#fff"
                        }
                    });
                }
                navigate('/tasks');
            }
        )
    ;

    useEffect(() => {
        if (params.id) {
            const fetchTask = async () => {
                const {data: {title, category, description},} = await getTask(params.id);
                setValue('title', title);
                setValue('category', category);
                setValue('description', description);
            }
            fetchTask();
        }
    }, []);

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                <input type="text"
                       placeholder="Title"
                       {...register("title", {required: true})}
                       className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                />
                {errors.title && <span>Title is required</span>}
                <input type="text"
                       placeholder="Category"
                       {...register("category", {required: true})}
                       className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                />
                {errors.category && <span>Category is required</span>}
                <textarea rows="3"
                          placeholder="Description"
                          {...register("description")}
                          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                ></textarea>
                <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Save</button>
            </form>
            {params.id &&
                <button
                    className="bg-red-500 p-3 rounded-lg block w-full mt-3"
                    onClick={async () => {
                    const accepted = window.confirm('Are you sure?')
                    if (accepted) {
                        await deleteTask(params.id);
                        toast.success('Task deleted', {
                            position: 'top-center',
                            style: {
                                background: "#101010",
                                color: "#fff"
                            }
                        });
                        navigate('/tasks');
                    }
                }}>
                    Delete
                </button>}
        </div>
    );
}