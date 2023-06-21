const numberRegex = /^[0-9]+$/;

const inputField = document.getElementById("input_field");
const result = document.getElementById("result");

inputField.addEventListener("keypress", function (event) {
  if (!numberRegex.test(event.key)) {
    /*alert("masukkan angka!");*/
    result.style.display = "none";
    event.preventDefault();
  } else {
    result.textContent = event.key;
    result.style.display = "inline";
  }
});
