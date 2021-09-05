import App from './views/App.svelte'

const appName = "ChValte"

const app = new App({
	target: document.body,
	props: {
		appName,
		appLogo: 'https://avatars.dicebear.com/api/gridy/dicebeards.svg'
	}
});

export default app;