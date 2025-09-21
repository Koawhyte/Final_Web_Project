//navbar section
function showSideBar(){
    let Bar = document.querySelector('.sidebar');

    Bar.style.display ='flex'

};

function hideSideBar(){
    let hideBar = document.querySelector('.sidebar');

    hideBar.style.display ='none'

};

//form section


const form = document.querySelector('.form')

form.addEventListener('submit', (e) =>{
    e.preventDefault();


    const fullname = document.querySelector('input[name="fullName"]');
    const email = document.querySelector('input[name="email"]');
    const phoneNumber = document.querySelector('input[name="number"]');
    const subject = document.querySelector('input[name="subject"]');
    const message = document.querySelector('textarea[name="msg"]');
    
    //validate input fields
    let isValid = true;

    if(fullname.value.trim() ==="" || fullname.value.trim().length < 3 || !/^[a-zA-Z\s]+$/.test(fullname.value.trim())){
        setError(fullname, 'Full name is not valid. Please enter a valid full name with at least 3 characters.');
        isValid = false;
        
    }
    else {
        setSuccess(fullname);
    }

    if(!validateEmail(email.value.trim())){
        setError(email, 'Email format is not valid. Please enter a valid email address');
        isValid = false;

    }
    else{
        setSuccess(email);
    }
    if(!validatephoneNumber(phoneNumber.value.trim())){
        setError(phoneNumber, 'phone number format is not valid. Please enter a 10-digit phone number.');
        isValid = false;

    }
    else{
        setSuccess(phoneNumber);
    }

    if(subject.value.trim() ==="" || subject.value.trim().length < 3){
        setError(subject, 'Subject is required and should be atleast  3 characters long.');
        isValid = false;
    }
    else{
        setSuccess(subject);
    }

     if(message.value.trim() ==="" || message.value.trim().length < 10){
        setError(message, 'Message is required and should be atleast  10 characters long.');
        isValid = false;
    }
    else{
        setSuccess(message);
    }

    //submit the form data if it is valid
    if(isValid){
       const successMessage = document.createElement('div');
       successMessage.style.color = 'green';
       successMessage.style.textAlign = 'center';
       successMessage.style.marginTop = '1rem';
       successMessage.innerText = 'message submitted successfully!';
       form.appendChild(successMessage);
    
// clear form fields after submission
fullname.value = '';
email.value = '';
phoneNumber.value = '';
subject.value = '';
message.value = '';

setTimeout(() =>{
    successMessage.remove();
}, 3000);

}
});


//Function to set error message
function setError(input, message){
    const parent = input.parentElement;
    const errorElement = parent.querySelector('small');
    if(!errorElement){
        const small = document.createElement('small');
        small.style.color ='red';
        small.innerText = message;
        small.classList.add('error-message');
        parent.appendChild(small);
        input.classList.add('error')
    }
}
function setSuccess(input){
    const parent = input.parentElement;
    const errorElement = parent.querySelector('small')
    if (errorElement){
        errorElement.remove();

    }
    input.classList.remove('error');
}

// Function to validate email
function validateEmail(email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}


 // function to validate phone Number
function validatephoneNumber(phoneNumber){
    const phoneNumberRegex =/^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
}