const nextButton=document.querySelector('nav .next');
const prevButton=document.querySelector('nav .prev');
const submitButton=document.querySelector('nav .submit');
const indicatorSteps=document.querySelectorAll('.indicator');
const formShow=document.querySelectorAll('.form-child');
let active=1;
indicatorSteps[0].classList.add('active');
formShow[0].classList.add('active');

const termsCheckbox = document.querySelector('#check'); // Select the checkbox by its ID

// Function to check if the checkbox is selected
function isCheckboxSelected() {
    return termsCheckbox.checked;
}


submitButton.addEventListener('click',() => {

    
    if (!isCheckboxSelected()) {
        alert('Please agree to the Terms and Conditions.');
        event.preventDefault(); // Prevent progression if the checkbox is not selected
        return;
    }
  else{
    // Generate a random letter from A to Z
const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); 

// Generate six random digits
const randomDigits = Math.floor(100000 + Math.random() * 900000).toString(); 

// Combine the letter and digits to create the registration number
const registrationNumber = randomLetter + randomDigits;

alert(`Your Registration is completed.\nYour registration number: ${randomLetter}-${randomDigits}`);
location.reload();
  }    
    
});

nextButton.addEventListener('click',() => {

    if (active === 1) {
        // Check if at least one radio button is selected in any faculty section
        const facultySections = document.querySelectorAll('.faculty');
        let hasSelection = false;

        facultySections.forEach((section) => {
            const selectedRadio = section.querySelector('input[type="radio"]:checked');
            if (selectedRadio) {
                hasSelection = true;
            }
        });
        if (!hasSelection) {
            alert('Please select a field of study.');
            event.preventDefault(); // Prevent progression if no selection is made
            return;
        }
    }

    if (active === 2) {
        // Check if the "Full Name" field is empty
        const fullNameInput = document.querySelector('.fname');
        const lastNameInput = document.querySelector('.lname');

        if (!fullNameInput.value.trim() || !lastNameInput.value.trim()) {
            alert('full Name is required.');
            event.preventDefault(); // Prevent progression if the field is empty
            return;
        }

        const photoInput = document.querySelector('input[name="photo"]');
        if (!photoInput.files[0]) {
            alert('Please select a photo.');
            event.preventDefault(); // Prevent progression if no file is selected
            return;
        }

        const birthDateInput = document.querySelector('input[name="birth_date"]');
        const birthMonthInput = document.querySelector('input[name="birth_month"]');
        const birthYearInput = document.querySelector('input[name="birth_year"]');

        const birthDate = Number(birthDateInput.value.trim());
        const birthMonth = Number(birthMonthInput.value.trim());
        const birthYear = Number(birthYearInput.value.trim());

        // Validate the day, month, and year ranges
        if (
            isNaN(birthDate) || birthDate < 1 || birthDate > 31 ||
            isNaN(birthMonth) || birthMonth < 1 || birthMonth > 12 ||
            isNaN(birthYear) || birthYear < 1990 || birthYear > 2005
        ) {
            alert('Please enter a valid birth date, month, and year within the specified ranges.');
            event.preventDefault(); // Prevent progression if the input values are invalid
            return;
        }

        const emailInput = document.querySelector('input[name="email"]');
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address.');
            event.preventDefault(); // Prevent progression if email format is invalid
            return;
        }

        const phoneNumberInput = document.querySelector('input[name="Phone_number"]');
        const phoneNumberRegex = /^\(+\d{2}\)\d{10}$/;
        if (!phoneNumberRegex.test(phoneNumberInput.value)) {
            alert('Please enter a valid phone number in the format (000) 000-0000.');
            event.preventDefault(); // Prevent progression if phone number format is invalid
            return;
        }

         // Check address fields
         const streetAddressInput = document.querySelector('input[name="address"]');
         const cityInput = document.querySelector('input[name="city"]');
         const stateInput = document.querySelector('input[name="state"]');
         const zipcodeInput = document.querySelector('input[name="zipcode"]');
         if (
            !streetAddressInput.value.trim() ||
            !cityInput.value.trim() ||
            !stateInput.value.trim() ||
            !zipcodeInput.value.trim() ||
            !/^\d{6}$/.test(zipcodeInput.value.trim()) // Check if zip code is exactly 6 digits
        ) {
            alert('All address fields are required, and the zip code must be 6 digits.');
            event.preventDefault(); // Prevent progression if any address field is empty or zip code is invalid
            return;
        }

        const countrySelect = document.querySelector('select[name="country"]');
        if (!countrySelect.value.trim()) {
            alert('Please select your country.');
            event.preventDefault(); // Prevent progression if any address field is empty or zip code is invalid
                return;
        }

    
     
        const password = document.querySelector('input[name="pass"]').value;
        const confirmPassword = document.querySelector('input[name="conpass"]').value;

            var minLength = 8; // Minimum password length
            var uppercaseRegex = /[A-Z]/;
            var lowercaseRegex = /[a-z]/;
            var digitRegex = /\d/;
            var specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/; // Add or modify special characters as needed

            // Check if the password meets validation criteria
            if (password.length < minLength || !uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !digitRegex.test(password) || !specialCharRegex.test(password)) {
                alert("Password must meet the following criteria:\n" +
                    "- Minimum length of 8 characters\n" +
                    "- At least one uppercase letter\n" +
                    "- At least one lowercase letter\n" +
                    "- At least one digit\n" +
                    "- At least one special character");
                    event.preventDefault(); // Prevent progression if the input values are invalid
                    return;
            }

            if (password !== confirmPassword) {
                alert("Password and confirm password do not match.");
                event.preventDefault(); 
                return;
            }

            const schoolname = document.querySelector('input[name="school_name"]').value;
            if (!schoolname.trim()) {
                alert('School Name is required.');
                event.preventDefault(); // Prevent progression if the field is empty
                return;
            }

            const firstdate = document.querySelector('input[name="attend_entry"]').value;
            if (!firstdate.trim()) {
                alert('School Entry Date is required');
                event.preventDefault(); // Prevent progression if the field is empty
                return;
            }

            const lastdate = document.querySelector('input[name="attend_exit"]').value;
            if (!lastdate.trim()) {
                alert('School Last Date is required');
                event.preventDefault(); // Prevent progression if the field is empty
                return;
            }

            const genderInputs = document.querySelectorAll('input[name="gen"]');
            let hasGenderSelection = false;

            genderInputs.forEach((input) => {
                if (input.checked) {
                    hasGenderSelection = true;
                }
            });

            if (!hasGenderSelection) {
                alert('Please select a gender.');
                event.preventDefault(); // Prevent progression if no gender is selected
                return;
            }

    

    }

    active++;
    if(active > indicatorSteps.length){
        active=indicatorSteps.length;
        
    }
    updateProgress();
});



