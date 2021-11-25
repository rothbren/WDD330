const form = document.forms['wizard'];

//event listener will invoke function when form is submitted
form.addEventListener('submit', makeWizard, false);

function makeWizard(event) {
    event.preventDefault(); //prevent the form from being submitted
    const wizard = {}; //create an empty object
    wizard.name = form.wizardName.value; //create a name property based on teh input
    wizard.age = form.age.value;
    wizard.city = form.city.value;
    wizard.origin = form.origin.value;
    wizard.category = form.category.value
    alert(JSON.stringify(wizard)); // converts object to JSON strings and displays in alert dialog
    return wizard;
}

wizard.courses = [];
for (let i=0; i < form.courses.length; i++) {
    if (form.courses[i].checked) {
        wizard.courses.push(form.courses[i].value);
    }
}

// const label = form.querySelector('label');
// const error = document.createElement('div');
// error.classList.add('error');
// error.textContent = '! Your name is not allowed to start with a number.';
// label.append(error);

// function validateInline() {
//     const wizardName = this.value.toUpperCase();
//     if(wizardName.startsWith('X')){
//     error.style.display = 'block';
//     } else {
//     error.style.display = 'none';
//     }
// }

function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

form.wizardName.addEventListener('keyup', disableSubmit, false);