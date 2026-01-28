function validate(e){
    e.preventDefault();

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message').value;

    let message='';
    if (email===''){
        message='please enter an email';
        msgBox.style.color='red';
    }else if (pass===''){
        message='please enter a password';
        msgBox.style.color='red';
    }else if (age===''){
        message='please enter your age';
        msgBox.style.color='red';
    }else{
        message='login successful';
        msgBox.style.color='green';
    }
    msgBox.innerHTML=message;
}

document.getElementById("loginform").onsubmit=validate;

document.getElementById("email").oninput=()=>validate({preventDefault:()=>{}});
document.getElementById("password").oninput=()=>validate({preventDefault:()=>{}});
document.getElementById("age").oninput=()=>validate({preventDefault:()=>{} });