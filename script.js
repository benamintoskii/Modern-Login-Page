document.addEventListener('DOMContentLoaded', () => {


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const forms = document.querySelectorAll("form");

// Toggle
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Validation
forms.forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');
        const errorMessage = form.querySelector('.error-message');

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

        // Reset
        errorMessage.classList.remove("active");
        passwordInput.style.border = "none";

        // Email check
        if (!emailPattern.test(email)) {
            errorMessage.textContent = "Please enter a valid email.";
            errorMessage.classList.add("active");
            return;
        }

        // Password check
        if (!passwordPattern.test(password)) {
            errorMessage.textContent = "Password must include uppercase, lowercase, number, symbol and be 6+ chars.";
            errorMessage.classList.add("active");
            passwordInput.style.border = "2px solid red";
            return;
        }

        // Success
        errorMessage.classList.remove("active");
        passwordInput.style.border = "2px solid green";

    });
});


});
