const btn1 = document.getElementById("Farenheit");
const btn2 = document.getElementById("Kelvin");
const btn3 = document.getElementById("Reamur");
const form = document.getElementById("form");
const resultText = document.getElementById("result");

let selectedConversion = null;

btn1.addEventListener("click", () => (selectedConversion = "fahrenheit"));
btn2.addEventListener("click", () => (selectedConversion = "kelvin"));
btn3.addEventListener("click", () => (selectedConversion = "reamur"));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const celsius = parseFloat(document.getElementById("celsius").value);

  if (isNaN(celsius)) {
    resultText.textContent = "Masukan Angka Number.";
    return;
  }

  let result;
  switch (selectedConversion) {
    case "fahrenheit":
      result = toFahrenheit(celsius);
      break;
    case "kelvin":
      result = toKelvin(celsius);
      break;
    case "reamur":
      result = toReamur(celsius);
      break;
    default:
      resultText.textContent = "Harap Masukan Angka";
      return;
  }

  resultText.textContent = `Hasil Konversi Celcius dari ${celsius} ke ${selectedConversion} Adalah ${result} `;
});

function toFahrenheit(c) {
  return c * 1.8 + 32;
}

function toKelvin(c) {
  return c + 273.15;
}

function toReamur(c) {
  return (c * 4) / 5;
}
