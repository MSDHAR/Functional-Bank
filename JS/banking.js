

function getInputValue() {
    const depositInput = document.getElementById("deposit-input")
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // clear input field 
    depositInput.value = '';

    return depositAmount;
}

document.getElementById("deposit-button").addEventListener('click', function () {
    // const depositInput = document.getElementById("deposit-input")
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);

    const depositAmount = getInputValue();
    // get current deposit 
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;

    // update Balance 
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;


});

//  handle withdraw button
document.getElementById("withdraw-button").addEventListener('click', function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // update withdrawTotal 
    const withdrawTotal = document.getElementById("withdraw-total")
    const previouswithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previouswithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update balance after withdraw 

    const balanceTotal = document.getElementById("balance-total"); addEventListener('click', function () {
        const BalanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(BalanceTotalText);
        balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    })

    // clear withdraw input field
    withdrawInput.value = '';


})