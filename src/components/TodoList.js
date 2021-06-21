import React from 'react'

import Todo from './Todo'


const TodoList = ({todos, setTodos, filteredTodos}) => {
   console.log(todos);

  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {/* {todos.map((todo) => ( */}
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            text={todo.text}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}/>
        ))}
        {/* <Todo />
        <Todo /> */}
      </ul>
    </div>
  );
};

export default TodoList;
