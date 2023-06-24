import React from 'react';

function todos( ) {
  return (
    <div>todos</div>
  )
}

export default todos;


// import React from 'react';
 
// const ToDo = ({todo, handleToggle}) => {

//     const handleClick = (e) => {
//         e.preventDefault();
//         handleToggle(e.currentTarget.id)
//     }
//    return (
//        <div id={todo.id} key={todo.id + todo.task } name="todo" value={todo.id} onClick={handleClick} className={todo.complete  ? "todo strike" : "todo"}>
//            {todo.task}
//        </div>
//    );
// };
 
// export default ToDo;

// // import React from 'react';
// // import { Button } from 'reactstrap';

// // const TodoList = ({ todos, onDeleteTodo }) => {
// //   console.log(todos)
// //   return (
// //     <>
{/* <div className='container'>
      {todos.map((todo, index) => (
        <div className="card box m-2" key={index}>
          <div className="card-body">
            <h5 className="card-title">Task: {todo}</h5>
            <div className="priority-buttons">
              <Button outline color="danger" className="m-2">
                Priority: {todo.priority}
              </Button>
            </div>
            <p>Status: {todo.status}</p>
            <div className="progress-circle">
              <div className="progress-bar" style={{ width: `${todo.progress}%` }}></div>
            </div>
          </div>
          <div className="card-footer">
            <div className="icons">
              <i className="fas fa-edit px-2"></i>
              <i className="fas fa-trash-alt px-2" onClick={() => onDeleteTodo(index)}></i>
            </div>
          </div>
        </div>
      ))}
    </div> */}
// //           </>
// //   );
// // };

// // export default TodoList;

// // // import React from 'react'
// // // import './style.css';

// // // export default function todos() {

// // //   const [todos, setTodos] = useState([]);

// // //   const handleAddTodo = () => {
// // //     if (inputValue.trim() !== '') {
// // //       setTodos([...todos, inputValue]);
// // //       setInputValue('');
// // //     }
// // //   };

//   const handleDeleteTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };


// // //   return (
// // //     <>
    //   <div class="box todos">
    //   <ul>
    //     {todos.map((todo, index) => (
    //       <li key={index}>
    //         {todo}
    //         <button onClick={() => handleDeleteTodo(index)}>Delete</button>
    //       </li>
    //     ))}
    //   </ul>
    //     <span>I want to master python.</span>
    //     <div>
    //     <button type="button" class="btn btn-outline-primary mx-2">Update</button>
    //     <button type="button" class="btn btn-outline-danger">Delete</button>
    //     </div>
    //   </div>
      
    //   <div class="box todos">
    //     <span>I want to have a chocolate</span>
    //     <div>
    //     <button type="button" class="btn btn-outline-primary mx-2">Update</button>
    //     <button type="button" class="btn btn-outline-danger">Delete</button>
    //     </div>
    //   </div>
      
    //   <div class="box todos">
    //     <span>I am going for bath.</span>
    //     <div>
    //     <button type="button" class="btn btn-outline-primary mx-2">Update</button>
    //     <button type="button" class="btn btn-outline-danger">Delete</button>
    //     </div>
    //   </div>
      
// // //     </>
// // //   )
// // // }
