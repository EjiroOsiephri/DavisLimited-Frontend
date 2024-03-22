var output = document.getElementById("output-go");

let toggleValue = true;
const distinctStyleButtons = document.querySelectorAll(".distinct-style");

const originalClassNames = Array.from(distinctStyleButtons).map(
  (button) => button.className
);

function playButtonClickSound() {
  var sound = new Audio("audio/e.wav");
  sound.play();
}

function playEqualSound() {
  var sound = new Audio("audio/m.wav");
  sound.play();
}

document.getElementById("togglebtn").addEventListener("click", function () {
  toggleValue = !toggleValue;

  distinctStyleButtons.forEach((button, index) => {
    if (toggleValue === false) {
      button.className = "toggled-value";
    } else {
      button.className = originalClassNames[index];
    }
  });
});

function display(num) {
  output.value += num;
}
function Clear() {
  return (output.value = "");
}

function calculate() {
  try {
    return (output.value = eval(output.value));
  } catch (err) {
    alert("invalid");
  }
}
var DEL = () => {
  return (output.value = output.value.slice(0, -1));
};
