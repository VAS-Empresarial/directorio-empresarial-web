<script lang="ts">
	import type { PageData } from './$types';
	import WelcomeBox from './WelcomeBox.svelte';
	import CarouselComponent from '../components/carousel/CarouselComponent.svelte';
	import ServiceComponent from './ServiceComponent.svelte';

    export let data: PageData;

	let { categories } = data;
</script>

<main class="light-gray-background">
	<div class="container">
		<WelcomeBox />
	</div>

	{#each categories as category}
		<section class="container">
			<h2>{category.name}</h2>
			<div class="carousel-container">
				<CarouselComponent items={category.services} let:item={service}>
					<ServiceComponent {service} />
				</CarouselComponent>
			</div>
		</section>
	{/each}
</main>

<style lang="scss">
	:global(.welcome-box) {
		@media (max-width: 640px) {
			margin-bottom: 1.5rem;
		}
		@media (min-width: 640px) {
			margin-bottom: 2rem;
		}
	}

	.carousel-container {
		@media (max-width: 640px) {
			min-height: 171px;
		}
		@media (min-width: 640px) {
			min-height: 192px;
		}
	}
</style>
