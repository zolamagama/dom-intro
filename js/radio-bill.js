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

//const billItemTypeRadioElement  = document.querySelector(".billItemTypeRadio");

//const billTypeText = document.querySelector(".billTypeText");

var smsTotal2= 0;
var callTotal2 = 0;

function radioBillTotal(){
  
var checkedRadio = document.querySelector("input[name='billItemType']:checked");
var x = checkedRadio.value;
//console.log(billString)

if (x === 'call'){
callTotal2 += 2.75;
} else if (x === 'sms'){
smsTotal2 += 0.75;
}
  // update your DOM here - callTotal, SmsTotal and GrandTotal


callTotalTwoElement.innerHTML= callTotal2.toFixed(2);
smsTotalTwoElement.innerHTML= smsTotal2.toFixed(2);
var totalCost = callTotal2 + smsTotal2;
totalTwoElement.innerHTML= totalCost.toFixed(2);





 if (totalCost>= 50){
         totalTwoElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalTwoElement.classList.add("warning");
   }


// call the correct function here, the one with your logic
}
  
radioBillAddBtnElement.addEventListener("click", radioBillTotal);