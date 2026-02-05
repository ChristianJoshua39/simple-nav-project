function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === "Adiyaetot" && password === "adodo") {
        message.textContent = "Login successful! Redirecting...";

        setTimeout(function () {
            window.location.href = "index.html";
        }, 1000);

    } else {
        message.textContent = "Invalid username or password.";
    }
}
