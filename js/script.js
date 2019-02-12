/* eslint-disable no-magic-numbers */
/* eslint-disable no-tabs */

'use strict';

var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];

var board = document.getElementById ('board');
var entry = '';
var test = '';

// Pętla do przejścia przez tablice
for (var i = 0; i < data.length; i++) {	

	// W 'entry' powstaje string, który wstrzykne do dokumentu. Jest rozbity na kilka sekwencji, dla lepszej czytelności kodu.
	entry = '<div class="box ';

	/* 
	 * Sprawdzam czy w kluczu 'categories' jest węcej niż jedna wartość. Jeśli tak, to wykonuję pętle, aby je wszystkie dodać.
	 * Zamiast pętli If, mógłbym zostawić samo for, też by działało. Jednak czytelniej (moim zdaniem) jest w takiej formie.  
	 */
	test += Object.values (data[i]['categories']);
	
	console.log (test);




	if (data[i]['categories'].length > 0) {
		for (var a = 0; a < data[i]['categories'].length; a++) {
			entry += data[i]['categories'][a] + ' ';
		}		
	}
	else {
		entry += data[i]['categories'] + ' ';
	}	
	entry += '" id="' + data[i]['id'] + '">';
	entry += '<header>' + data[i]['title'] + '</header>';
	entry += data[i]['content'] + '</div> ';

	board.innerHTML += (entry);	
} 

