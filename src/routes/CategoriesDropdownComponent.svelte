<script lang="ts">
	import { Modal } from '@svelteuidev/core';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { fas, faAngleDown } from '@fortawesome/free-solid-svg-icons';
	import { selectedCategory } from '$lib/stores';
	import type { Category } from '$lib/types/Category';

	export let categories: Category[];

	let isModalOpen = false;

	function closeModal() {
		isModalOpen = false
	}
</script>

<div class="dropdown-container">
	<label class="dropdown-label" for="category">Categoría:</label>
	<button
		type="button"
		id="category"
		class="card"
		on:click={() => isModalOpen = true}
	>
		<div>
			<Fa class="icon" icon={fas[$selectedCategory.icon]} size="lg" fw />
			<h4>{$selectedCategory.name}</h4>
		</div>
		<Fa icon={faAngleDown} color="gray" />
	</button>
	<Modal
		target={'body'}
		size="calc(100vw - 2rem)"
		withCloseButton={false}
		opened={isModalOpen}
		closeOnClickOutside={true}
		closeOnEscape
		on:close={closeModal}
	>
		<div class="categories-container">
			{#each categories as category, index}
				<label
					class="category-option"
					class:selected={category === $selectedCategory}
				>
					<input
						type="radio"
						name="options"
						value={category}
						bind:group={$selectedCategory}
						on:change={closeModal}
					/>
					<Fa icon={fas[category.icon]} size="lg" fw />
					<span>{category.name}</span>
				</label>
			{/each}
		</div>
	</Modal>
</div>

<style lang="scss">
	// Remove the SvelteUI padding-right when the modal is open
	:global(body) {
		--removed-scroll-width: 0 !important;
	}

	.dropdown-container {
		padding: .75rem var(--section-padding);
		display: flex;
		align-items: baseline;
		gap: 1rem;
	}

	.dropdown-label {
		color: white;
		font-weight: 600;
		margin-bottom: .5rem;
	}

	button {
		width: 100%;
		border: none;
		padding: .75rem 1rem;
		font-size: 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		h4 {
			display: inline-block;
		}

		:global(.icon) {
			margin-right: .25rem;
		}

		:global(.icon path) {
			fill: var(--color-accent);
		}

		&:focus {
			border: none;
			outline: var(--border-width) solid var(--color-primary);
		}

		&:active {
			background-color: rgba(255, 255, 255, 0.8);
		}
	}

	.categories-container {
		display: flex;
		flex-direction: column;
		gap: .75rem;
	}

	.category-option {
		border: var(--border-width) solid var(--border-color);
		border-radius: var(--border-radius);
		color: rgb(0 0 0 / 0.9);
		padding: .5rem;
		display: flex;
		align-items: center;
		gap: .5rem;

		:global(svg path) {
			fill: rgb(0 0 0 / 0.8);
		}

		&.selected {
			border-color: var(--color-primary);
			accent-color: var(--color-primary);
			color: black;
			font-weight: 500;

			:global(svg path) {
				fill: var(--color-accent);
			}
		}
	}

	// Prevent page scrolling when the modal is open
	:global(html :has(.svelteui-Modal-inner)) {
		height: 100vh;
		overflow-y: hidden;
	}
</style>
