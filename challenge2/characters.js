//helper function to fetch the data from an external source and return it in JSON format
function getJSON(url) {
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // model code...it is a bit redundant in this case...we could just call getJSON directly...but if our model became more complex this sets us up to accomodate that.
  function getWizard(url) {
    return getJSON(url);
  }
  //  View code
  function renderWizardList(wizard, wizardListElement) {
    // I decided to use a table to display my list of wizard. The wizardList Element is that table and it has 2 children: thead and tbody...we need to put our wizard into tbody...so I reference the second child.
    const list = wizardListElement.children[1];
    list.innerHTML = "";
    //loop through the wizard
    wizard.forEach(function (wizard) {
      //console.log(wizard);
      //create elements for list...tr
      let listItem = document.createElement("tr");
      listItem.innerHTML = `
          <td><a href="${wizard.url}">${wizard.name}</a></td>
          <td>${wizard.house}</td>
          <td>${wizard.patronus}</td>
          <td>${wizard.wand}</td>
          `;
  
      listItem.addEventListener("click", function (event) {
        //when clicked the default link behavior should be stopped, and the wizard details function should be called...passing the value of the href attribute in
        event.preventDefault();
        getWizardDetails(wizard.url);
      });
  
      //add the list item to the list
      list.appendChild(listItem);
    });
  }
  // need to write the code to render the details to HTML
  function renderWizardDetails(wizardData) {
    console.log(wizardData);
  }
  
  // controller code
  function showWizard(url = "http://hp-api.herokuapp.com/api/characters") {
    getWizard(url).then(function (data) {
      console.log(data);
      const results = data.results;
  
      //get the list element
      const wizardListElement = document.getElementById("wizard");
      renderWizardList(results, wizardListElement);
  
      // enable the next and prev buttons.
      if (data.next) {
        const next = document.getElementById("next");
        // normally we would prefer the addEventListener method of adding a listener. Using something like 'element.onEvent = event_function' has the limitation of only being able to hold one listener of the type we choose. In this case that is a good thing however. Because we are not re-creating the buttons each time we load a new batch of data we could end up with several listeners attached to each button by the last page. We won't have that issue here.
        next.onclick = () => {
          // notice to show the next page we just re-call the showWizard function with a new URL
          showWizard(data.next);
        };
      }
      if (data.previous) {
        const prev = document.getElementById("prev");
  
        prev.onclick = () => {
          showWizard(data.previous);
        };
      }
    });
  }
  
  function getWizardDetails(url) {
    //call getJSON functions for the provided url
    getWizard(url).then(function (data) {
      renderWizardDetails(data);
      //with the results populate the elements in the #detailsbox
    });
  }
  showWizard();

 