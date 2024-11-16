import React from 'react';
import PropTypes from 'prop-types';

function TodoClearCompleted(props) {
  return (
    <button onClick={props.clearCompleted()} className='button'>
      Clear completed
    </button>
  );
}

export default TodoClearCompleted;
