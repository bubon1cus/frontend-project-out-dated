import { runGame } from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const gameLogic = () => {
  const randomNum = getRandomInt(0, 100);
  const correctAnswer = isEven(randomNum);
  return {
    question: randomNum.toString(),
    correctAnswer,
  };
};

export default () => runGame(gameLogic, description);
