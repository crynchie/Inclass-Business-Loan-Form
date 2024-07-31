document.getElementById('loanForm').addEventListener('submit', function(event) {
  if (validateForm(event)) {
    showSuccessMessage();
    event.preventDefault();
  }
});

function validateForm(event) {
  document.querySelectorAll('.error').forEach(error => error.remove());

  let isValid = true;

  // Get form fields
  let firstNameField = document.getElementById('firstName');
  let lastNameField = document.getElementById('lastName');
  let emailField = document.getElementById('email');
  let phoneNumberField = document.getElementById('phoneNumber'); 
  let addressField = document.getElementById('address');
  let cityField = document.getElementById('city');
  let stateField = document.getElementById('state');
  let zipField = document.getElementById('zip');
  let businessNameField = document.getElementById('businessName');
  let loanAmountField = document.getElementById('loanAmount');

  if (firstNameField.value.trim() === '') {
    isValid = false;
    showError(firstNameField, 'First name is required.');
  }

  if (lastNameField.value.trim() === '') {
    isValid = false;
    showError(lastNameField, 'Last name is required.');
  }

  if (!validateEmail(emailField.value)) {
    isValid = false;
    showError(emailField, 'Email format is incorrect.');
  }

  if (!validatePhoneNumber(phoneNumberField.value)) { 
    isValid = false;
    showError(phoneNumberField, 'Phone number format is incorrect.');
  }

  if (addressField.value.trim() === '') {
    isValid = false;
    showError(addressField, 'Address is required.');
  }

  if (cityField.value.trim() === '') {
    isValid = false;
    showError(cityField, 'City is required.');
  }

  if (stateField.value.trim() === '') {
    isValid = false;
    showError(stateField, 'State is required.');
  }

  if (zipField.value.trim() === '' || !validateZip(zipField.value)) {
    isValid = false;
    showError(zipField, 'ZIP code is required and must be valid.');
  }

  if (businessNameField.value.trim() === '') {
    isValid = false;
    showError(businessNameField, 'Business name is required.');
  }

  if (loanAmountField.value <= 0) {
    isValid = false;
    showError(loanAmountField, 'Loan amount must be greater than zero.');
  }

  return isValid;
}

function showError(field, message) {
  let errorDiv = document.createElement('div');
  errorDiv.className = 'error';
  errorDiv.innerText = message;
  field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function showSuccessMessage() {
  let form = document.getElementById('loanForm');
  let successDiv = document.createElement('div');
  successDiv.className = 'success';
  successDiv.innerText = 'Your application has been submitted successfully!';
  form.parentNode.insertBefore(successDiv, form);
  form.style.display = 'none';
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePhoneNumber(phoneNumber) {
  const phoneNumberPattern = /^[0-9]{10}$/; 
  return phoneNumberPattern.test(phoneNumber);
}

function validateZip(zip) {
  const zipPattern = /^[0-9]{5}$/; 
  return zipPattern.test(zip);
}
