const form = document.forms['makeWizard'];

//event listener will invoke function when form is submitted
form.addEventListener('submit', makeWizard, false);

function makeWizard(event) {
    event.preventDefault(); //prevent the form from being submitted
    const wizard = {}; //create an empty object
    wizard.name = form.wizardName.value; //create a name property based on teh input
    wizard.age = form.age.value;
    wizard.city = form.city.value;
    wizard.origin = form.origin.value;
    wizard.category = form.category.value;    
    wizard.courses = [];
    for (let i=0; i < form.courses.length; i++) {
        if (form.courses[i].checked) {
            wizard.courses.push(form.courses[i].value);
        }
    }
    
    var stringifyWizard = JSON.stringify(wizard);
    localStorage.setItem("wizard", stringifyWizard);
    // Retrieving data:
    let text = localStorage.getItem("wizard");
    let obj = JSON.parse(text);
    let wizardInfo = `<b>Name:</b> ${obj.name} <br> <b>Age:</b> ${obj.age} <br> <b>City:</b> ${obj.city} <br> <b>Type of Wizard/Witch:</b> ${obj.category} <br> <b>Courses:</b> `;

    for(var x=0; x < obj.courses.length; x++){
        wizardInfo += '<br>' + obj.courses[x];
    };

    wizardInfo += `<br> <b>Origin Story:</b> ${obj.origin}`;

    document.getElementById("wizardInfo").innerHTML = wizardInfo;
    console.log(stringifyWizard);
    return wizard;
}

//stringify.age -- one for each question\
//+ to the string and do getElementByID().innerHTML;

// function disableSubmit(event) {
//     if(event.target.value === ''){
//         document.getElementById('submit').disabled = true;
//     } else {
//         document.getElementById('submit').disabled = false;
//     }
// }

// form.wizardName.addEventListener('keyup', disableSubmit, false);