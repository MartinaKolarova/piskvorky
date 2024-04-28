import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';
let currentPlayer = 'circle';

const makeCircleOrCross = (evt) => {
  evt.target.disabled = true;
  if (currentPlayer === 'circle') {
    evt.target.classList.add('board__field--circle');
    currentPlayer = 'cross';
    document.querySelector('.player__turn').src = 'circle.svg';
  } else {
    evt.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
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

/*winner with setTimeout*/

const returnWinner = async (gameBoard) => {
  const winner = findWinner(gameBoard);
  if (winner === 'o' || winner === 'x') {
    setTimeout(() => {
      alert(`Vítězem je hráč se symbolem ${winner}.`);
    }, 500);
  }

  if (winner === 'tie') {
    setTimeout(() => {
      alert(`Hra skončila remízou.`);
    }, 500);
  }

  /* work with Api*/

  if (currentPlayer === 'cross') {
    const response = await fetch(
      'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          board: gameBoard,
          player: 'x',
        }),
      },
    );

    const data = await response.json();
    const { x, y } = data.position;
    const field = buttons[x + y * 10];
    field.click();
  }
};
const buttons = document.querySelectorAll('.game__board--field');
buttons.forEach((button) => {
  button.addEventListener('click', makeCircleOrCross);
});

/*bonus confirm restart*/

document.querySelector('.restart__btn').addEventListener('click', (event) => {
  const confirmRestart = confirm('Opravdu chcete ukončit hru?');
  if (confirmRestart === false) {
    event.preventDefault();
  }
});
