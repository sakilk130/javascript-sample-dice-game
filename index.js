var result = Math.random();
var r = result * 6;
var s = Math.floor(r);
s = s + 1;
parseInt(s);
console.log(s);

var random = Math.random();
var rr = random * 6;
var ss = Math.floor(rr);
ss = ss + 1;
parseInt(ss);
console.log(ss);

if (s == 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
if (s == 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
if (s == 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
if (s == 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
if (s == 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
if (s == 6) {
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}
//img2
if (ss == 1) {
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
if (ss == 2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
if (ss == 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
if (ss == 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
if (ss == 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
if (ss == 6) {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}
//
if (s > ss) {
  document.querySelector("h1").innerHTML = "Player 1 win";
} else {
  document.querySelector("h1").innerHTML = "Player 2 win";
}
if (s == ss) {
  document.querySelector("h1").innerHTML = "Draw";
}
