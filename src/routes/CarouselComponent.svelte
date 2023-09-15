<div class="carousel-container">
	<slot />
</div>

<style lang="scss">
	:root {
		@media (max-width: 640px) {
			--categories-per-view: 2.1;
		}
		@media (min-width: 640px) {
			--categories-per-view: 3.05;
		}
		@media (min-width: 824px) {
			--categories-per-view: 4.05;
		}
		@media (min-width: 1024px) {
			--categories-per-view: 5.05;
		}
	}

	.carousel-container {
		margin-inline: calc(-1*var(--homepage-padding));
		display: flex;
  		overflow-x: auto;
		gap: var(--homepage-item-gap);
		padding-block: 1rem 2rem;

		// Hide scrollbar
		scrollbar-width: none; // For Firefox
		&::-webkit-scrollbar { // For Chrome, Safari and Opera
			display: none;
		}
	}

	:global(.item-wrapper) {
		width: calc((100% - var(--homepage-padding)*2 - var(--homepage-item-gap)*(var(--categories-per-view) - 1))/var(--categories-per-view));
		flex-shrink: 0;

		&:first-child {
			margin-left: var(--homepage-padding);
		}

		&:last-child {
			margin-right: var(--homepage-padding);
		}
	}
</style>
