let dace_value1 = Math.ceil(Math.random() * 6);
let dace_value2 = Math.ceil(Math.random() * 6);

let imageDace1 = "images/dice" + dace_value1 + ".png";
let imageDace2 = "images/dice" + dace_value2 + ".png";

document.querySelector(".img1").setAttribute("src", imageDace1);
document.querySelector(".img2").setAttribute("src", imageDace2);

if (dace_value1 === dace_value2) {
  document.querySelector("h1").innerHTML = "It's a Draw";
} else if (dace_value1 > dace_value2) {
  document.querySelector("h1").innerHTML = "🥇 Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = " Player 2 Wins! 🏆 ";
}
