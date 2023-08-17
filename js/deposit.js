document.getElementById('btn-deposit').addEventListener('click',function(){
    //for deposit amount
    const depositField=document.getElementById('deposit-field');
    const newDepoAmount=depositField.value;

    //for deposit value total
    const totalDeposit=document.getElementById('deposit-total');
    const previousDeposit=totalDeposit.innerText;

    //sum of previous and currrent amount
    const currentAmount=parseFloat(previousDeposit)+parseFloat(newDepoAmount)

    totalDeposit.innerText=currentAmount;

    //get balance total
    const balanceTotalElment=document.getElementById('balance-total');
    const previousBalanceTotal=balanceTotalElment.innerText;

    const totalBalance=parseFloat(previousBalanceTotal)+parseFloat(newDepoAmount)
    balanceTotalElment.innerText=totalBalance

    //clear the deposit field
    depositField.value='';
})