document.getElementById('btn-submit').addEventListener('click',function(){
    const email = 'sabuz@gmail.com'
    const pass  = 'khan12345'

    const getEmail = document.getElementById('email')
    const getEmailValue = getEmail.value

    const getPass = document.getElementById('pass')
    const getPassValue = getPass.value

    if(getEmailValue === email && getPassValue == pass){
        location.href = 'bank-acc.html'
    }else{
        alert('Invalid email or password!!')
    }
    
})

