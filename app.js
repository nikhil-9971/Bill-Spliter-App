let rupee = "\u20B9";
const billDivideForm = document.querySelector("#bill-divider-form");

billDivideForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputs = getInputs();
  showCalculateOutputs(inputs);
});

function getInputs() {
  let subtotal = document.querySelector("#subtotal").value;
  let discount = document.querySelector("#discount").value;
  let tipPercent = document.querySelector("#tip").value;
  let noOfPerson = document.querySelector("#no-of-person").value;

  return { subtotal, tipPercent, noOfPerson, discount };
}

// Calculate the bill divider info,

function showCalculateOutputs(input) {
  billDivideForm.reset();

  
  let totalDiscount =
    (parseFloat(input.subtotal) * parseFloat(input.discount)) / 100;

  let totaltip =
    // (((parseFloat(input.subtotal) * parseFloat(input.tipPercent))-totalDiscount) / 100 ) ;
    ((parseFloat(input.subtotal)-totalDiscount) * parseFloat(input.tipPercent)) /100;


  let totalAmount = parseFloat(input.subtotal) + totaltip - totalDiscount;

  let tipPerPerson = totaltip / parseFloat(input.noOfPerson);

  let billPerPerson =
    (totalAmount) / parseFloat(input.noOfPerson);

  document.getElementById(
    "total-bill"
  ).innerHTML = `${rupee} ${totalAmount.toFixed(2)}`;

  document.getElementById(
    "bill-per-person"
  ).innerHTML = `${rupee} ${billPerPerson.toFixed(2)}`;
  document.getElementById(
    "total-discount"
  ).innerHTML = `${rupee} ${totalDiscount.toFixed(2)}`;
  document.getElementById("total-tip").innerHTML = `${rupee} ${totaltip.toFixed(
    2
  )}`;
  document.getElementById(
    "tip-per-person"
  ).innerHTML = `${rupee} ${tipPerPerson.toFixed(2)}`;
}
