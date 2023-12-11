const container = document.getElementById("container");
const boxesField = document.getElementById("boxes");

const coverPanel = document.createElement("div");
coverPanel.className = "cover-panel hide";
container.appendChild(coverPanel);

const scoreField = document.getElementById("score-field");
scoreField.textContent = "---";

let aa = 1;
let bb = 2;
let cc = 3;
let ff = 6;
let gg = 7;
let hh = 8;
let ii = 9;

let variable1;
let variable2;
let variable3;

let numbersArray = [1, 1, 1, 2, 2, 2, 3, 3, 3];

shuffleArray(numbersArray);

function generateBoxes(number) {
  for (let i = 0; i < number; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = numbersArray[i];
    box.addEventListener("click", (event) => {
      assignValue(numbersArray[i], event);
    });
    boxesField.appendChild(box);
  }
}

function generateRandom(number) {
  return Math.floor(Math.random() * number) + 1;
}

generateBoxes(9);

function resultABC(a, b, c) {
  let res;

  if (a == b && b == c && c == aa) res = gg;
  else if (a == b && b == c && c == bb) res = hh;
  else if (a == b && b == c && c == cc) res = ii;
  else if (a == aa && b == bb && c == cc) res = ff;
  else if (a == cc && b == bb && c == aa) res = ff;
  else res = a - b + c;

  scoreField.textContent = `- ${res} -`;

  variable1 = null;
  variable2 = null;
  variable3 = null;

  for (let i = 0; i < numbersArray.length; i++) {
    boxesField.removeChild(boxesField.children[0]);
  }

  shuffleArray(numbersArray);
  generateBoxes(9);
  coverPanel.classList.add("hide");
}

function assignValue(value, event) {
  const box = event.target;

  if (box.classList.contains("clicked")) {
    return;
  }

  box.style.color = "rgb(59, 209, 14)";
  box.classList.add("clicked");

  if (!variable1) {
    variable1 = value;
    scoreField.textContent = `${variable1}--`;
  } else if (!variable2) {
    variable2 = value;
    scoreField.textContent = `${variable1}${variable2}-`;
  } else if (!variable3) {
    variable3 = value;
    scoreField.textContent = `${variable1}${variable2}${variable3}`;

    coverPanel.classList.remove("hide");
    setTimeout(() => {
      resultABC(variable1, variable2, variable3);
    }, 1000);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
