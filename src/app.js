function generateRandomCard () {

  const value = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

  const suit = [
    { symbol: "♥", color: "red" },
    { symbol: "♦", color: "red" },
    { symbol: "♠", color: "black" },
    { symbol: "♣", color: "black" }
  ];

  let randomValue = value[Math.floor(Math.random() * value.length)];
  let randomSuit = suit[Math.floor(Math.random() * suit.length)];

  setInterval(myCallback, 5000);

  function myCallback(a, b) {
  generateRandomCard ()
}

  document.getElementById("suit").innerHTML = randomSuit.symbol;
  document.getElementById("suitInverted").innerHTML = randomSuit.symbol;
  document.getElementById("value").innerHTML = randomValue;

  document.getElementById("suit").style.color = randomSuit.color;
  document.getElementById("suitInverted").style.color = randomSuit.color;
}

window.onload = function () {
  generateRandomCard();
};


