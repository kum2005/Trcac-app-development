


const registrationForm = document.getElementById('registration-form');
const loginForm = document.getElementById('login-form');

// Handle registration
registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const classValue = document.getElementById('class').value;
  const age = document.getElementById('age').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const email = document.getElementById('email').value;
  const nationality = document.getElementById('nationality').value;
  const contactNumber = document.getElementById('contact-number').value;
  const password = document.getElementById('password').value;

  // Store user data in localStorage
  const userData = {
    name,
    classValue,
    age,
    gender,
    email,
    nationality,
    contactNumber,
    password
  };

  localStorage.setItem(email, JSON.stringify(userData));

  // Display success alert
  alert('New student registered successfully!');

  // Optionally, you can clear the form fields after submission
  registrationForm.reset();

  // Switch to login form
  document.getElementById('registration-container').style.display = 'none';
  document.getElementById('login-container').style.display = 'block';
});

// Handle login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const loginEmail = document.getElementById('login-email').value;
  const loginPassword = document.getElementById('login-password').value;

  const storedUserData = localStorage.getItem(loginEmail);
  if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    if (userData.password === loginPassword) {
      alert('Login successful!');
      // Redirect to home page
      window.location.href = 'Welcome.html';
    } else {
      alert('Incorrect password. Please try again.');
    }
  } else {
    alert('No user found with this email. Please register first.');
  }

  // Optionally, you can clear the form fields after submission
  loginForm.reset();
});





function toggleForms() {
    const registrationContainer = document.getElementById('registration-container');
    const loginContainer = document.getElementById('login-container');
    
    if (registrationContainer.style.display === 'none') {
        registrationContainer.style.display = 'block';
        loginContainer.style.display = 'none';
    } else {
        registrationContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    }
}
