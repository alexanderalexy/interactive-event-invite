// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // URLs for the background images
    const attendingBackgroundURL = 'https://media.giphy.com/media/l2JHPB58MjfV8W3K0/giphy.gif';
    const notAttendingBackgroundURL = 'https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif';

    // Function to handle form submission
    function handleRSVPFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the value of the attendance field
        const attendanceValue = document.getElementById('attendance').value;

        // Define the background color
        let backgroundColor = '#81c784'; // Default background color

        if (attendanceValue === 'yes') {
            // User is attending, display a positive message and set the attending background image
            displayConfirmationMessage("🎉 Thank you for your RSVP! We can't wait to see you at the event!", backgroundColor);
            document.body.style.background = `url('${attendingBackgroundURL}') no-repeat center center fixed`;
        } else {
            // User is not attending, display a polite message and set the not attending background image
            displayConfirmationMessage("😞 Thank you for letting us know. We'll miss you at the event!", backgroundColor);
            document.body.style.background = `url('${notAttendingBackgroundURL}') no-repeat center center fixed`;
        }

        // Apply common background styles
        document.body.style.backgroundSize = 'cover';
    }

    // Function to display the confirmation message
    function displayConfirmationMessage(message, backgroundColor) {
        const confirmationMessageElement = document.getElementById('confirmation-message');
        confirmationMessageElement.innerHTML = message; // Set the message
        confirmationMessageElement.style.display = 'block'; // Make the element visible
        confirmationMessageElement.style.backgroundColor = backgroundColor; // Set the background color
    }

    // Attach the submit event listener to the RSVP form
    const rsvpForm = document.getElementById('rsvpForm');
    rsvpForm.addEventListener('submit', handleRSVPFormSubmit);
});
