const form = document.getElementById("regForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");
const successMsg = document.getElementById("success-message");
const userData = document.getElementById("user-data");
const tableBody = document.querySelector("#info-table tbody");

// Regex rules
const nameRegex = /^[A-Za-z\s]{3,30}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

// Error show/clear
function showError(input, message) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = message;
  input.style.borderColor = "red";
}

function clearError(input) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = "";
  input.style.borderColor = "";
}

// Handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  successMsg.textContent = "";
  let valid = true;

  // Validation
  if (!nameRegex.test(nameInput.value.trim())) {
    showError(nameInput, "Name must be 3–30 letters only.");
    valid = false;
  } else clearError(nameInput);

  if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, "Invalid email address.");
    valid = false;
  } else clearError(emailInput);

  if (!passwordRegex.test(passwordInput.value)) {
    showError(
      passwordInput,
      "Password must be at least 6 chars with letters & numbers."
    );
    valid = false;
  } else clearError(passwordInput);

  if (passwordInput.value !== confirmInput.value) {
    showError(confirmInput, "Passwords do not match!");
    valid = false;
  } else clearError(confirmInput);

  // If valid form
  if (valid) {
    successMsg.textContent = " Registration Successful!";

    // Add user to table
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${nameInput.value}</td>
      <td>${emailInput.value}</td>
    `;
    tableBody.appendChild(newRow);

    // Show table section
    userData.style.display = "block";

    // Reset form
    form.reset();
  }
});

