import "./tasks-list.css";

function TasksList(props) {
    return (
        <div className='tasks-list-section'>
            <h3>List of Tasks</h3>

            <table className='list-table'>
                <tr>
                    <th>Task title</th>
                    <th>Task category</th>
                    <th>Actions</th>
                </tr>
                {props.tasksList.map((item, index) => {
                    return (
                        <tr>
                            <td
                                className={
                                    item.status === "done"
                                        ? "strikethrough"
                                        : ""
                                }
                            >
                                {item.title}
                            </td>
                            <td>{item.category}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        props.markItemAsDone(index);
                                    }}
                                >
                                    Mark as Done
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default TasksList;
