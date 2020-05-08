function computeLoan() {
  let amount = document.getElementById('amount').value;
  let interest_rate = document.getElementById('interest_rate').value;
  let months = document.getElementById('months').value;
  let interest = (amount * (interest_rate * .01)) / months;
}
