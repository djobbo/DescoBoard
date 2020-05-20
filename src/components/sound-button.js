class SoundButton extends HTMLElement {
	constructor() {
		super();
		this.root = this.attachShadow({ mode: 'open' });
	}
	set sound(sound) {
		this.root.innerHTML = `
            <style>
                * {
                    font-family: 'Comfortaa', sans-serif;
                }
                .container {
                    border: 1px solid gray;
                    background-color: white;
                    display:flex;
                    align-items: center;
                    padding: 0;
                    width: 100%;
                    cursor: pointer;
                    border-radius: 0.25rem;
                    overflow: hidden;
                }
                .container:hover {
                    background-color: #eee;
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
                    font-size: 1.25rem
                }
                .info p {
                    margin: 0 0 0.5rem 0;
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
