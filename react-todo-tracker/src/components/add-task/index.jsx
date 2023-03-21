import "./add-task.css";
import { categoriesList } from "../../constants/categories";
import CategoriesDropdown from "../../common/categories-dropdown";
import { useState } from "react";

// REACT HOOKS
// useState

function AddTask(props) {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [taskCategory, setTaskCategory] = useState("");

    const handleTitleChange = event => {
        const text = event.target.value;
        setTaskTitle(text);
    };

    const handleDescChange = event => {
        const text = event.target.value;
        setTaskDesc(text);
    };

    const handleCatgChange = event => {
        const text = event.target.value;
        setTaskCategory(text);
    };

    const resetForm = () => {
        setTaskTitle("");
        setTaskDesc("");
        setTaskCategory("");
    };

    const handleAddItemSubmit = e => {
        const newItem = {
            title: taskTitle,
            desc: taskDesc,
            status: "open",
            category: taskCategory,
        };
        props.addItemsToTaskList(newItem);
        resetForm();
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <form className='add-task-section' onSubmit={handleAddItemSubmit}>
            <div className='input-wrapper'>
                <label for='title'>
                    Task Title:
                    <input
                        type='text'
                        placeholder='Get groceries...'
                        id='title'
                        value={taskTitle}
                        onChange={handleTitleChange}
                        required
                    />
                </label>
            </div>

            <div className='input-wrapper'>
                <label for='desc'>
                    Task Description:
                    <textarea
                        placeholder='Details of the task'
                        id='desc'
                        onChange={handleDescChange}
                    >
                        {taskDesc}
                    </textarea>
                </label>
            </div>

            <div className='input-wrapper'>
                <label for='category'>
                    Task Category:
                    <CategoriesDropdown
                        categoriesList={categoriesList}
                        selectedCategory={taskCategory}
                        handleChange={handleCatgChange}
                    />
                </label>
            </div>

            <div className='input-wrapper'>
                <input type='submit' value={"ADD TASK"} />
            </div>
        </form>
    );
}

export default AddTask;
