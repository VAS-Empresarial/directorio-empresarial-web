<script lang="ts">
	import HeaderComponent from "./HeaderComponent.svelte";
	import FooterComponent from "./FooterComponent.svelte";
	import { page } from '$app/stores';
</script>

<div class="global-layout" class:on-service-page={$page.route.id === '/[serviceSlug]'}>
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
