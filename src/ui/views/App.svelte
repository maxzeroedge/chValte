<script>
	export let appName;
	export let appLogo;
</script>

<main>
	<section class="left-sidebar">
		<nav class="brand-header">
			<img class="brand-logo" src="{appLogo}" alt={appName} />
			<h3 class="brand-name">{appName}</h3>
		</nav>
	</section>
	<section class="content-container"></section>
	<section class="right-sidebar"></section>
</main>

<style type="text/scss">
	main {
		width: 90vw;
		height: 90vh;
		margin: 5vh auto;
		display: grid;
		box-shadow: 0 0 1px 1px lightgrey;
		border-radius: 2px;
		.left-sidebar {
			.brand-header {
				display: flex;
				align-items: center;
			}
			.brand-logo {
				width: 80px;
				height: auto;
			}
		}
	}
</style>