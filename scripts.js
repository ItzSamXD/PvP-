// Simple form validation and submission handler
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const discord = document.getElementById('discord').value;

    // Validate input fields
    if (name && email && discord) {
        alert(`Thank you for registering, ${name}! A confirmation email has been sent to ${email}.`);
    } else {
        alert("Please fill out all fields!");
    }

    // Optionally, clear the form after submission
    document.getElementById('registration-form').reset();
});
