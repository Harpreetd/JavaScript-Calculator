let inputText = document.getElementById("input-text");

function calculate(number) {
  inputText.value = inputText.value + number;
}
function Result() {
  try {
    inputText.value = eval(inputText.value);
  } catch (err) {
    alert("Enter the valid Input");
  }
}
function clr() {
  inputText.value = " ";
}
function del() {
  inputText.value = inputText.value.slice(0, -1);
}
