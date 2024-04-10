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

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', makeCircleOrCross);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', makeCircleOrCross);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', makeCircleOrCross);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', makeCircleOrCross);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', makeCircleOrCross);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', makeCircleOrCross);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', makeCircleOrCross);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', makeCircleOrCross);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', makeCircleOrCross);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', makeCircleOrCross);

/*bonus confirm restart*/

document.querySelector('.restart__btn').addEventListener('click', (event) => {
  const confirmRestart = confirm('Opravdu chcete ukončit hru?');
  if (confirmRestart === false) {
    event.preventDefault();
  }
});
