let password = "Coding123456"

if(password.length < 10){
    console.log("Password not long enough")
} else if(/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password))   {  
    console.log("Password Validated")
} else {
    console.log("Password must contain at least 1 uppercase, 1 lowercase, and a number")
}