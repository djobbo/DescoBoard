class SoundButton extends HTMLElement {
	constructor() {
		super();
		this.root = this.attachShadow({ mode: 'open' });
	}
	set sound(sound) {
		this.root.innerHTML = `
            <style>
                .container {
                    display:flex;
                    align-items: center;
                    border: none;
                    padding: 0.5rem 1rem;
                    width: 100%;
                    cursor: pointer;
                }
                img {
                    width: 4rem;
                    height: 4rem;
                    margin-right: 1rem;
                }
                .info {
                    text-align: left;
                }
                .info h2 {
                    margin: 0;
                    font-size: 1.5rem
                }
                .info p {
                    margin: 0 0 0.25rem 0;
                }
            </style>
            <button class="container" onclick="this.getRootNode().host.playSound('${sound.sound}')">
                <img src="${sound.thumb}" alt="img"/>
                <div class="info">
                    <p>${sound.author}</p>
                    <h2>${sound.title}</h2>
                </div>
            </button>
        `;
	}

	playSound(uri) {
		var audio = new Audio(uri);
		audio.play();
	}
}

customElements.define('sound-button', SoundButton);
