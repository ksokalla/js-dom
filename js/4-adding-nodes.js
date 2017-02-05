'use strict';
//'use strict';
//
//var istniejacyWezel = document.getElementById('parFirst').children[2];
//
//console.log(istniejacyWezel);
//
//var newElement = document.createElement('p');
//
//var newElementContent = document.createTextNode('To jest nowy paragraf');
//
//newElement.appendChild(newElementContent);
//
//console.log(newElement);
//
//document.getElementById('parFirst').replaceChild(newElement, istniejacyWezel);

var usuwanieBR = document.getElementsByTagName('a');

console.log(usuwanieBR);

for (var i=0; i<usuwanieBR.length; i++ ) {
	console.log(usuwanieBR[i]);
	var br = document.createElement('br');
	usuwanieBR[i].parentNode.insertBefore(br, usuwanieBR[i].nextSibling);
	usuwanieBR[i].removeAttribute('class');
}

