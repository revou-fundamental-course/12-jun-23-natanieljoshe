//Function for the fahrenheit to celcius
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
const inputAreaFar = () => {
  var fahrenheit = parseFloat(document.querySelector(".inputAreaFar").value);

  var celciusRes = (5 / 9) * (fahrenheit - 32);
  var a = celciusRes.toFixed(2);

  document.querySelector(".inputAreaFar").value = fahrenheit;
  document.querySelector(".inputAreaCel").value = a;
};

//reset button
function resetButton() {
  fahrenheit = "";
  a = "";
  document.querySelector(".inputAreaFar").value = "";
  document.querySelector(".inputAreaCel").value = "";
}
