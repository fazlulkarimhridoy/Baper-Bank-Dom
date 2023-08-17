// step-1: get withdraw button and add event listener
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2: get withdraw filed and make it integer
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;

    // last step: make the input field empty
    withdrawField.value = '';
    const newWithdrawAmount = parseFloat(withdrawFieldString);

    if (isNaN(newWithdrawAmount)) {
        alert('Please input a valid number!');
        return;
    }

    // step-3: get the previous withdraw amount
    const previousWithdraw = document.getElementById('previous-withdraw');
    const previousWithdrawString = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString);

    // step-5: calculate the current deposit
    const previousTotalAmount = document.getElementById('total-deposit');
    const previousTotalAmountString = previousTotalAmount.innerText;
    const previousTotalAmountNumber = parseFloat(previousTotalAmountString);

    if(newWithdrawAmount > previousTotalAmountNumber){
        alert('Tomar baper bank e Taka nai!');
        return;
    }

    // step-4: calculate the total withdraw
    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    previousWithdraw.innerText = currentWithdrawAmount;

    // step-6:latest total amount
    const currentTotalAmount = previousTotalAmountNumber - newWithdrawAmount;
    previousTotalAmount.innerText = currentTotalAmount;

})