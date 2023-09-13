<script lang="ts">
	import HeaderComponent from "./HeaderComponent.svelte";
</script>

<div class="global-layout">
	<HeaderComponent />

	<slot />

	<footer></footer>
</div>
