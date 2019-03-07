console.log((new Date()).getFullYear());
console.log(new Date());
console.log("hello world");
var colors = ["white", "blue", "yellow"];

var white = document.getElementById('white');
var yellow = document.getElementById('yellow');
var blue = document.getElementById('blue');

function changeColor(x){
		document.body.style.color = colors[x];
		document.body.style.backgroundColor = colors[x];
		if( colors[x] === "black"){
			var headerColor = document.getElementsByClassName("popup-header");
			console.log(headerColor);
			var sub_titleColor = document.getElementsByClassName("sub-title").style;
			console.log(sub_titleColor);
			//document.getElementsByClassName("popup-header").style.backgroundColor = "white";
		}
}



//the following functions could be condensed into one that takes in classes instead of ids and uses the this component

function showProjects(){
	console.log("hi");
	console.log(document.getElementById("projects"));
	if(document.getElementById("projects").style.display === "block"){
		console.log("block");
		document.getElementById("projects").style.display = "none"
	} else {
		console.log("none");
		document.getElementById("projects").style.display = "block";
	};
}

function showContacts(){
	console.log("hi");
	console.log(document.getElementById("contacts"));
	if(document.getElementById("contacts").style.display === "block"){
		console.log("block");
		document.getElementById("contacts").style.display = "none"
	} else {
		console.log("none");
		document.getElementById("contacts").style.display = "block";
	};
}

function showDrawings(){
	console.log("hi");
	console.log(document.getElementById("drawings"));
	if(document.getElementById("drawings").style.display === "block"){
		console.log("block");
		document.getElementById("drawings").style.display = "none"
	} else {
		console.log("none");
		document.getElementById("drawings").style.display = "block";
	};
}

function showAbout(){
	console.log("hi");
	console.log(document.getElementById("about"));
	if(document.getElementById("about").style.display === "block"){
		console.log("block");
		document.getElementById("about").style.display = "none"
	} else {
		console.log("none");
		document.getElementById("about").style.display = "block";
	};
}

function showEducation(){
	console.log("hi");
	console.log(document.getElementById("education"));
	if(document.getElementById("education").style.display === "block"){
		console.log("block");
		document.getElementById("education").style.display = "none"
	} else {
		console.log("none");
		document.getElementById("education").style.display = "block";
	};
}

dragElement(document.getElementById("projects"));
dragElement(document.getElementById("contacts"));
dragElement(document.getElementById("drawings"));
dragElement(document.getElementById("about"));
dragElement(document.getElementById("education"));
  

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}




