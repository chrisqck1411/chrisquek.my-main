/* Random not-found messages for 404.html */
(function () {
  var lines = [
    ['These aren\u2019t the pages you\u2019re looking for', 'Move along. Nothing to see at this address.'],
    ['I sense a disturbance in the links', 'As if a single address cried out, and was suddenly missing.'],
    ['This URL is a trap', 'Retreat to the home page while your ship is still in one piece.'],
    ['Fascinating. This page does not exist', 'The probability of finding it here is approximately zero.'],
    ['Resistance is futile', 'You will be assimilated back to the home page.'],
    ['Scotty can\u2019t beam you there', 'The page you want is not on this ship.'],
    ['Page not found. Live long and prosper anyway', 'Try the home page. Logic suggests it exists.'],
    ['One does not simply type a random address', 'Not without a map, a wizard, and a decent amount of luck.'],
    ['You shall not pass', 'Mostly because there is nothing on the other side.'],
    ['Not even Gandalf could find this page', 'It isn\u2019t late and it isn\u2019t early. It just isn\u2019t here.'],
    ['The page went to Isengard for second breakfast', 'It left no forwarding address.'],
    ['We lost it, precious', 'Nasty hobbitses took the page. Try the home page instead.']
  ];
  var titleEl = document.getElementById('nf-title');
  var textEl = document.getElementById('nf-text');
  var btn = document.getElementById('another');
  var last = 0;

  function show(i) {
    last = i;
    titleEl.textContent = lines[i][0];
    textEl.textContent = lines[i][1];
    document.title = 'Page not found | Chris Quek';
  }

  function pick() {
    var i = Math.floor(Math.random() * lines.length);
    if (i === last) i = (i + 1) % lines.length;
    show(i);
  }

  pick();
  btn.addEventListener('click', pick);
})();
