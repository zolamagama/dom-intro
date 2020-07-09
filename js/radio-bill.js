// get a reference to the sms or call radio buttons
//get a reference to the add button
//create a variable that will keep track of the total bill
//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
const radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");

const smsTotalTwoElement = document.querySelector(".smsTotalTwo");

const callTotalTwoElement  = document.querySelector(".callTotalTwo");

const totalTwoElement  = document.querySelector(".totalTwo");

const calculateRadioBill = RadioBill();

//const billItemTypeRadioElement  = document.querySelector(".billItemTypeRadio");

//const billTypeText = document.querySelector(".billTypeText");

// var smsTotal2= 0;
// var callTotal2 = 0;

function radioBillTotal(){
  
var checkedRadio = document.querySelector("input[name='billItemType']:checked");
var x = checkedRadio.value;
//console.log(billString)
calculateRadioBill.radioButtons(x);

  // update your DOM here - callTotal, SmsTotal and GrandTotal


callTotalTwoElement.innerHTML= calculateRadioBill.getCall().toFixed(2);
smsTotalTwoElement.innerHTML= calculateRadioBill.getSms().toFixed(2);
totalTwoElement.innerHTML= calculateRadioBill.getTotal().toFixed(2);
totalTwoElement.classList = calculateRadioBill.totalClassName()
}

  
radioBillAddBtnElement.addEventListener("click", radioBillTotal)