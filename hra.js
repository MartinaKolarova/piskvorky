import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';
let currentPlayer = 'circle';

const makeCircleOrCross = (evt) => {
  evt.target.disabled = true;
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
    evt.target.classList.add('board__field--cross');
    document.querySelector('.player__turn').src = 'circle.svg';
  } else {
    currentPlayer = 'circle';
    evt.target.classList.add('board__field--circle');
    document.querySelector('.player__turn').src = 'cross.svg';
  }
};
const buttons = document.querySelectorAll('.game__board--field');
buttons.forEach((button) => {
  button.addEventListener('click', makeCircleOrCross);
});

const gameBoard = Array.from(buttons).map((item) => {
  if (item.classList.contains('board__field--circle')) {
    return 'o';
  } else if (item.classList.contains('board__field--cross')) {
    return 'x';
  } else {
    return '_';
  }
});

const returnWinner = () => {
  const winner = findWinner(gameBoard);
  if (winner === 'o' || winner === 'x') {
    alert(`Vyhrál hráč se symbolem "${winner()}"!`);
    location.reload();
  } else if (winner === 'tie') {
    alert('Hra skončila nerozhodně.');
  }
  setTimeout(returnWinner, 500);
};

/*bonus confirm restart*/

document.querySelector('.restart__btn').addEventListener('click', (event) => {
  const confirmRestart = confirm('Opravdu chcete ukončit hru?');
  if (confirmRestart === false) {
    event.preventDefault();
  }
});
