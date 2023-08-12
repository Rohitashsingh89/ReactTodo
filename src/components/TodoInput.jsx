import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TodoList from './TodoList';

const getlocalstoragetodos = () => {
  let todos = localStorage.getItem('todos');

  if (todos) {
    return JSON.parse(localStorage.getItem('todos'));
  } else {
    return [];
  }
}

function TodoInput() {

  const [modalOpen, setModalOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  const [priority, setPriority] = useState('');
  const [todos, setTodos] = useState(getlocalstoragetodos());
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(null);


  const toggleModal = () => {
    if (!modalOpen) {
      setInputText('');
      setInputDesc('');
      setPriority('');
      setSelectedTodoIndex(null);
    }
    setModalOpen(!modalOpen);
  };

  const handleInputTextChange = (e) => {
    const newText = e.currentTarget.value;

    if (newText.length <= 23) {
      setInputText(newText);
    } else {
        alert("You can't write more than 25 characters in the title section.");
    }
  }

  const handleInputDescChange = (e) => {
    setInputDesc(e.currentTarget.value);
  }

  const handlePriorityChange = (e) => {
    setPriority(e)
  }

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleUpdateTodo = (index) => {
    const selectedTodo = todos[index];
    setInputText(selectedTodo.inputText);
    setInputDesc(selectedTodo.inputDesc);
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
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedTodoIndex !== null) {
      // Update the selected todo
      const updatedTodos = [...todos];
      const selectedTodo = updatedTodos[selectedTodoIndex];
      selectedTodo.priority = priority;
      selectedTodo.inputText = inputText;
      selectedTodo.inputDesc = inputDesc;
      selectedTodo.status = 'Done';
      setTodos(updatedTodos);

      // Clear the selected todo index
      setSelectedTodoIndex(null);
    } else {
      // Create a new todo
      const newTodo = {
        priority,
        inputText,
        inputDesc,
        status: 'Incomplete'
      };
      setTodos([...todos, newTodo]);
    }

    // Process the form submission here
    setPriority('');
    setInputText('');
    setInputDesc('');
  }


  return (
    <>
      <div className="wrapper">
        <div className='box d-flex flex-wrap' style={{ gap: "20px" }}>
          <div className="todocontainer">
            <div className="box bg-light d-flex flex-column justify-content-center align-items-center shadow" style={{ width: "300px", height: "300px" }}>
              <li className='fa fa-plus text-primary' onClick={toggleModal} style={{ padding: "2rem", border: "2px dashed blue", borderRadius: "50%", cursor: "pointer" }}></li>
              <span className='mt-2'>Add Stack</span>
            </div>
          </div>

          {/* Render the todos using the TodoList component */}
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onUpdateTodo={handleUpdateTodo} onUpdateStatus={handleToggleStatus} />

        </div>

        {/* modal for creating or updating stack  */}
        <Modal isOpen={modalOpen} toggle={toggleModal} className="centered-modal">
          <ModalHeader toggle={toggleModal}>
            Add Task
            <span onClick={toggleModal} className="close-icon">&#10006;</span>
          </ModalHeader>
          <ModalBody>

            <form id='ToDoForm' onSubmit={handleSubmit} >
              <div className="form-group">
                <label htmlFor="inputValue">Task</label>
                <input type="text" className="form-control " id="inputValue" 
                  value={inputText}
                  onChange={handleInputTextChange}
                  style={{ outline: "none" }}
                  placeholder='Specify your task...'
                  required />
                <label htmlFor="desc">Description</label>
                <textarea name="desc"
                  id="desc" className='form-control'
                  value={inputDesc}
                  cols="30" rows="3"
                  onChange={handleInputDescChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <div>
                  <Button
                    type="button"
                    color={priority === 'high' ? 'danger' : 'outline-danger'}
                    className={`m-2  ${priority === 'high' ? 'active' : ''}`}
                    onClick={() => handlePriorityChange('high')}
                  >
                    High
                  </Button>
                  <Button
                    type="button"
                    color={priority === 'medium' ? 'warning' : 'outline-warning'}
                    className={`m-2 ${priority === 'medium' ? 'active' : ''}`}
                    onClick={() => handlePriorityChange('medium')}
                  >
                    Medium
                  </Button>
                  <Button
                    type="button"
                    color={priority === 'high' ? 'success' : 'outline-success'}
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
            <button type="submit" form="ToDoForm" className="btn2 btn-secondary" onClick={toggleModal} style={{ border: "none", outline: "none", cursor: "pointer" }}>Add</button>
          </ModalFooter>
        </Modal>

      </div>
    </>
  )
}

export default TodoInput;
