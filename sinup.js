<script>
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
        } else {
            alert("Signup successful!");
            // Here, you can send the form data to a server or handle it as needed
            signupForm.reset(); // Reset the form
        }
    });
</script>
