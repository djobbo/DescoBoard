import './components/sound-button.js';
import { sounds } from './sounds.js';

window.addEventListener('load', () => {
	const container = document.querySelector('#container');

	sounds.forEach((sound) => {
		const el = document.createElement('sound-button');
		el.sound = sound;
		container.append(el);
	});
});
