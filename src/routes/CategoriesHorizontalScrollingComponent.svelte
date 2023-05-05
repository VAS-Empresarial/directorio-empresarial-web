<div class="categories-container">
	<slot />
</div>

<style lang="scss">
	:root {
		@media (max-width: 640px) {
		--categories-per-view: 2;
		}
		@media (min-width: 640px) {
		--categories-per-view: 5;
		}
		@media (min-width: 1024px) {
		--categories-per-view: 6;
		}
	}

	.categories-container {
		padding-block: 1rem;
		display: flex;
  		overflow-x: auto;
		gap: 0.75rem;
	}

	:global(.category-wrapper) {
		width: calc((100vw - 1.5rem*2 - 0.75rem*(var(--categories-per-view) - 1))/var(--categories-per-view));
		flex-shrink: 0;

		&:first-child {
			margin-left: 1.5rem;
		}

		&:last-child {
			margin-right: 1.5rem;
		}
	}
</style>
