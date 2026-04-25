document.addEventListener('DOMContentLoaded', () => {


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const forms = document.querySelectorAll("form");

// =========================
// Toggle بين Sign In و Sign Up
// =========================
if (registerBtn) {
    registerBtn.addEventListener('click', () => {
        container.classList.add('active');
    });
}

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });
}

// =========================
// Validation
// =========================
forms.forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Email Pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Password Pattern:
        // 6+ chars, uppercase, lowercase, number, symbol
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

        // Reset styles
        emailInput.style.border = "none";
        passwordInput.style.border = "none";

        // Email Validation
        if (!emailPattern.test(email)) {
            emailInput.style.border = "2px solid red";
            alert("Please enter a valid email.");
            return;
        }

        // Password Validation
        if (!passwordPattern.test(password)) {
            passwordInput.style.border = "2px solid red";
            alert("Password must be at least 6 characters and include uppercase, lowercase, number, and symbol.");
            return;
        }

        // Success
        emailInput.style.border = "2px solid green";
        passwordInput.style.border = "2px solid green";

        alert("Success ✅");
    });
});


});
