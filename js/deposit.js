// step-1: get deposit button and add event listener
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: get new deposit amount
    const newDeposit = document.getElementById('deposit-field');
    const newDepositAmountString = newDeposit.value;

    // last step: make the input field empty
    newDeposit.value = '';
    const newDepositAmount = parseFloat(newDepositAmountString);

    if (isNaN(newDepositAmount)) {
        alert('Please input a valid number!');
        return;
    }

    // step-3: get previous deposit amount
    const previousDeposit = document.getElementById('previous-deposit');
    const previousDepositAmountString = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    // step-4: get the sum of deposits
    const currentDepositAmount = newDepositAmount + previousDepositAmount;
    previousDeposit.innerText = currentDepositAmount;

    // step-5: get the total sum and calculate
    const totalDeposit = document.getElementById('total-deposit');
    const totalDepositString = totalDeposit.innerText;
    const newTotalDeposit = parseFloat(totalDepositString);
    const currentTotalDeposit = newTotalDeposit + newDepositAmount;
    totalDeposit.innerText = currentTotalDeposit;
})