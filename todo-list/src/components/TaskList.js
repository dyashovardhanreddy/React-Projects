import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const TaskList = () => {
    const {tasks, deleteTask} = useContext(AppContext);


    return (
        <div className="task-list">
            { tasks && tasks.map((task, index) => (
                <div key={task.id} className="task-display">
                    <p className="task-name-display">{task.name}</p>
                    <button className="btn-delete" onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}