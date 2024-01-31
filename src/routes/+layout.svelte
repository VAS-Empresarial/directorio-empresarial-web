<script lang="ts">
	import HeaderComponent from "./HeaderComponent.svelte";
	import FooterComponent from "./FooterComponent.svelte";
	import SiteConditionsModal from "./SiteConditionsModal.svelte";
	import { navigating, page } from '$app/stores';
	import { hasNavigationHistory } from "$lib/stores";

	const unsubscribeNavigating = navigating.subscribe((navigation) => {
		if (navigation) {
			$hasNavigationHistory = true;
			// That's it. Once we know there is navigation history we can unsubscribe.
			unsubscribeNavigating();
		}
	});
</script>

<div class="global-layout" class:on-service-page={$page.route.id === '/[serviceSlug]'}>
	<HeaderComponent />

	<slot />

	<FooterComponent />
</div>

<SiteConditionsModal />

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
