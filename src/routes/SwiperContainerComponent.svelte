<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/css';
	import Fa from 'svelte-fa';
	import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

	let swiper: Swiper;
	let isSwiperAtBeginning = true;
	let isSwiperAtEnd = false;

	onMount(() => {
		swiper = new Swiper('.swiper', {
			spaceBetween: 12,
			slidesPerView: 6,
			slidesPerGroup: 6,
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

<div class="categories-container">
	<div class="swiper">
		<div class="swiper-wrapper">
			<slot />
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

<style lang="scss">
	:root {
		--swiper-paddings: 5.5rem;
	}

	.categories-container {
		max-width: var(--container-width);
		margin-inline: auto;
		padding-block: 1rem;
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
		padding-left: 1.5rem;
	}

	.gradient-right {
		background: linear-gradient(to right, transparent, #0772A1);
		right: calc(var(--swiper-paddings) * -1);
		justify-content: right;
		padding-right: 1.5rem;
	}

	.swiper-button {
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
</style>
