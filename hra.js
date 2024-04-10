let currentPlayer = 'circle';
const makeCircleOrCross = (evt) => {
  if (currentPlayer === 'circle') {
    (currentPlayer = 'cross'), evt.target.classList.add('board__field--cross');
  } else {
    evt.target.classList.add('board__field--circle'),
      (currentPlayer = 'circle');
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
