import { runGame } from '../index.js';
import getRandomInt from '../utils.js';

function getRandomSymbol() {
  const mathSymbols = ['+', '-', '*'];
  const random = getRandomInt(0, mathSymbols.length - 1);
  return mathSymbols[random];
}

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown operator');
  }
};

const composeGameLogic = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(1, 100);
  const operator = getRandomSymbol();
  const correctAnswer = calculate(num1, num2, operator).toString();
  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer,
  };
};

const description = 'What is the result of the expression?';

export default () => runGame(composeGameLogic, description);
