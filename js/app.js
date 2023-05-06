document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const email = document.getElementById("emailInput").value;
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
    const errorText = document.getElementById("errorText");
  
    
    errorText.textContent = "";
    clearFieldErrors();
  
    let isValid = true;
  
    if (!validateEmail(email)) {
      markFieldAsInvalid("emailInput");
      errorText.textContent = "Ошибка: Введите правильный email";
      isValid = false;
    }
  
    if (username.length < 1) {
      markFieldAsInvalid("usernameInput");
      errorText.textContent = "Ошибка: Введите логин";
      isValid = false;
    }
  
    if (password.length < 1) {
      markFieldAsInvalid("passwordInput");
      errorText.textContent = "Ошибка: Введите пароль";
      isValid = false;
    }
  
    if (isValid) {
      errorText.textContent = "Вы успешно зарегестрированы!";
    }
  });
  
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  function markFieldAsInvalid(fieldId) {
    const field = document.getElementById(fieldId);
    field.style.borderColor = "red";
  }
  
  function clearFieldErrors() {
    const fields = document.querySelectorAll("input[type='email'], input[type='text'], input[type='password']");
    fields.forEach(function(field) {
      field.style.borderColor = "#ccc";
    });
  }
  