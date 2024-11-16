import React from 'react';
import PropTypes from 'prop-types';

function TodoItemsRemaining(props) {
  return <span>{props.remaining()} items remaining</span>;
}

export default TodoItemsRemaining;
