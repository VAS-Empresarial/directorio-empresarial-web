<script lang="ts">
	import HeaderComponent from "./HeaderComponent.svelte";
	import FooterComponent from "./FooterComponent.svelte";
</script>

<div class="global-layout">
	<HeaderComponent />

	<slot />

	<FooterComponent />
</div>

<style lang="scss">
	.global-layout {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	:global(main) {
		flex: 1;
	}
</style>
