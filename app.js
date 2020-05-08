function computeLoan() {
  let amount = document.getElementById('amount').value;
  let interest_rate = document.getElementById('interest_rate').value;
  let months = document.getElementById('months').value;
  let interest = (amount * (interest_rate * .01)) / months;
  let payment = ((amount/months) + interest).toFixed(2);
  //place commas on 3-digit numbers i.e. 3,000
  //"/B" used to look inside word boundary
  //"?" finds the group (in this case groups of 3 digits('\d{3}'))
  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //place payment var inside HTML
  document.getElementById('payment').innerHTML = "Monthly Payment = $"+payment;
}
