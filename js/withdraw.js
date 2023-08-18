document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawValue=withdrawField.value;

    //set privious withdraw amount
    const totalAmount=document.getElementById('withdraw-total');
    const previousTotalAmount=totalAmount.innerText;

    //set new withdraw 
    const newTotal=parseFloat(newWithdrawValue)+parseFloat(previousTotalAmount);
    totalAmount.innerText=newTotal;

    const totalBalanceAmount=docuent.getElementById('balance-total');
    const previousBalance=totalBalanceAmount.innerText

    const newAmmount=parseFloat(previousBalance)-parseFloat(newWithdrawValue);
    totalBalanceAmount.innerText=newAmmount;

    //clear the field
    withdrawField.value='';
})