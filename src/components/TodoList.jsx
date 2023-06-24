import React from 'react';
import { Alert} from 'reactstrap';

function TodoList({ todos, onDeleteTodo , onUpdateTodo, onUpdateStatus }) {

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
        <div className="todocontainer">
        {todos.length === 0 ? (
            <Alert color="secondary">
                No todos yet.
            </Alert>
        ) : (
            <div className="todos">
            {todos.map((todo, index) => (
                <div className="card card2" key={index}>
                <div className="card-body">
                    <p className="card-title text-secondary">
                        Task
                        <h5 className='fs-3 fw-bold text-dark'>{todo.inputText}</h5>
                    </p>
                    <p className="card-title text-secondary">
                        Priority
                        <h5 className="fs-3 fw-bold" style={{ color: todo.priority === 'high' ? 'red' : todo.priority === 'medium' ? 'yellow' : 'green' }}>
                        {todo.priority}
                        </h5>
                    </p>
                    <p className="progress-circle text-secondary">
                        status
                        <h5 className="fs-3 fw-bold" style={{ color: todo.status === 'Done' ? 'red' : todo.status === 'completed' ? 'yellow' : 'green' }}>
                        {todo.priority}
                        </h5>
                    </p>

                    {/* <p>Status: {todo.status}</p>
                    <div className="progress-circle">
                    <div className="progress-bar" style={{ width: `${todo.progress}%` }}></div>
                    </div> */}

                    {/* <div className="progress-circle">
                        <div
                            className={`progress-bar ${todo.status === 'Done' ? 'completed' : ''}`}
                            style={{ width: `${todo.status === 'Done' ? '100%' : '50%'}` }}
                        ></div>
                    </div> */}

                    {/* <div className="course-status">
                        <div className={`circle ${todo.status}`} />
                        <Button onClick={handleToggleStatus}>
                            {todo.status === 'Incomplete' && 'Incomplete'}
                            {todo.status === 'In Progress' && 'In Progress'}
                            {todo.status === 'Done' && 'Complete'}
                        </Button>
                    </div> */}

                    <div className="status-button">
                        <button
                            outline
                            className='px-3 py-1'
                            color="secondary"
                            onClick={() => handleToggleStatus(index)}
                            style={{outline: "none", border: "none", borderRadius: "10px"}}
                        >
                        {todo.status === 'Incomplete' ? 'Incomplete' : todo.status === 'In Progress' ? 'In Progress' : 'Done'}
                        </button>
                    </div>

                    <div className="progress-circle">
                        <div
                            className={`circle px-3 py-1 ${todo.status === 'Incomplete' ? 'incomplete' : todo.status === 'In Progress' ? 'inprogress' : 'complete'}`}
                            color="secondary"
                            style={{outline: "none", }}
                        >
                        </div>
                    </div>

                    <div className="icons">
                        <i 
                            className="fas fa-edit px-2" 
                            onClick={() => handleUpdateTodo(index)}
                            style={{cursor: "pointer"}}
                        ></i>
                        <i
                            className="fas fa-trash-alt px-2"
                            onClick={() => handleDeleteTodo(index)}
                            style={{cursor: "pointer"}}
                        ></i>
                    </div>
                </div>
             </div>
            ))}
            </div>
        )}
        </div>
    );
}

export default TodoList;

