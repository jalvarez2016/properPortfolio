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

//changing the date to actually be the date


$(document).ready(function() {
  var interval = setInterval(function() {
        var momentNow = moment();
        $('#date-part').html(momentNow.format('YYYY MMMM DD') + ' '
                            + momentNow.format('dddd')
                             .substring(0,3).toUpperCase());
        $('#time-part').html(momentNow.format('A hh:mm:ss'));
	}, 1000);
});


//the following functions could be condensed into one that takes in classes instead of ids and uses the this component

function showPopup(name){
	//console.log(document.getElementById(name).style);
	var popName = document.getElementById(name)
	if( popName.style.display === "none" ){
		console.log("block");
		popName.style.display = "block";
		popName.style.zIndex = 1;
	} else {
		console.log("none")
		popName.style.display ="none";
	}
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
