var titles = [
  "@",
  "@G",
  "@GB",
  "@GB0",
  "@GB0-",
  "@GB0-7",
];

function changeTitle() {
  var index = 0;

  setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
  }, 1000);
}

changeTitle();
