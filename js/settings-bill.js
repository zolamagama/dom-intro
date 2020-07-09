// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
const btnAdd = document.querySelector(".add");
const btnUpd = document.querySelector(".updateSettings")
const colorElem = document.querySelector(".bread");
const smsCost = document.querySelector(".smsCostSetting");
const callCost = document.querySelector(".callCostSetting");
const criticalLevel = document.querySelector(".criticalLevelSetting");
const warningLevel = document.querySelector(".warningLevelSetting");
const totalCostElem = document.querySelector(".totalSettings");
const callCostElem = document.querySelector(".callTotalSettings");
const smsCostElem = document.querySelector(".smsTotalSettings");
const calculateBillWithSettings = BillWithSettings();

function update() {

    var callCostVal = Number(callCost.value);
    var smsCostVal = Number(smsCost.value);
    var warnLevel = Number(warningLevel.value);
    var critLevel = Number(criticalLevel.value);
    calculateBillWithSettings.setCallCost(callCostVal);
    calculateBillWithSettings.setSmsCost(smsCostVal);
    calculateBillWithSettings.setWarningLevel(warnLevel);
    calculateBillWithSettings.setCriticalLevel(critLevel);

};

function clicked() {

    var radioSmsCall = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    
        var item = radioSmsCall.value;

    calculateBillWithSettings.calculateTot(item);

    var callC = calculateBillWithSettings.getTotalCallCost();
    var smsC = calculateBillWithSettings.getTotalSmsCost();
    var totC = calculateBillWithSettings.getTotalCost();
    var colourTotal = calculateBillWithSettings.totalClassName();

    callCostElem.innerHTML = callC.toFixed(2);
    smsCostElem.innerHTML = smsC.toFixed(2);
    totalCostElem.innerHTML = totC.toFixed(2);
    totalCostElem.classList = colourTotal;
  
};

btnAdd.addEventListener("click", clicked);
btnUpd.addEventListener("click", update)
