function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9]{8,}$/

if(values.email === "") {
        error.email = "Name should not be empty"
} else if (!email_pattern.test(values.email)){
        error.email = "Email does not exist"
}else {
        error.email = ""
}

if (values.passowrd === "") {
    error.password = "Password should not be empty"
} else if (!password_pattern.test(values.passowrd)) {
    error.password = "Password does not match the email provided"
} else {
    error.password = ""
}
return error;
}

export default Validation; 