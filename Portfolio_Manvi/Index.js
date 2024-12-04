
//header
// JavaScript to toggle the navigation menu on mobile
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});




// JavaScript for typing and deleting effect
document.addEventListener("DOMContentLoaded", function () {
    const typedTextElement = document.querySelector(".typed-text");
    const phrases = ["Software Developer", "Fullstack Developer", "Frontend Developer"];
    let phraseIndex = 0;
    let charIndex = 0;
    let currentPhrase = phrases[phraseIndex];
    
    function typeText() {
        if (charIndex < currentPhrase.length) {
            typedTextElement.textContent += currentPhrase.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 150); // Speed of typing
        } else {
            setTimeout(deleteText, 1000); // Delay before starting to delete
        }
    }
    
    function deleteText() {
        if (charIndex > 0) {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, 100); // Speed of deleting
        } else {
            phraseIndex = (phraseIndex + 1) % phrases.length;
            currentPhrase = phrases[phraseIndex];
            setTimeout(typeText, 500); // Delay before starting to type the next phrase
        }
    }

    typeText(); // Start typing effect when the page loads
});



// Mobile Menu Toggle
// const menuToggle = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.nav-links');

// menuToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });


//contact 

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get values from the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Prepare the email details
    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    // Create the mailto link with encoded values for subject and body
    const mailtoLink = `mailto:manvilaad08@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mail client by setting window location to the mailto link
    window.location.href = mailtoLink;
});

