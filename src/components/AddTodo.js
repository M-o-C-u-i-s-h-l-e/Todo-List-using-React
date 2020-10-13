import React, {useState} from 'react';
import PropTypes from 'prop-types';

const state = {
  title: ''
};

function AddTodo(props) {
  const [, setState] = useState();

  const on_change = (e) => {
    state.title = e.target.value;
    setState({});
  };

  const on_submit = (e) => {
    e.preventDefault();
    props.addTodo(state.title);
    state.title = '';
    setState({});
  };

  return (
    <form onSubmit={on_submit} style={{display: 'flex'}}>
      <input 
        type='text' 
        name='title' 
        style={{flex: '10', padding: '5px'}} 
        placeholder='Add Todo ...' 
        value={state.title} 
        onChange={on_change} 
      />
      <input 
        type='submit' 
        value='Submit' 
        className='btn' 
        style={{flex: '1'}} 
      />
    </form>
  );
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo;
