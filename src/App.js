import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import {v4 as uuid} from 'uuid';
import axios from 'axios';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import './App.css';

const state = {
 todos: []
};

function App() {
  const [, setState] = useState();
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        state.todos = res.data;
        setState({});
      })
  }, []);

  // Toggle Complete
  const markComplete = (id) => {
    state.todos = state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setState({});
  };

  // Delete Todo
  const delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        state.todos = state.todos.filter(todo => todo.id !== id);
        setState({});
      });
  };

  // Add Todo
  const addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    }).then(res => {
      state.todos = [...state.todos, res.data];
      setState({});
    })
  };

  return (
    <Router>
      <div className="App">
        <div className='container'>
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddTodo addTodo={addTodo} />
              <Todos todos={state.todos} markComplete={markComplete} delTodo={delTodo} />
            </React.Fragment>
          )} />
          <Route path='/about' component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
