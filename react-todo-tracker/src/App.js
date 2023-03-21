import { useState } from "react";
import AddTask from "./components/add-task";
import FilterTasks from "./components/filter-tasks";
import TasksList from "./components/tasks-list";

function App() {
    const [tasksList, setTasksList] = useState([]);

    const addItemsToTaskList = item => {
        const tasksCopy = [...tasksList];
        tasksCopy.push(item);
        setTasksList(tasksCopy);
    };

    const markItemAsDone = index => {
        const tasksCopy = [...tasksList];
        tasksCopy[index].status = "done";
        setTasksList(tasksCopy);
    };

    return (
        <div className='App'>
            <h1>TO DO APP</h1>

            <AddTask addItemsToTaskList={addItemsToTaskList} />

            <FilterTasks />

            <TasksList tasksList={tasksList} markItemAsDone={markItemAsDone} />
        </div>
    );
}

export default App;
