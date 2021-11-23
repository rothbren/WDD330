const form = document.forms['wizard'];

//event listener will invoke function when form is submitted
form.addEventListener('submit', makewizard, false);

function makeWizard(event) {
    event.preventDefault(); //prevent the form from being submitted
    const wizard = {}; //create an empty object
    wizard.name = form.wizardName.value; //create a name property based on teh input
    wizard.realName = form.realName.value;
    wizard.category = form.category.value;// could also use this code -- hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    wizard.age = form.age.value;
    wizard.city = form.city.value;
    wizard.origin = form.origin.value;
    alert(JSON.stringify(wizard)); // converts object to JSON strings and displays in alert dialog
    return wizard;
}

wizard.classes = [];
for (let i=0; i < form.classes.length; i++) {
    if (form.classes[i].checked) {
        wizard.classes.push(form.classes[i].value);
    }
}

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const wizardName = this.value.toUpperCase();
    if(wizardName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

form.wizardName.addEventListener('keyup',disableSubmit,false);