import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <div>
        {options.map(option => (
        <button key={shortid.generate()} type="button" name={option} onClick={() => onLeaveFeedback(option)}>
            {option}
        </button>
        ))}
    </div>
    );
  };
  
  
  FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
  };