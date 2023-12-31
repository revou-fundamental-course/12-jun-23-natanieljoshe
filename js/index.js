//Function for the celcius to fahrenheit
const numberRegex = /^[0-9]+$/;

const inputField = document.getElementById("input_field");
const result = document.getElementById("result");
/*let inputAreaCel = document.querySelector(".inputAreaCel");
let inputAreaFar = document.querySelector(".inputAreaFar");*/

//rounding
let btn = document.querySelector("#btnReset");
function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

//data input check
inputField.addEventListener("keypress", function (event) {
  if (!numberRegex.test(event.key)) {
    alert("masukkan angka!");
    result.style.display = "none";
    event.preventDefault();
  }
});

/*inputAreaCel.addEventListener("input", function () {
  let cTemp = parseFloat(inputAreaCel.value);
  let fTemp = cTemp * (9 / 5) + 32;

  inputAreaFar.value = roundNumber(fTemp);
});*/

//formula
const inputAreaCel = () => {
  var celcius = parseFloat(document.querySelector(".inputAreaCel").value);

  var fahrenheitRes = 1.8 * celcius + 32;
  var a = fahrenheitRes.toFixed(2);

  document.querySelector(".inputAreaCel").value = celcius;
  document.querySelector(".inputAreaFar").value = a;
};

//reset button
function resetButton() {
  celcius = "";
  a = "";
  document.querySelector(".inputAreaCel").value = "";
  document.querySelector(".inputAreaFar").value = "";
}
