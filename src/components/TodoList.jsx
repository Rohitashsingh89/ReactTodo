import React from 'react';
import { Alert } from 'reactstrap';

function TodoList({ todos, onDeleteTodo, onUpdateTodo, onUpdateStatus }) {

    const handleDeleteTodo = (index) => {
        onDeleteTodo(index);
    };

    const handleUpdateTodo = (index) => {
        onUpdateTodo(index);
    }

    const handleToggleStatus = (index) => {
        onUpdateStatus(index);
    }

    return (
        <>
            {todos.length === 0 ? (
                <Alert color="secondary">
                    No todos yet.
                </Alert>
            ) : (
                <>
                    {todos.map((todo, index) => (
                        <>
                            <div className="todocontainer">
                                <div className="box bg-light d-flex justify-content-center align-items-center shadow" style={{ width: "300px", height: "300px" }}>
                                    <div className="col-xl-12 bg-light" style={{ height: "100%", padding: "-10px 10px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                                        <div className='mt-0'>
                                            <h4 className='title'>{todo.inputText}</h4>
                                            <p className="content">{todo.inputDesc}</p>
                                        </div>
                                        <div>
                                            <hr />
                                            <div className='d-flex justify-content-between'>
                                                <div className="card-title text-secondary">
                                                    Priority
                                                    <p className="fs-3 fw-bold" style={{ color: todo.priority === 'high' ? 'red' : todo.priority === 'medium' ? 'yellow' : 'green' }}>
                                                        {todo.priority}
                                                    </p>
                                                </div>
                                                <div className="status-button">
                                                    <button
                                                        className='px-3 py-1 fixed-height-button'
                                                        color="secondary"
                                                        onClick={() => handleToggleStatus(index)}
                                                        style={{ outline: "none", border: "none", borderRadius: "" }}
                                                    >
                                                        {todo.status === 'Incomplete' ? 'Incomplete' : todo.status === 'In Progress' ? 'InProgress' : 'Done'}
                                                    </button>
                                                </div>
                                                <div className="progress-circle pt-2 pr-2">
                                                    <div
                                                        className={`circle ${todo.status === 'Incomplete' ? 'incomplete' : todo.status === 'In Progress' ? 'inprogress' : 'Done'}`}
                                                        color="secondary"
                                                        style={{ outline: "none", }}
                                                    >
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='d-flex justify-content-between '>
                                                <p>Date</p>
                                                <i
                                                    className="fas fa-edit px-2"
                                                    onClick={() => handleUpdateTodo(index)}
                                                    style={{ cursor: "pointer" }}
                                                ></i>
                                                <i
                                                    className="fas fa-trash-alt px-2"
                                                    onClick={() => handleDeleteTodo(index)}
                                                    style={{ cursor: "pointer" }}
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                    ))}
                </>
            )
            }
        </>
    );
}

export default TodoList;

