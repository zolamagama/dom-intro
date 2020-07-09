// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
const addToBillBtn = document.querySelector(".addToBillBtn");

const smsTotalCost = document.querySelector(".smsTotalOne");

const callTotalCost = document.querySelector(".callTotalOne");

const totalElem2 = document.querySelector(".totalOne");

const billTypeText = document.querySelector(".billTypeText");

const color = document.querySelector(".red");

const calculateTextBill = TextBill()

function clickFunction() {
    var string = billTypeText.value;
    calculateTextBill.billEntered(string);

    smsTotalCost.innerHTML = calculateTextBill.smsCostTotal();
    callTotalCost.innerHTML = calculateTextBill.callCostTotal();
    
    totalElem2.classList = calculateTextBill.levelColor();

    totalElem2.innerHTML = calculateTextBill.costTotal();
}
addToBillBtn.addEventListener("click", clickFunction);

