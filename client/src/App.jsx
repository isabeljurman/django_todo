import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {TasksPage} from "./pages/TasksPage.jsx";
import {TaskFormPage} from "./pages/TaskFormPage.jsx";
import {Navigation} from "./components/Navigation.jsx";
import {Toaster} from "react-hot-toast";

function App() {
    return (
        <BrowserRouter>
            <div className="container mx-auto">
                {/* Navigation component for app */}
                <Navigation/>

                {/* Define the route configurations using React Router */}
                <Routes>
                    {/* Home route redirects to the tasks page */}
                    <Route path='/' element={<Navigate to={"/tasks"}/>}/>

                    {/* TasksPage component for displaying tasks */}
                    <Route path='/tasks' element={<TasksPage/>}/>

                    {/* TaskFormPage component for creating new tasks */}
                    <Route path='/tasks/create' element={<TaskFormPage/>}/>

                    {/* TaskFormPage component for editing a specific task */}
                    <Route path='/tasks/:id' element={<TaskFormPage/>}/>
                </Routes>

                {/* Notification toaster for displaying messages */}
                <Toaster/>
            </div>
        </BrowserRouter>
    );
}

export default App;
