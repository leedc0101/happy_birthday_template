const CONGRATS_TEXT = 'Happy Birthday {name}!';

const wordflick = function () {
  let len = 1;
  let forwards = true;
  let stop = 5;

  setInterval(function () {
    if (CONGRATS_TEXT.length === len - 1 || len === 0) {
      if (stop > 0 && forwards) {
        stop--;
        return;
      } else {
        forwards = !forwards;
        stop = 5;
      }
    }

    document.getElementById('word').textContent = CONGRATS_TEXT.slice(0, len);
    forwards ? len++ : len--;
  }, 150);
};

wordflick();
