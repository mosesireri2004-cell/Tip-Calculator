const button = document.querySelector("#calculate");
const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const total = document.querySelector("#total");

function calculate() {
  const billValue = Number(billInput.value);
  const tipValue = Number(tipInput.value);

  if (
    billInput.value.trim() === "" ||
    tipInput.value.trim() === "" ||
    !Number.isFinite(billValue) ||
    !Number.isFinite(tipValue) ||
    billValue < 0 ||
    tipValue < 0
  ) {
    total.textContent = "";
    tipValue < 0;
  }

  const totalValue = billValue * (1 + tipValue / 100);
  total.textContent = totalValue.toFixed(2);
}

button.addEventListener("click", calculate);
