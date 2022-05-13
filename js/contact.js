/*****************Contact.html************************/

//form validation

function validateName() {
  const nameField = document.querySelector("#name");
  const nameRegEx = /^[a-zA-ZæøåÆØÅ\s]*$/;
  let nameResult = nameRegEx.test(`${nameField.value}`);

  if (nameResult && nameField.value.length > 0) {
    nameField.classList.remove("incorrect");
    return true;
  } else {
    nameField.classList.add("incorrect");
    return false;
  }
}

function validateEmail() {
  const emailField = document.querySelector("#email");
  const emailRegEx =
    /^[a-zA-ZæøåÆØÅ0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  let emailResult = emailRegEx.test(`${emailField.value}`);

  if (emailResult && emailField.value.length > 0) {
    emailField.classList.remove("incorrect");
    return true;
  } else {
    emailField.classList.add("incorrect");
    return false;
  }
}
function validateSubject() {
  const subjectField = document.querySelector("#subject");
  const subjectRegEx = /^[a-zA-ZæøåÆØÅ0-9\s]{5,}$/;
  let subjectResult = subjectRegEx.test(`${subjectField.value}`);

  if (subjectResult) {
    subjectField.classList.remove("incorrect");
    return true;
  } else {
    subjectField.classList.add("incorrect");
    return false;
  }
}

function validateMsg() {
  const msgInput = document.querySelector("#message");
  if (msgInput.value.length > 20) {
    msgInput.classList.remove("incorrect");
    return true;
  } else {
    msgInput.classList.add("incorrect");
    return false;
  }
}
const nameSpan = document.querySelector(".name-err");
const emailSpan = document.querySelector(".email-err");
const subjSpan = document.querySelector(".subj-err");
const msgSpan = document.querySelector(".msg-err");

function validateForm() {
  let validForm = true;
  if (validateName()) {
    nameSpan.classList.add("hide-element");
    console.log("valid name");
  } else {
    nameSpan.classList.remove("hide-element");
    validForm = false;
  }
  if (validateEmail()) {
    emailSpan.classList.add("hide-element");
    console.log("valid email");
  } else {
    validForm = false;
    emailSpan.classList.remove("hide-element");
  }
  if (validateSubject()) {
    console.log("valid subj");
    subjSpan.classList.add("hide-element");
  } else {
    subjSpan.classList.remove("hide-element");
    validForm = false;
  }
  if (validateMsg() == true) {
    console.log("valid msg");
    msgSpan.classList.add("hide-element");
  } else {
    msgSpan.classList.remove("hide-element");
    validForm = false;
  }
  console.log(validForm);
  return validForm;
}

const formContainer = document.querySelector(".form-container");
const form = document.querySelector("#form");

formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  //validates form but it's not sent anywhere
  if (!validateForm()) {
  } else {
    formContainer.innerHTML = `<h2 class="succes-message">Your form is submitted. Thank you for reaching out to me!</h2>`;
  }
});
