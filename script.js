// Update the footer year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form validation
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from refreshing the page

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  if (name.length < 2) {
    status.textContent = "Please enter a valid name.";
    status.style.color = "red";
    return;
  }

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    status.textContent = "Please enter a valid email address.";
    status.style.color = "red";
    return;
  }

  if (message.length < 10) {
    status.textContent = "Message must be at least 10 characters long.";
    status.style.color = "red";
    return;
  }

  // If everything is valid
  status.textContent = "Message sent successfully! (simulation)";
  status.style.color = "green";
  form.reset();
});
