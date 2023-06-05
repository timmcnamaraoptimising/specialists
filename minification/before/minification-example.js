// Move this code to minification-example.js
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Check if name field is empty
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return false;
  }

  // Check if email field is empty or invalid
  const emailPattern = /^\S+@\S+\.\S+$/;
  if (emailInput.value.trim() === '' || !emailPattern.test(emailInput.value)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return false;
  }

  // Check if message field is empty
  if (messageInput.value.trim() === '') {
    alert('Please enter a message.');
    messageInput.focus();
    return false;
  }

  // If all fields are valid, submit the form and show the success modal
  showSuccessModal();
  form.reset();
});

function showSuccessModal() {
  const modal = document.querySelector('.modal');
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 3000);
}

function toggleAnswer(button) {
  const answer = button.nextElementSibling;
  button.querySelector('.text-gray-500').textContent = answer.classList.toggle('hidden') ? '+' : '-';
}