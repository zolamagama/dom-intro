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
const totalElem3 = document.querySelector(".totalTwo")
var callTotal2 = 0;
var smsTotal2 = 0;
var totalCost = 0;
function clicked() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var x = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
        smsTotalCostElem.innerHTML = smsTotal2.toFixed(2);
        callTotalCostElem.innerHTML = callTotal2.toFixed(2);
        styleCost()
        totalElem3.innerHTML = tcostBill(x);

    }
}
function tcostBill(y) {
    if (y === 'sms') {
        smsTotal2 += 0.75;
    }
    else if (y === 'call') {
        callTotal2 += 2.75;
    }
    var totalCost = (smsTotal2 + callTotal2).toFixed(2)
    return totalCost
}
function styleCost() {
    const bill = Number(totalCost);
    totalElem3.classList.remove("warning");
    totalElem3.classList.remove("danger")
    if (bill >= 50) {
        totalElem3.classList.add("danger");
    }
    else if (bill >= 30 && bill < 50) {
        totalElem3.classList.add("warning");
    }
}
radioBillBtnElem.addEventListener('click', clicked)