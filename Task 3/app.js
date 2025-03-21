document.getElementById("registration").addEventListener('submit', function (event) {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;
    let errorMessage = document.getElementById('error-message');
    let successMessage = document.getElementById('successMessage');

    let userInput = document.getElementById("userInput").value;
    let captcha = document.getElementById("captcha").innerText;

    if (password !== confirmPassword) {
        event.preventDefault();
        errorMessage.innerText = "❌ Passwords do not match!";
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
    } else if (userInput !== captcha) {
        event.preventDefault();
        errorMessage.innerText = "❌ CAPTCHA Incorrect!";
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
    } else {
        errorMessage.style.display = "none";
        successMessage.innerText = "✅ Registration Successful!";
        successMessage.style.display = "block";
        console.log('Registration complete');
    }
});

const generateCaptcha = () => {
    let chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*)(-ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let captchaLength = 6;
    let captcha = "";
    for (let i = 0; i < captchaLength; i++) {
        captcha += chars[Math.floor(Math.random() * chars.length)];
    }

    document.getElementById("captcha").innerText = captcha;
    document.getElementById("userInput").value = "";
    document.getElementById("result").innerHTML = "";
};

const validateCaptcha = () => {
    let userInput = document.getElementById("userInput").value;
    let captcha = document.getElementById("captcha").innerText;
    let result = document.getElementById("result");

    if (userInput === captcha) {
        result.innerText = "✅ CAPTCHA Matched!";
        result.style.color = "green";
    } else {
        result.innerText = "❌ CAPTCHA Incorrect!";
        result.style.color = "red";
    }
};

generateCaptcha();
