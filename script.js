
function togglePasswordVisibility() {
    const passwordInput = document.getElementById("pass-input");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}



function showSecondForm() {
    // alert("Function called!");
    document.getElementById('secondForm').style.display = 'block';

    document.getElementById("secondFormFields").addEventListener("submit", function (event) {
        event.preventDefault(); // prevent actual form submission

        const username = document.getElementById("username").value;
        const password = document.getElementById("pass-input").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const mobile = document.getElementById("number").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const pincode = document.getElementById("pincode").value;

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
