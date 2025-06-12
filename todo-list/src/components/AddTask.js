import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const AddTask = () => {
    const {taskName, setTaskName, addTask} = useContext(AppContext);
    return(
        <div className="add-task-form">
            <form onSubmit={addTask}>
                <input className="input-task-name" value={taskName} placeholder="Add a task" onChange={e => setTaskName(e.target.value)}/>
                <button className="btn-add-task">Add</button>
            </form>
        </div>
    )
}