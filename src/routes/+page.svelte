<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import WelcomeBox from './WelcomeBox.svelte';
	import CarouselComponent from './CarouselComponent.svelte';
	import ServiceComponent from './ServiceComponent.svelte';

    export let data: PageData;

	let { categories } = data;

</script>

<main>
	<div class="container">
		<WelcomeBox />
	</div>

	{#each categories as category}
		<section class="container">
			<h2>{category.name}</h2>
			<CarouselComponent>
				{#each category.services as service, index}
					<div
						class="item-wrapper shadow"
						in:fly={{ x: 400, duration: 500, delay: 50 * index }}
					>
						<ServiceComponent {service} />
					</div>
				{/each}
			</CarouselComponent>
		</section>
	{/each}
</main>

<style lang="scss">
	:root {
		@media (max-width: 640px) {
			--category-min-height: 70px;
			--business-columns: 1;
		}
		@media (min-width: 640px) {
			--category-min-height: 114px;
			--business-columns: 2;
		}
		@media (min-width: 1024px) {
			--category-min-height: 114px;
			--business-columns: 3;
		}
	}

	main {
		background-color: var(--color-light-gray);
	}

	:global(.welcome-box) {
		@media (max-width: 640px) {
			margin-bottom: 1.5rem;
		}
		@media (min-width: 640px) {
			margin-bottom: 2rem;
		}
	}

	.item-wrapper {
		transition: all 150ms ease;

		&:hover {
			box-shadow: 0 12px 18px -4px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
			transform: translateY(-0.25rem);
			transition: all 150ms ease;
		}
	}
</style>
