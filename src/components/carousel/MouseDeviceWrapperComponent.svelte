<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Swiper from 'swiper';
	import 'swiper/css';
	import Fa from 'svelte-fa';
	import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

	export let items: any[];

	let swiper: Swiper;
	let swiperElement: HTMLElement;
	let isSwiperAtBeginning = true;
	let isSwiperAtEnd = false;

	onMount(() => {
		swiper = new Swiper(swiperElement, {
			breakpoints: {
				// when window width is >= 0px
				0: {
					slidesPerView: 4,
					slidesPerGroup: 4,
					spaceBetween: 12,
				},
				1160: {
					slidesPerView: 5,
					slidesPerGroup: 5,
					spaceBetween: 12,
				},
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});

		swiper.on('slideChange', function () {
			isSwiperAtBeginning = swiper.isBeginning;
			isSwiperAtEnd = swiper.isEnd;
		});
	});
</script>

<div class="carousel mouse-device">
	<div class="swiper" bind:this={swiperElement}>
		<div class="swiper-wrapper">
			{#each items as item, index}
				<div
					class="swiper-slide shadow"
					in:fly={{ x: 200, duration: 500, delay: 50 * index }}
				>
					<slot {item} />
				</div>
			{/each}
		</div>
		<div class="gradient gradient-left">
			<button
				type="button"
				title="Deslizar a la izquierda"
				class="swiper-button-prev swiper-button shadow"
				class:hidden={isSwiperAtBeginning}
				on:click={() => swiper.slidePrev()}
			>
				<Fa icon={faChevronLeft} size="2x" />
			</button>
		</div>
		<div class="gradient gradient-right">
			<button
				type="button"
				title="Deslizar a la derecha"
				class="swiper-button-next swiper-button shadow"
				class:hidden={isSwiperAtEnd || items.length <= 5}
				on:click={() => swiper.slideNext()}
			>
				<Fa icon={faChevronRight} size="2x" />
			</button>
		</div>
	</div>
</div>

<style lang="scss">
	.mouse-device {
		--swiper-paddings: 214px; // The max size of a service card
		@media (min-width: 0px) {
			--items-per-view: 4;
		}
		@media (min-width: 1160px) {
			--items-per-view: 5;
		}
	}

	.carousel {
		width: calc(100% + var(--homepage-item-gap)*2 + var(--swiper-paddings)*2);
		margin-inline: calc(-1*(var(--homepage-item-gap) + var(--swiper-paddings)));
		padding-block: 1rem;
		overflow: hidden;
	}

	.swiper {
		max-width: calc(100% - var(--homepage-item-gap)*2 - var(--swiper-paddings)*2);
		margin-inline: auto;
		position: relative;
		overflow: visible;
	}

	.swiper-slide {
		height: auto;
		// This calculated width and margin-right is a UI fix to prevent the slides taking 100% width on transition start
		width: calc((100% - var(--homepage-item-gap)*(var(--items-per-view) - 1))/var(--items-per-view));
		margin-right: var(--homepage-item-gap);
		transition: all 150ms ease;

		&:hover {
			box-shadow: 0 12px 18px -4px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
			transform: translateY(-0.25rem);
			transition: all 150ms ease;
		}
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
		background: linear-gradient(to left, rgba(var(--color-light-gray-rgb), 0.5), var(--color-light-gray));
		left: calc(-1*(var(--homepage-item-gap)));
		transform: translateX(-100%);
		justify-content: right;
		padding-right: .5rem;
	}

	.gradient-right {
		background: linear-gradient(to right, rgba(var(--color-light-gray-rgb), 0.5), var(--color-light-gray));
		right: calc(-1*(var(--homepage-item-gap)));
		transform: translateX(100%);
		justify-content: left;
		padding-left: .5rem;
	}

	.swiper-button {
		width: 3rem;
		height: 3rem;
		color: var(--color-accent);
		background-color: white;
		border-color: transparent;
		border-radius: 50%;
		padding: 0;
		cursor: pointer;

		// Make the icon thicker
		:global(svg path) {
			stroke: var(--color-accent);
			stroke-width: 1rem;
		}

		&:hover {
			background-color: var(--color-light-gray-light);
		}

		&:focus {
			outline: 0;
		}
	}

	// Remove the shadow from items outside of the current slidesPerView
	:global(.swiper-slide-prev),
	:global(.swiper-slide-active + * + * + * + * + *) {
		box-shadow: none;
	}
</style>
