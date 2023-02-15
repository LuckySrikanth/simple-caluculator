import React, { useState } from 'react';
import "./App.css"

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNumClick = (num) => {
    if (operator === '') {
      setNum1(num1 + num);
    } else {
      setNum2(num2 + num);
    }
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
  };

  const handleEqualsClick = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res;

    switch (operator) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n1 / n2;
        break;
      default:
        res = '';
    }

    setResult(res.toString());
    setNum1('');
    setNum2('');
    setOperator('');
  };

  const handleClearClick = () => {
    setNum1('');
    setNum2('');
    setOperator('');
    setResult('');
  };

  return (
    <div className='cal-card'>
      <input type="text" value={num1 + operator + num2} readOnly />
      <br />
      <input type="text" value={result} readOnly />
      <br />
      <button onClick={() => handleNumClick('1')}>1</button>
      <button onClick={() => handleNumClick('2')}>2</button>
      <button onClick={() => handleNumClick('3')}>3</button>
      <button onClick={() => handleOperatorClick('+')}>+</button>
      <br />
      <button onClick={() => handleNumClick('4')}>4</button>
      <button onClick={() => handleNumClick('5')}>5</button>
      <button onClick={() => handleNumClick('6')}>6</button>
      <button onClick={() => handleOperatorClick('-')}>-</button>
      <br />
      <button onClick={() => handleNumClick('7')}>7</button>
      <button onClick={() => handleNumClick('8')}>8</button>
      <button onClick={() => handleNumClick('9')}>9</button>
      <button onClick={() => handleOperatorClick('*')}>*</button>
      <br />
      <button onClick={() => handleClearClick()}>Clear</button>
      <button onClick={() => handleNumClick('0')}>0</button>
      <button onClick={() => handleEqualsClick()}>=</button>
      <button onClick={() => handleOperatorClick('/')}>/</button>
    </div>
  );
}

export default Calculator;