prevButton.addEventListener('click',() => {
    active--;
    if(active < 1){
        active = 1;
    }
    updateProgress();
});

const updateProgress =() =>{
    if(indicatorSteps.length == active){
        nextButton.style.display ='none';
        submitButton.style.display='inline-block';
    }
    else{
        nextButton.style.display ='inline-block';
        submitButton.style.display='none';
    }

    //toggle .active class for list item

     indicatorSteps.forEach((step,i)=>{
        if(i == (active-1)){
            step.classList.add('active');
            formShow[i].classList.add('active');
        }
        else{
            step.classList.remove('active');
            formShow[i].classList.remove('active');
        }
     });

     //faculty selected

     var selected_studies=document.querySelectorAll('input[type="radio"]:checked'),
     selected_studies_html='';
     for(var study of selected_studies){
        if(study.checked){
            let parent =study.closest('.faculty'),
            study_name=study.value,
            faculty=parent.querySelector('h3').innerHTML;
            icon=parent.querySelector('.icon').outerHTML;

            selected_studies_html += `
            <div class="faculty">
                   ${icon}
                    <h3>${faculty}</h3>
                    <span>${study_name}</span>
                </div> `;
        }
     }
      document.querySelector('.field-selected').innerHTML=selected_studies_html;
}

//photo
document.querySelector('input[name="photo"]').addEventListener('change',function(e){
    var output=document.querySelector('.photo');
    output.src = URL.createObjectURL(e.target.files[0]);
    output.onload=function(){
        URL.revokeObjectURL(output.src);
    }
})

//input value transfer
document.querySelector('.fname').addEventListener('keyup',function(){
    document.querySelector('.firstname').innerHTML=this.value;
});
document.querySelector('.lname').addEventListener('keyup',function(){
    document.querySelector('.lastname').innerHTML=this.value;
})
document.querySelector('select[name="country"]').addEventListener('change',function(){
    document.querySelector('.nationality').innerHTML=this.value;
})
document.querySelector('input[name="birth_date"]').addEventListener('keyup',function(){
    document.querySelector('.date').innerHTML=this.value;
})
document.querySelector('input[name="birth_month"]').addEventListener('keyup',function(){
    const date=new Date();
    date.setMonth(this.value-1);
    month_name=date.toLocaleDateString('en-US',{
        month:'long',
    });
    if(!this.value)month_name='';
    document.querySelector('.month').innerHTML=month_name;
})
document.querySelector('input[name="birth_year"]').addEventListener('keyup',function(){
    document.querySelector('.year').innerHTML=this.value;
})

const continueButton = document.querySelector('#continue-button');

continueButton.addEventListener('click', function (event) {
    let hasError = false;

    // Check if a file is selected for the "photo" input field
    const photoInput = document.querySelector('input[name="photo"]');
    if (!photoInput.files[0]) {
        alert('Please select a photo.');
        hasError = true;
    }

    // Repeat the same pattern for other required fields

    if (hasError) {
        event.preventDefault(); // Prevent the default action (e.g., navigation)
    }
});