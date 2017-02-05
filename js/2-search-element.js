'use strict';

var parFirst = document.getElementById('parFirst');
console.log(parFirst);

var linki = document.getElementsByClassName('link');
console.log(linki);

var tagi = document.getElementsByTagName('a');
console.log(tagi);

var linkiPoSelektorze = document.querySelectorAll('.superlink');
console.log(linkiPoSelektorze);

linkiPoSelektorze.forEach(function(linki, i){
	console.log(linki.innerHTML);
})

var linkiPoKlasie = document.querySelector('.superlink');
