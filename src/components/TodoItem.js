import React from 'react';
import PropTypes from 'prop-types';

const getStyle = (props) => {
  return {
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textDecoration: props.todo.completed ? 'line-through' : 'none'
  }
}

function TodoItem(props) {
  const {id, title} = props.todo;
  return (
    <div style={getStyle(props)}>
      <p>
        <input type='checkbox' onChange={() => props.markComplete(id)} /> {' '}
        {title}
        <button onClick={() => props.delTodo(id)} style={btnStyle}>x</button>
      </p>
    </div>
  );
}

// PropTypes
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '25%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;
