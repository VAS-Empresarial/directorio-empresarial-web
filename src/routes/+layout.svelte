<script lang="ts">
	import HeaderComponent from "./HeaderComponent.svelte";
	import FooterComponent from "./FooterComponent.svelte";
</script>

<div class="global-layout">
	<HeaderComponent />

	<slot />

	<FooterComponent />
</div>
