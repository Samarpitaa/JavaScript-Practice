function displayText() {
  const inputText = document.getElementById("inputText").value;
  const outputElement = document.getElementById("output");
  outputElement.textContent ="Hello "+inputText+"!";
}