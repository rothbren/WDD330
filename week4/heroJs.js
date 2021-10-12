const form = document.forms['hero'];

//event listener will invoke function when form is submitted
form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault(); //prevent the form from being submitted
    const hero = {}; //create an empty object
    hero.name = form.heroName.value; //create a name property based on teh input
    hero.realName = form.realName.value;
    hero.category = form.category.value;// could also use this code -- hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;
    alert(JSON.stringify(hero)); // converts object to JSON strings and displays in alert dialog
    return hero;
}

hero.powers = [];
for (let i=0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
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

form.heroName.addEventListener('keyup',disableSubmit,false);