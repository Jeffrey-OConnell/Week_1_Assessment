let password = "Coding12345"

if(password === "password" || password === "letmein"){
    console.log("Weak password. Try again.")
} else if(password.length < 10){
    console.log("Password not long enough")
} else if(/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password))   {  
    console.log("Password Validated")
} else {
    console.log("Password must contain at least 1 uppercase, 1 lowercase, and a number")
}