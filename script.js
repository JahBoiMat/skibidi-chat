// Get DOM elements
const popup = document.getElementById("popup");
const changeUserButton = document.getElementById("change-user-button");
const cancelButton = document.getElementById("cancel-button");
const submitButton = document.getElementById("submit-button");
const usernameInput = document.getElementById("username-input");
const errorMessage = document.getElementById("error-message");

// Show the popup when "Change User" button is clicked
changeUserButton.addEventListener("click", () => {
    popup.classList.remove("hidden");
    usernameInput.value = ""; // Clear the input field
    errorMessage.classList.add("hidden"); // Hide error message
});

// Close the popup when "Cancel" button is clicked
cancelButton.addEventListener("click", () => {
    popup.classList.add("hidden");
});

// Handle "Submit" button click
submitButton.addEventListener("click", () => {
    const newUsername = usernameInput.value.trim();
    if (!newUsername) {
        errorMessage.classList.remove("hidden");
        usernameInput.value = "";
    } else {
        // (Username change functionality to be implemented later)
        popup.classList.add("hidden");
    }
});
