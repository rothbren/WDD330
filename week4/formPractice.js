const form = document.forms[0]; //returns collection from index; returns first and only object

const form = document.forms['search']; //name attribute to identfy form

const [input,button] = form.elements; //returns elements in the form

const input = form.searchInput //access form using name attributes as a property 

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
} //using text elements to retrieve the text inside the field
