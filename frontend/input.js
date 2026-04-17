<!DOCTYPE html>
<html>
<head>
    <title>Login Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
        }
        .login-box {
            width: 300px;
            margin: 100px auto;
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 0 10px #aaa;
        }
        h2 {
            text-align: center;
        }
        input {
            width: 100%;
            padding: 8px;
            margin: 10px 0;
        }
        button {
            width: 100%;
            padding: 8px;
            background-color: #3498db;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #2980b9;
        }
        .error {
            color: red;
            font-size: 14px;
        }
    </style>

    <script>
        function validateLogin() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var errorMsg = document.getElementById("error");

            // Clear old message
            errorMsg.innerHTML = "";

            if (username === "") {
                errorMsg.innerHTML = "Username is required";
                return false;
            }

            if (password === "") {
                errorMsg.innerHTML = "Password is required";
                return false;
            }

            if (password.length < 6) {
                errorMsg.innerHTML = "Password must be at least 6 characters";
                return false;
            }

            alert("Login successful!");
            return true;
        }
    </script>
</head>

<body>

    <div class="login-box">
        <h2>Login</h2>

        <form onsubmit="return validateLogin()">
            <input type="text" id="username" placeholder="Username">
            <input type="password" id="password" placeholder="Password">

            <div id="error" class="error"></div>

            <button type="submit">Login</button>
        </form>
    </div>

</body>
</html>