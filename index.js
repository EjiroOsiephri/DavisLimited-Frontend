let toggleValue = true;
const distinctStyleButtons = document.querySelectorAll(".distinct-style");

const originalClassNames = Array.from(distinctStyleButtons).map(
  (button) => button.className
);

document.getElementById("togglebtn").addEventListener("click", function () {
  toggleValue = !toggleValue;
  console.log("Toggle value:", toggleValue);

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
