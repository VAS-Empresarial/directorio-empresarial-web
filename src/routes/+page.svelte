<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper, { FreeMode } from 'swiper';
	import 'swiper/css';
	import type { FreeModeOptions } from 'swiper/types/modules/free-mode';
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
	import type { PageData } from './$types';
	import type { Category } from '../lib/interfaces/Category';
	import type { Business } from '../lib/interfaces/Business';
	import HeaderComponent from './HeaderComponent.svelte';
	import CategoryComponent from './CategoryComponent.svelte';
	import BusinessComponent from './BusinessComponent.svelte';

    export let data: PageData;

	let { categories, businesses } = data;
	let updatedCategories: Category[] = [];
	let swiper: Swiper;
	let isSwiperAtBeginning = true;
	let isSwiperAtEnd = false;
	let shouldShowSwiperButtons = true;
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
		updatedCategories = [
			allCategoriesItem,
			...categories
		];
		handleCategorySelection(allCategoriesItem);
		initSwiper();
	});

	function initSwiper() {
		swiper = new Swiper('.swiper', {
			modules: [FreeMode],
			spaceBetween: 16,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});

		swiper.on('slideChange', function () {
			isSwiperAtBeginning = swiper.isBeginning;
			isSwiperAtEnd = swiper.isEnd;
		});

		const isMouseDevice  = window.matchMedia("(pointer: fine)");
		let swiperPaddings: string;
		if (isMouseDevice.matches) {
			shouldShowSwiperButtons = true;
			swiperPaddings = '64px';
		} else {
			shouldShowSwiperButtons = false;
			swiperPaddings = '32px';
			swiper.params.slidesPerGroup = 1;
			const options: FreeModeOptions = {
				enabled: true,
				momentum: true,
				momentumBounce: true,
				momentumBounceRatio: 1,
				momentumRatio: 0.5,
				momentumVelocityRatio: 1,
			};
			swiper.params.freeMode = options;
		}
		document.documentElement.style.setProperty('--swiper-paddings', swiperPaddings);

		const smBreakpoint = window.matchMedia("(width < 640px)");
		const mdBreakpoint = window.matchMedia("(width < 1024px)");
		const updateSwiper = () => {
			let categoriesPerView: number;
			if (smBreakpoint.matches) {
				categoriesPerView = 2;
			} else if (mdBreakpoint.matches) {
				categoriesPerView = 4;
			} else {
				categoriesPerView = 6;
			}
			swiper.params.slidesPerView = categoriesPerView;
			swiper.params.slidesPerGroup = categoriesPerView;
		};
		smBreakpoint.addEventListener("change", updateSwiper);
		mdBreakpoint.addEventListener("change", updateSwiper);
		updateSwiper();
	}
</script>

<main>
	<HeaderComponent />

	<div class="categories">
		<div class="categories-container">
			<div class="swiper" class:buttons-visible={shouldShowSwiperButtons}>
				<div class="swiper-wrapper">
					{#each updatedCategories as category, index}
						<div
							class="swiper-slide"
							in:fly={{ x: 400, duration: 500, delay: 50 * index }}
						>
							<CategoryComponent
								{category}
								isSelected={selectedCategory === category}
								onClick={() => handleCategorySelection(category)}
							/>
						</div>
					{/each}
				</div>
				<div class="gradient gradient-left">
					<button
						type="button"
						class="swiper-button-prev swiper-button"
						class:hidden={isSwiperAtBeginning}
						on:click={() => swiper.slidePrev()}
					>
						<Fa icon={faChevronLeft} size="2x" />
					</button>
				</div>
				<div class="gradient gradient-right">
					<button
						type="button"
						class="swiper-button-next swiper-button"
						class:hidden={isSwiperAtEnd}
						on:click={() => swiper.slideNext()}
					>
						<Fa icon={faChevronRight} size="2x" />
					</button>
				</div>
			</div>
		</div>
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
		--swiper-paddings: 64px;
	}

	.categories {
		min-height: 82px;
		background-color: #0772A1;
		padding: 1rem;
		position: sticky;
		top: 0;
    	z-index: 1;
	}

	.categories-container {
		max-width: var(--container-width);
		margin-inline: auto;
		overflow: hidden;
	}

	.swiper {
		max-width: calc(100% - var(--swiper-paddings)*2);
		margin-inline: auto;
		position: relative;
		overflow: visible;
	}

	.gradient {
		width: var(--swiper-paddings);
		height: 100%;
		position: absolute;
		top: 0;
		z-index: 1;
		display: flex;
		align-items: center;
	}

	.gradient-left {
		background: linear-gradient(to left, transparent, #0772A1);
		left: calc(var(--swiper-paddings) * -1);
		justify-content: left;
	}

	.gradient-right {
		background: linear-gradient(to right, transparent, #0772A1);
		right: calc(var(--swiper-paddings) * -1);
		justify-content: right;
	}

	.swiper-button {
		display: none;
		width: 3rem;
		height: 3rem;
		color: white;
		background-color: transparent;
		border-color: transparent;
		border-radius: 50%;
		padding: 0;
		cursor: pointer;

		// Make the icon thicker
		:global(svg path) {
			stroke: white;
			stroke-width: 1rem;
		}

		&:hover {
			background-color: rgba(255,255,255,0.1);
			color: white;
			transition: background-color 150ms ease;
		}

		&:focus {
			outline: 0;
		}
	}

	.swiper.buttons-visible .swiper-button {
		display: block;
	}

	.businesses {
		max-width: var(--container-width);
		margin-inline: auto;
		padding: 1rem;
		display: grid;
		gap: 1rem;
		@media (max-width: 640px) {
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}
		@media (min-width: 640px) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		@media (min-width: 1024px) {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
</style>
