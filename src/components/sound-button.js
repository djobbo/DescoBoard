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
                a, a:visited {
                    text-decoration: none;
                    color: white;
                }
                .container {
                    display: flex;
                    border: 1px solid gray;
                    background-color: white;
                    border-radius: 0.25rem;
                    overflow: hidden;
                }
                .container button {
                    display:flex;
                    align-items: center;
                    padding: 0;
                    width: 100%;
                    cursor: pointer;
                    border: none;
                    background-color: transparent;
                }
                .container button:hover {
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
                .download {
                    width: 4rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #70b77e;
                }
                .download:hover {
                    background-color: #f55d3e;
                }
            </style>
            <div class="container">
                <button onclick="this.getRootNode().host.playSound('src/sounds/${sound.title}.mp3')">
                    <img src="${sound.thumb}" alt="img"/>
                    <div class="info">
                        <p>${sound.author}</p>
                        <h2>${sound.title}</h2>
                    </div>
                </button>
                    <a class="download" href="src/sounds/${sound.title}.mp3" download="${sound.author} - ${sound.title}">↓</a>
            </div>
        `;
	}

	playSound(uri) {
		var audio = new Audio(uri);
		audio.play();
	}
}

customElements.define('sound-button', SoundButton);
