<script lang="ts">
	import { fly } from 'svelte/transition';

	export let items: any[];
</script>

<div class="carousel touch-device">
	{#each items as item, index}
		<div
			class="item-wrapper shadow"
			in:fly={{ x: 200, duration: 500, delay: 50 * index }}
		>
			<slot {item} />
		</div>
	{/each}
</div>

<style lang="scss">
	.touch-device {
		@media (max-width: 640px) {
			--items-per-view: 2.1;
		}
		@media (min-width: 640px) {
			--items-per-view: 3.05;
		}
		@media (min-width: 824px) {
			--items-per-view: 4.05;
		}
		@media (min-width: 1024px) {
			--items-per-view: 5.05;
		}
	}

	.carousel {
		margin-inline: calc(-1 * var(--global-homepage-padding));
		display: flex;
  		overflow-x: auto;
		gap: var(--global-homepage-item-gap);
		padding-block: 1rem 2rem;

		// Hide scrollbar
		scrollbar-width: none; // For Firefox
		&::-webkit-scrollbar { // For Chrome, Safari and Opera
			display: none;
		}
	}

	:global(.item-wrapper) {
		width: calc((100% - var(--global-homepage-padding)*2 - var(--global-homepage-item-gap)*(var(--items-per-view) - 1))/var(--items-per-view));
		flex-shrink: 0;

		&:first-child {
			margin-left: var(--global-homepage-padding);
		}

		&:last-child {
			margin-right: var(--global-homepage-padding);
		}
	}
</style>
