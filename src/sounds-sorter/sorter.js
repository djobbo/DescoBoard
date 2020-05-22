const fs = require('fs');
const path = require('path');
const soundsFolder = path.join(__dirname, '../sounds');
const outputFile = path.join(__dirname, '../sounds.js');

const files = fs.readdirSync(soundsFolder);

const sounds = files.map((file) => {
	const title = file.split('.')[0];
	return {
		title,
		thumb: 'src/imgs/Calf.png',
		aliases: [''],
		author: 'ALFy',
	};
});

const fileToSave = `export const sounds = ${JSON.stringify(sounds)}`;
fs.writeFileSync(outputFile, fileToSave);

console.log('DONE');
