// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// delete item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var oldTasksNum = Number(document.getElementById("tasksLeft").innerHTML);
    var div = this.parentElement;
    console.log(div)
    if (div.classList.contains('checked')) {
      document.getElementById("tasksLeft").innerHTML = oldTasksNum;
    } else {
      document.getElementById("tasksLeft").innerHTML = oldTasksNum - 1;
    }
    div.style.display = "none";
    div.classList.remove("item");
  }
}

//Add checked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
var oldTasksNum = Number(document.getElementById("tasksLeft").innerHTML);
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    if (ev.target.classList.contains('checked')) {
      document.getElementById("tasksLeft").innerHTML = oldTasksNum - 1;
    } else {
      document.getElementById("tasksLeft").innerHTML = oldTasksNum + 1;
    }
  }
}, false);

//Add button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  var oldTasksNum = Number(document.getElementById("tasksLeft").innerHTML);
  document.getElementById("tasksLeft").innerHTML = oldTasksNum + 1;

  li.appendChild(t);
  li.classList.add('item');
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//filtering
function complete() {
  var itemList = document.getElementsByClassName("item");
  for (var x = 0; x<itemList.length; x++) {
      if (document.getElementsByClassName("item")[x].classList.contains('checked')){
        document.getElementsByClassName("item")[x].style.display="block";
    } else {
      document.getElementsByClassName("item")[x].style.display="none";
    }
  }
}

function active() {
  var itemList = document.getElementsByClassName("item");
    for (var x = 0; x<itemList.length; x++) {
      if (document.getElementsByClassName("item")[x].classList.contains('checked')){
        document.getElementsByClassName("item")[x].style.display="none";
    } else {
      document.getElementsByClassName("item")[x].style.display="block";
    }
  }
}

function showAll() {
  var itemList = document.getElementsByClassName("item");
  for (var x = 0; x<itemList.length; x++) {
    document.getElementsByClassName("item")[x].style.display="block";
  }
}

