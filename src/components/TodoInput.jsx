import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TodoList from './TodoList';


function TodoInput() {

  const [modalOpen, setModalOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [priority, setPriority] = useState('');
  const [todos, setTodos] = useState([]);
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(null);


  const toggleModal = () => {
    if (!modalOpen) {
      setInputText('');
      setPriority('');
      setSelectedTodoIndex(null);
    }
    setModalOpen(!modalOpen);
  };
  
  const handleInputChange = (e) => {
    setInputText(e.currentTarget.value);
  }

  const handlePriorityChange = (e) => {
    setPriority(e)
    // console.log(e)
  }

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleUpdateTodo = (index) => {
    const selectedTodo = todos[index];
    setInputText(selectedTodo.inputText);
    setPriority(selectedTodo.priority);
    setSelectedTodoIndex(index);
    setModalOpen(true);
  };

  const handleToggleStatus = (index) => {
    const updatedTodos = [...todos];
    const todoToUpdate = updatedTodos[index];

    if (todoToUpdate.status === 'Incomplete') {
      todoToUpdate.status = 'In Progress';
    } else if (todoToUpdate.status === 'In Progress') {
      todoToUpdate.status = 'Done';
    } else {
      todoToUpdate.status = 'Incomplete';
    }

    setTodos(updatedTodos);
  };    

  useEffect(() => {
    // Retrieve the stored data from localStorage
    const storedPriority = localStorage.getItem('priority');
    const storedTaskName = localStorage.getItem('taskName');

    if (storedPriority && storedTaskName) {
      // Set the stored values to the state variables
      setPriority(storedPriority);
      setInputText(storedTaskName);
    }
  }, []); // Empty dependency array to run the effect only once when the component mounts


  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the form data in local storage
    localStorage.setItem('priority', priority);
    localStorage.setItem('taskName', inputText);

    if (selectedTodoIndex !== null) {
      // Update the selected todo
      const updatedTodos = [...todos];
      const selectedTodo = updatedTodos[selectedTodoIndex];
      selectedTodo.priority = priority;
      selectedTodo.inputText = inputText;
      selectedTodo.status = 'Completed';
      setTodos(updatedTodos);
  
      // Clear the selected todo index
      setSelectedTodoIndex(null);
    } else {
      // Create a new todo
      const newTodo = {
        priority,
        inputText,
        status: 'Incompleted'
      };
      setTodos([...todos, newTodo]);
    }

    // Process the form submission here
    setPriority('');
    setInputText('');
    console.log('Selected priority:', priority);
    console.log('Task Name:', inputText);
    
    // console.log(inputText)
  }


  return (
    <>
    <div className="wrapper">
      <div className="headercontainer">
          <h1 >To Do List</h1>
          <button className='button' color="primary" onClick={toggleModal} style={{ border: 'none', outline: "none" }}>+ Add Task</button>
      </div>

        <Modal isOpen={modalOpen} toggle={toggleModal} className="centered-modal">
        <ModalHeader toggle={toggleModal}>
          Add Task
          <span onClick={toggleModal} className="close-icon">&#10006;</span>
        </ModalHeader> 
         <ModalBody>
            <form id='ToDoForm' onSubmit={handleSubmit} >
              <div className="form-group">
                <label htmlFor="inputValue">Task</label>
                <input type="text" className="form-control" id="inputValue" 
                value={inputText}
                onChange={handleInputChange} 
                style={{outline: "none", borderRadius: "10px"}}
                placeholder='Specify your task...'
                required />
              </div>
              <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <div>
                  <Button
                    type="button"
                    outline color="danger"
                    className={`m-2  ${priority === 'high' ? 'active' : ''}`}
                    onClick={() => handlePriorityChange('high')}
                  >
                    High
                  </Button>
                  <Button
                    type="button"
                    outline color='warning'
                    className={`m-2 ${priority === 'medium' ? 'active' : ''}`}
                    onClick={() => handlePriorityChange('medium')}
                  >
                    Medium
                  </Button>
                  <Button
                    type="button"
                    outline color='success'
                    className={`m-2 ${priority === 'low' ? 'active' : ''}`}
                    onClick={() => handlePriorityChange('low')}
                  >
                    Low
                  </Button>
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
              <button type="submit" form="ToDoForm" className="btn2 btn-secondary" onClick={toggleModal} style={{border: "none", outline: "none"}}>Add</button>
          </ModalFooter>
        </Modal>

      {/* Render the todos using the TodoList component */}
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onUpdateTodo={handleUpdateTodo} onUpdateStatus={handleToggleStatus} />
      
      </div>
      </>
      )
}

export default TodoInput;
