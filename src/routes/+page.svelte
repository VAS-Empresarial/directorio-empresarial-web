<script lang="ts">
	import { SvelteComponent, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import type { PageData } from './$types';
	import type { Category } from '$lib/interfaces/Category';
	import type { Business } from '$lib/interfaces/Business';
	import { selectedCategory } from '$lib/stores';
	import { allCategoriesItem } from '$lib/constants';
	import HeaderComponent from './HeaderComponent.svelte';
	import CategoriesDropdownComponent from './CategoriesDropdownComponent.svelte';
	import SwiperContainerComponent from './SwiperContainerComponent.svelte';
	import CategoriesHorizontalScrollingComponent from './CategoriesHorizontalScrollingComponent.svelte';
	import CategoryComponent from './CategoryComponent.svelte';
	import BusinessComponent from './BusinessComponent.svelte';

    export let data: PageData;

	let { categories, businesses } = data;
	let isMouseDevice: boolean;
	let isSmallDevice: boolean;
	let updatedCategories: Category[] = [];
	let filteredBusinesses: Business[] = [];
	let categoriesContainerComponent: typeof SvelteComponent;

	onMount(() => {
		const mouseDeviceMedia  = window.matchMedia("(pointer: fine)");
		isMouseDevice = mouseDeviceMedia.matches;

		const smBreakpoint = window.matchMedia("(width < 640px)");
		const onDeviceSizeChange = () => {
			isSmallDevice = smBreakpoint.matches;
		};
		smBreakpoint.addEventListener("change", onDeviceSizeChange);
		onDeviceSizeChange(); // Set the initial value

		updatedCategories = [
			allCategoriesItem,
			...categories
		];

		$selectedCategory = allCategoriesItem;
	});

	selectedCategory.subscribe(category => {
		// Exit if this is the initial run before the real Category selection
		if (updatedCategories.length === 0) {
			return;
		}

		if (category === allCategoriesItem) {
			filteredBusinesses = [...businesses];
			return;
		}

		filteredBusinesses = businesses.filter(business => business.service.category.id === category.id);
	});

	$: if (isSmallDevice) {
		categoriesContainerComponent = CategoriesDropdownComponent;
	} else if (isMouseDevice) {
		categoriesContainerComponent = SwiperContainerComponent;
	} else {
		categoriesContainerComponent = CategoriesHorizontalScrollingComponent;
	}
</script>

<main>
	<HeaderComponent />

	<div class="categories">
		{#if isSmallDevice}
			<CategoriesDropdownComponent categories={updatedCategories} />
		{:else}
			<svelte:component this={categoriesContainerComponent}>
				{#each updatedCategories as category, index}
					<div
						class={isMouseDevice ? 'swiper-slide' : 'category-wrapper'}
						in:fly={{ x: 400, duration: 500, delay: 50 * index }}
					>
						<CategoryComponent
							{category}
							isSelected={$selectedCategory === category}
							onClick={() => $selectedCategory = category}
						/>
					</div>
				{/each}
			</svelte:component>
		{/if}
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

	.categories {
		min-height: var(--category-min-height);
		background-color: var(--color-primary);
		position: sticky;
		top: 0;
    	z-index: 1;
	}

	.businesses {
		max-width: var(--container-width);
		margin-inline: auto;
		padding: var(--section-padding);
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(var(--business-columns), minmax(0, 1fr));
	}
</style>
