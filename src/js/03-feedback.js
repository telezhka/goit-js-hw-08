const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
emailInput.addEventListener('input', handleFormInput);
messageInput.addEventListener('input', handleFormInput);
import throttle from 'lodash/throttle';
function handleFormInput() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
document.addEventListener('DOMContentLoaded', () => {
  const savedFormData = localStorage.getItem('feedback-form-state');

  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});
form.addEventListener('submit', throttle(handleSubmit, 500));

function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
}
