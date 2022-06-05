var database = [
    {
        username: "Beytullah",
        password: "123"
    },
    {
        username: "Mehmet",
        password: "1234"
    },
    {
        username: "Ali",
        password: "12345"
    }
]

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        document.write("Login Successfully")
    } else {
        alert("Wrong username or password!!!")
    }
}

var inputUsername = prompt("Please input your username")
var inputPassword = prompt("Please input your password")

signIn(inputUsername, inputPassword)
