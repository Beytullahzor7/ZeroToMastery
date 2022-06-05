var database = [
    {
        username: "Beytullah",
        password: "12345"
    }
];

var inputUsername = prompt("Please input your username")
var inputPassword = prompt("Please input your password")

function singIn(username, password) {
    if (username == database[0].username && password == database[0].password) {
        document.write("Login Successful")
    } else {
        alert("Sorry, Wrong username or password\nPlease try again!!!")
    }
}

singIn(inputUsername, inputPassword)