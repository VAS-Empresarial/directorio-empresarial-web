<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import type { PageData } from './$types';
	import type { Category } from '../lib/interfaces/Category';
	import type { Business } from '../lib/interfaces/Business';
	import HeaderComponent from './HeaderComponent.svelte';
	import SwiperContainerComponent from './SwiperContainerComponent.svelte';
	import CategoriesHorizontalScrollingComponent from './CategoriesHorizontalScrollingComponent.svelte';
	import CategoryComponent from './CategoryComponent.svelte';
	import BusinessComponent from './BusinessComponent.svelte';

    export let data: PageData;

	let { categories, businesses } = data;
	let isMouseDevice: boolean;
	// `isSmallDevice` is for future implementation of the conditional Categories dropdown on small devices
	let isSmallDevice = false;
	let updatedCategories: Category[] = [];
	let selectedCategory: Category;
	let filteredBusinesses: Business[] = [];

	const allCategoriesItem: Category = {
		id: '',
		name: 'Todos',
		icon: 'faStar',
		displayOrder: 0,
	}

	function handleCategorySelection(category: Category) {
		selectedCategory = category;

		if (category === allCategoriesItem) {
			filteredBusinesses = [...businesses];
			return;
		}

		filteredBusinesses = businesses.filter(business => business.service.category.id === category.id);
	}

	onMount(() => {
		const mouseDeviceMedia  = window.matchMedia("(pointer: fine)");
		isMouseDevice = mouseDeviceMedia.matches;

		const smBreakpoint = window.matchMedia("(width < 640px)");
		const onDeviceSizeChange = () => {
			isSmallDevice = smBreakpoint.matches;
		};
		smBreakpoint.addEventListener("change", onDeviceSizeChange);

		updatedCategories = [
			allCategoriesItem,
			...categories
		];
		handleCategorySelection(allCategoriesItem);
	});
</script>

<main>
	<HeaderComponent />

	<div class="categories">
		<svelte:component this={isMouseDevice ? SwiperContainerComponent : CategoriesHorizontalScrollingComponent}>
			{#each updatedCategories as category, index}
				<div
					class={isMouseDevice ? 'swiper-slide' : 'category-wrapper'}
					in:fly={{ x: 400, duration: 500, delay: 50 * index }}
				>
					<CategoryComponent
						{category}
						isSelected={selectedCategory === category}
						onClick={() => handleCategorySelection(category)}
					/>
				</div>
			{/each}
		</svelte:component>
	</div>

	<div class="businesses">
		{#each filteredBusinesses as business (business)}
			<div
				in:fly={{ x: 200, duration: 500 }}
				out:fly={{ x: 200, duration: 500 }}
				animate:flip={{ duration: 500 }}
			>
				<BusinessComponent {business} />
			</div>
		{/each}
	</div>
</main>

<style lang="scss">
	:root {
		--container-width: 1280px;
		@media (max-width: 640px) {
		--business-columns: 1;
		}
		@media (min-width: 640px) {
		--business-columns: 2;
		}
		@media (min-width: 1024px) {
		--business-columns: 3;
		}
	}

	.categories {
		min-height: 114px;
		background-color: var(--color-primary);
		position: sticky;
		top: 0;
    	z-index: 1;
	}

	.businesses {
		max-width: var(--container-width);
		margin-inline: auto;
		padding: 1.5rem;
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(var(--business-columns), minmax(0, 1fr));
	}
</style>
