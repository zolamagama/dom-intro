// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
const radioBillBtnElem = document.querySelector(".radioBillAddBtn")
const callTotalCostElem = document.querySelector(".callTotalTwo")
const smsTotalCostElem = document.querySelector(".smsTotalTwo")
const totalElem = document.querySelector(".totalTwo")

var callTotal = 0;
var smsTotal = 0;
function tCostOfBill(x) {
    //for (var i = 0;i<bString.length;i++) 
    //var billItems = bString[i].trim();
    if (x === 'sms') {

        smsTotal += 0.75;

    } else if (x === 'call') {
        callTotal += 2.75;
    }

    var totalCost = (smsTotal + callTotal).toFixed(2)
    return totalCost
}
function style(current) {
    const bill = Number(current);

    totalElem.classList.remove("warning");

    totalElem.classList.remove("danger")
    if (bill >= 50) {
        totalElem.classList.add("danger");
    }
    else if (bill >= 30 && bill <= 50) {
        totalElem.classList.add("warning");
    }
}
function clicked() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var y = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'


        var total = tCostOfBill(y);
        smsTotalCostElem.innerHTML = smsTotal.toFixed(2);
        callTotalCostElem.innerHTML = callTotal.toFixed(2);
        style(total)
        totalElem.innerHTML = total;

    }
}

radioBillBtnElem.addEventListener('click', clicked)