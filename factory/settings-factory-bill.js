function BillWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;


    var smsTotalCost = 0;

    var callTotalCost = 0;

    function setCallCost(callCost) {
        theCallCost = callCost;

    }

    function getCallCost() {

        return theCallCost;
    }

    function setSmsCost(smsCost) {
        theSmsCost = smsCost;

    }

    function getSmsCost() {
        return theSmsCost;
    }

    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }

    function getWarningLevel() {
        return theWarningLevel;
    }

    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }

    function getCriticalLevel() {
        return theCriticalLevel;
    }

    function calculateTot(name) {
        if (!hasReachedTheCriticalLevel()) {
            if (name === "call") {
                callTotalCost += theCallCost;
            }
            if (name === "sms") {
                smsTotalCost += theSmsCost;
            }
        }
    }

    function getTotalCost() {

        return callTotalCost + smsTotalCost;
    }

    function getTotalCallCost() {
        return callTotalCost;
    }

    function getTotalSmsCost() {
        return smsTotalCost;
    }

    // // function sendSms() {
    // //     if (!hasReachedTheCriticalLevel()) {
    // //         smsTotalCost += theSmsCost;
    // //     }


    // }

    function hasReachedTheCriticalLevel() {
        return getTotalCost() >= getCriticalLevel();

    }


    function totalClassName() {
        if (hasReachedTheCriticalLevel()) {
            return "danger";
        }

        if (getTotalCost() >= getWarningLevel()) {
            return "warning";
        }

    }
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        calculateTot,
        getTotalCallCost,
        getTotalSmsCost,
        getTotalCost,
        totalClassName,
        hasReachedTheCriticalLevel

    };
}