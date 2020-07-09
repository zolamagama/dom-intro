//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button

const calculateBtn = document.querySelector(".calculateBtn");
const billTotalElement = document.querySelector(".billTotal");
const billStringField = document.querySelector(".billString")
//get a reference to the billTotal element
const billTotalSpanElement = document.querySelector(".total")

const calculateBill = CalculateBill()

function calculateBtnClicked() {
    // get the string entered in the textArea
    var billString = billStringField.value;
    calculateBill.billType(billString)
    billTotalElement.innerHTML = calculateBill.returnTotal();
    billTotalElement.classList = calculateBill.color();
}

calculateBtn.addEventListener("click", calculateBtnClicked);

