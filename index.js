let randomNumber1 = Math.random()*6 + 1;
n1 =Math.floor(randomNumber1);
let randomDiceImage1 = "dice" + n1 + ".png";
let randomImageS1 = "images/" + randomDiceImage1;
document.querySelectorAll("img")[0].setAttribute("src", randomImageS1);

let randomNumber2 = Math.random()*6 + 1;
n2 =Math.floor(randomNumber2);
let randomDiceImage2 = "dice" + n2 + ".png";
let randomImageS2 = "images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageS2);

if(n1 > n2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins.";
     
}
else if(n1 < n2) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins.";
     
}
if (n1 == n2) {
    document.querySelector("h1").innerHTML = "Draw Occured.";
     
}