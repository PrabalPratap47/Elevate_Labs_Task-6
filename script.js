document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form submit to server
  
    // Clear previous feedback
    const feedback = document.getElementById('feedback');
    feedback.textContent = '';
    feedback.style.color = 'red';
  
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Simple email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!username) {
      feedback.textContent = 'Name is required.';
      return;
    }
    if (!email) {
      feedback.textContent = 'Email is required.';
      return;
    }
    if (!emailPattern.test(email)) {
      feedback.textContent = 'Please enter a valid email.';
      return;
    }
    if (!message) {
      feedback.textContent = 'Message is required.';
      return;
    }
  
    // If all valid
    feedback.style.color = 'green';
    feedback.textContent = 'Form submitted successfully!';
  
    // Optionally clear form inputs after success
    this.reset();
  });
  