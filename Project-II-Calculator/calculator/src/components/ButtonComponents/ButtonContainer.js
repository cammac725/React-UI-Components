import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const numbers = ['clear', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const signs = ['÷ ', 'x', '-', '+', '='];

const ButtonContainer = (props) => {
  return (
    <div className='keypad'>
      <div className='keypad-left'>
        {numbers.map(num => (
          <NumberButton text={num} buttonStyle='number-btn' />
        ))}
      </div>
      <div className='keypad-right'>
        {signs.map(sign => (
          <ActionButton text={sign} buttonStyle='action-btn' />
        ))}
      </div>
    </div>

  )
}

export default ButtonContainer;