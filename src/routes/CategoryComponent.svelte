<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { fas } from '@fortawesome/free-solid-svg-icons';
	import type { Category } from '$lib/interfaces/Category';

	export let category: Category;
	export let isSelected: boolean = false;
	export let onClick: () => void;
</script>


<button
	type="button"
	class="category card"
	class:selected={isSelected}
	on:click={onClick}
>
	<div class="icon-container">
		<Fa icon={fas[category.icon]} size="2x" color="white" />
	</div>
	<h4>{category.name}</h4>
</button>

<style lang="scss">

	.category {
		width: 100%;
		padding: 1rem 0;
		border: none;
		text-transform: uppercase;
		cursor: pointer;

		&:hover:not(.selected) {
			background-color: rgba(255,255,255,0.3);
			color: white;
			transition: background-color 150ms ease;
		}

		&.selected {
			cursor: default;

			:global(svg path) {
				fill: #D8AA2B;
			}
		}

		&:not(.selected) {
			background-color: rgba(255,255,255,0.2);
			color: white;
		}
	}

	.icon-container {
		margin-bottom: 0.5rem;
	}
</style>
