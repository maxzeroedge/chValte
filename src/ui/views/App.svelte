<script>
	import ChatContainer from '../components/ChatContainer.svelte'
	import ChatCard from '../components/ChatCard.svelte'
	export let appName;
	export let appLogo;
	let mainClassName = 'col-col-col';
	let hideLeftSidebar = false;
	let hideRightSidebar = false;

	const toggleThreeColumn = (e) => {
		switch (e.currentTarget.getAttribute('data-side')) {
			case 'left':
				hideLeftSidebar = !hideLeftSidebar
				break;
			case 'right':
				hideRightSidebar = !hideRightSidebar
				break;
			default:
				debugger
				break;
		}
		const words = ['one', 'two', 'three']
		mainClassName = `${hideLeftSidebar ? '' : 'col'}-col-${hideRightSidebar ? '' : 'col'}`;
	}
</script>

<main class={mainClassName}>
	<section class="left-sidebar {hideLeftSidebar ? 'hide' : ''}">
		<nav class="brand-header">
			<img class="brand-logo" src="{appLogo}" alt={appName} />
			<h3 class="brand-name">{appName}</h3>
		</nav>
		<div class="close-btn" data-side='left' on:click={toggleThreeColumn}>X</div>
		<ChatCard />
	</section>
	<section class="content-container">
		<ChatContainer />
	</section>
	<section class="right-sidebar {hideRightSidebar ? 'hide' : ''}">
		<div class="close-btn" data-side='right' on:click={toggleThreeColumn}>X</div>
	</section>
</main>

<style type="text/sass">
	.hide
		display: none
	main 
		width: 90vw
		height: 90vh
		margin: 5vh auto
		box-shadow: 0 0 1px 1px lightgrey
		border-radius: 2px
		display: grid
		&.col-col-col 
			grid-template-columns: 1fr 3fr 1fr
		&.-col- 
			grid-template-columns: 1fr
		&.col-col-
			grid-template-columns: 1fr 4fr
		&.-col-col 
			grid-template-columns: 4fr 1fr
		& > section
			border: solid thin lightgrey
			position: relative
		.close-btn
			position: absolute
			cursor: pointer
			top: 10px
			right: 10px
		.left-sidebar
			.brand-header 
				display: flex
				align-items: center
			.brand-logo 
				width: 50px
				height: auto
			overflow-y: auto
		.content-container
			overflow: auto
</style>