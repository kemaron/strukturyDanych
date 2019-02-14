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

var newDiv = null;

// W opariu o tablicę data, tworzę divy, przy wykorzystaniu  
for (var i = 0; i < data.length; i++) {	

	newDiv = document.createElement('div');
	newDiv.id = data[i]['id'];	
	newDiv.innerHTML = '<header>' + data[i]['title'] + '</header>' + data[i]['content'];
	newDiv.className = (data[i]['categories'].join(' '));
	newDiv.classList.add ('box');

	// Wstrzyknięcie diva do board
	document.querySelector('.board').appendChild (newDiv); 
} 

