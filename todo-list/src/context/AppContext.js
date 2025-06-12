import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [taskName, setTaskName] = useState();
    const [tasks, setTasks] = useState([]);

    const addTask = (e) => {
        e.preventDefault();
        setTasks([...tasks, { name: taskName, id: Date.now() }]);
    }

    const handleDelete = (taskIdToRemove) => {
       setTasks(currentTasks => currentTasks.filter(task => task.id !== taskIdToRemove));
    };

    const value = {
        taskName: taskName,
        setTaskName: setTaskName,
        tasks: tasks,
        setTasks: setTasks,
        addTask: addTask,
        deleteTask: handleDelete,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}