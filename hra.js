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
  const gameBoard = Array.from(buttons).map((item) => {
    if (item.classList.contains('board__field--circle')) {
      return 'o';
    } else if (item.classList.contains('board__field--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });
  returnWinner(gameBoard);
};

const buttons = document.querySelectorAll('.game__board--field');
buttons.forEach((button) => {
  button.addEventListener('click', makeCircleOrCross);
});

const returnWinner = (gameBoard) => {
  console.log(gameBoard);
  const winner = findWinner(gameBoard);
  console.log(winner);
  if (winner === 'o' || winner === 'x') {
    alert(`Vyhrál hráč se symbolem "${winner}"!`);
    location.reload();
  } else if (winner === 'tie') {
    alert('Hra skončila nerozhodně.');
  }
};

/*bonus confirm restart*/

document.querySelector('.restart__btn').addEventListener('click', (event) => {
  const confirmRestart = confirm('Opravdu chcete ukončit hru?');
  if (confirmRestart === false) {
    event.preventDefault();
  }
});
