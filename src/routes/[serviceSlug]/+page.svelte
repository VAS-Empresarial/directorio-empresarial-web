<script lang="ts">
	import { setContext } from "svelte";
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import type { PageData } from "./$types";
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
	import BusinessComponent from "../BusinessComponent.svelte";

	export let data: PageData;

	const { service, businesses } = data;
	setContext('service', service);
</script>

<main class="light-gray-background">
	<div class="title-bar container">
		<a
			class="icon-container"
			href="/"
		>
			<Fa class="icon" icon={faArrowLeft} />
		</a>
		<h2>{service.pluralName}</h2>
	</div>

	<section class="businesses container">
		{#each businesses as business (business)}
			<div
				in:fly={{ x: 200, duration: 500 }}
				animate:flip={{ duration: 500 }}
			>
				<BusinessComponent {business} />
			</div>
		{/each}
	</section>
</main>

<style lang="scss">
	:root {
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

	.title-bar {
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;

		.icon-container {
			:global(svg path) {
				fill: var(--color-accent);
			}

			&:hover {
				background-color: rgba(255, 255, 255, 0.5);
			}
		}
	}

	.businesses {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(var(--business-columns), minmax(0, 1fr));
	}
</style>
