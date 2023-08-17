document.getElementById('btn-submit').addEventListener('click',function(){
    //get the email inside the in[ut field
    const emailField=document.getElementById('email-field');
    const email=emailField.value

    //get the password inside the input field
    const passField=document.getElementById('pass-field');
    const pass=passField.value;
    console.log(pass)

})