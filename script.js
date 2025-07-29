/*
function togglePasswordVisibility() {
    const passwordInput = document.getElementById("pass-input");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}*/
document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password'); // Make sure your input has this ID

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            // Toggle the type attribute
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // You can also change the eye icon here (e.g., from 'open eye' to 'closed eye')
            // if you have two different icons or adjust the Unicode character.
            // For example:
            // this.textContent = (type === 'password') ? '&#128065;' : '&#128064;'; // Open eye vs. Eye with slash
        });
    }
});
function showSpinner() {
    document.getElementById('spinner').style.display = 'flex';

    // Optional: Hide spinner after 2 seconds
    setTimeout(() => {
        document.getElementById('spinner').style.display = 'none';
    }, 2000);
}

function showSuccessMessage() {
    const msg = document.getElementById('successMessage');
    msg.style.display = 'block';

    // Optional: auto-hide after 3 seconds
    setTimeout(() => {
        msg.style.display = 'none';
    }, 5000);

}

//close button 

// Function to close Form Two
function closeFormTwo() {
    const formTwo = document.getElementById('secondForm');
    if (formTwo) {
        formTwo.style.display = 'none';
    }
    document.getElementById('successMessage').style.display = 'none';
}
function showSecondForm() {
    // alert("Function called!");
    document.getElementById('secondForm').style.display = 'block';

    document.getElementById("secondFormFields").addEventListener("submit", function (event) {
        event.preventDefault(); // prevent actual form submission
        // (Optional) Print form data to console
        console.log("Form submitted");

        // ✅ Show success message
        showSuccessMessage();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const mobile = document.getElementById("number").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const pincode = document.getElementById("pincode").value;
        console.log("Data Added Successfully");

        console.log("Form Data Submitted:");
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Gender:", gender);
        console.log("Mobile:", mobile);
        console.log("Address:", address);
        console.log("City:", city);
        console.log("Pincode:", pincode);

    });

}
