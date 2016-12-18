import React from 'react';
import cxs from 'cxs';

import {
  rootVars,
  allStyles,
  rootStyles,
  appStyles,
  todoAppStyles,
  titleClass,
  titleLeadClass,
  todoWrapperClasses,
  todoActionsClass
} from './styles';

const Title = (props) => {
  return (
    <header className={titleClass}>
      <h1 className={titleLeadClass}>
        Status
      </h1>
    </header>
  )
};


const TodoForm = ({addTodo}) => {
  let input;
  return (
    <section className="TodoForm">
      <input 
        ref={node => {
          input = node;
        }}
        className="TodoForm-input"
        placeholder="Add todo..."
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            addTodo(input.value);
            input.value = '';
          }
        }}
      />
      <button 
        onClick={() => {
          addTodo(input.value);
          input.value = '';
        }}
        type="button"
        className="TodoForm-btn"
      >
        <svg className="TodoForm-btn-content cxs-1604551930" width="1em" height="1em" fill={colorC} data-id="geomicon-compose" viewBox="0 0 32 32">
          <path d="M4 4 L16 4 L16 8 L8 8 L8 24 L24 24 L24 16 L28 16 L28 28 L4 28 z M26 2 L30 6 L16 20 L12 20 L12 16 z" />
        </svg>
      </button>
    </section>
  )
};

const Todo = ({todo, remove, previous, next}) => {
  return (
    <li className={todoWrapperClasses} data-state={todo.state}>
      {todo.stage === 3 ? <s className="Todo-text"> {todo.text} </s> : <span className="Todo-text">{todo.text}</span> }
      <div className={todoActionsClass}>
        {todo.stage === 0 ? '' : 
        <button 
          type="button"
          className='Todo-btn-prev'
          onClick={() => {previous(todo);}}>
          <svg className="cxs-1604551930" width="1em" height="1em" fill={colorD} data-id="geomicon-chevronLeft" viewBox="0 0 32 32"><path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z" /></svg>
        </button>
        }
        {todo.stage === 3 ? '' : 
        <button 
          type="button"
          className='Todo-btn-next'
          onClick={() => { next(todo);}}>
          <svg className="cxs-1604551930" width="1em" height="1em" fill={colorD} data-id="geomicon-chevronRight" viewBox="0 0 32 32"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z" /></svg>
        </button>
        }
        <button 
          type="button"
          className="Todo-btn-delete"
          onClick={ () => {remove(todo);}}>
          <svg className="cxs-1604551930" width="1em" height="1em" fill={colorC} data-id="geomicon-check" viewBox="0 0 32 32">
            <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z" />
          </svg>
        </button>
      </div>
    </li>
  );
};

const TodoList = ({todos, remove, next, previous}) => {
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove} next={next} previous={previous} />)
  });
  return (<ul className="TodoList">{todoNode}</ul>);
};


export class TodoApp extends React.Component {
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
  }
  // Add todo handler
  addTodo(val){
    // Assemble data
    const todo = {text: val, id: window.id++, stage: 0}
    // Update data
    this.state.data.push(todo);
    // Update state
    this.setState({data: this.state.data});
  }
  // Handle remove
  handleRemove(todo){
    todo.id = 3;
    let localID = todo.id;
    for (let key in this.state.data) {
      let allTodos = this.state.data;
      let todoitem = allTodos[key];
      if (localID === todoitem.id) {
        allTodos[key] = todo;
      }
      this.setState({
        data: allTodos
      });
    }
  }

  handlePreviousStage(todo) {
    todo.stage -= 1;
    let localID = todo.id;
    for (let key in this.state.data) {
      let allTodos = this.state.data;
      let todoitem = allTodos[key];
      if (localID === todoitem.id) {
        allTodos[key] = todo;
      }
      this.setState({
        data: allTodos
      });
    }
  }

  handleNextStage(todo) {
    todo.stage += 1;
    let localID = todo.id;
    for (let key in this.state.data) {
      let allTodos = this.state.data;
      let todoitem = allTodos[key];
      if (localID === todoitem.id) {
        allTodos[key] = todo;
      }
      this.setState({
        data: allTodos
      });
    }
  }

  render(){
    // Render JSX
    return (
      <section className="app">
        <Title />
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList 
          todos={this.state.data} 
          remove={this.handleRemove.bind(this)}
          next={this.handleNextStage.bind(this)}
          previous={this.handlePreviousStage.bind(this)}
        />
      </section>
    );
  }
};