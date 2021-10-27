/*****************Contact.html************************/


//form validation

function validateName(){
    const nameField = document.querySelector('#name');
    console.log(nameField.value)
    const nameRegEx =   /^[a-zA-ZæøåÆØÅ\s]*$/;
    let nameResult = nameRegEx.test(`${nameField.value}`)

    if (nameResult==true && nameField.value.length >0){
        nameField.classList.remove('incorrect');
        return true;
    } else{
        nameField.classList.add('incorrect');
        console.log(nameResult)
        return false;
    }
}

function validateSubject() {
    const subjectField = document.querySelector('#subject');
    const subjectRegEx = /^[a-zA-ZæøåÆØÅ0-9\s]{10,}$/;
    let subjectResult = subjectRegEx.test(`${subjectField.value}`)
    
    if (subjectResult == true){
        subjectField.classList.remove('incorrect')
        return true;
    } else{
        subjectField.classList.add('incorrect')
        return false;
    }
}


function validateEmail() {
    const emailField = document.querySelector('#mail');
    const emailRegEx = /^[a-zA-ZæøåÆØÅ0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    let emailResult = emailRegEx.test(`${emailField.value}`)

    if (emailResult == true && emailField.value.length > 0){
        emailField.classList.remove('incorrect')
        return true;
    } else{
        emailField.classList.add('incorrect')
        return false;
    }    
}

function validateAdress() {
    const adressField = document.querySelector('#adress');
    const adressRegEx = /^[a-zA-ZæøåÆØÅ0-9\s]{25,}$/
    let adressResult = adressRegEx.test(`${adressField.value}`)

    if (adressResult == true){
        adressField.classList.remove('incorrect')
        return true;
    } else{
        adressField.classList.add('incorrect')
        return false;
    }   
}

function validateForm() {
    let validForm = true;
    if (validateName() == false){
        validForm = false;
    }
    if (validateSubject() == false){
        validForm = false
    }
    if (validateEmail() == false){
        validForm = false
    }
    if (validateAdress() == false){
        validForm = false
    }
    return validForm;   
}

 const formContainer = document.querySelector('.form-container')

 formContainer.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (validateForm() == false){
    } else {
        formContainer.innerHTML= `Your form is submitted. Thank you for reaching out to us!`
    }
})