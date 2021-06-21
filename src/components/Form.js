import React from 'react';


const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
  // Here we can add whatever we want to add like functions and other code
  const inputTextHandler = (e) => {
    // console.log('shit')
    console.log(e.target.value)
    setInputText(e.target.value)
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random()* 1000},
    ]);
    setInputText('')
  }

    const statusHandler = (e) => {
    // console.log(e);
    console.log(e.target.value);
    setStatus(e.target.value)
     }


  return(
    <form>
      <input type="text" className="todo-input" value={inputText} onChange={inputTextHandler} />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>

  );
}

export default Form;
