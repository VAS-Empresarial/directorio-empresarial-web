<script lang="ts">
	import type { PageData } from "./$types";
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faAngleRight, faHouse, fas } from '@fortawesome/free-solid-svg-icons';
	import { Breadcrumbs } from '@svelteuidev/core';
	import BusinessComponent from "../BusinessComponent.svelte";

	export let data: PageData;

	const { service, businesses } = data;

</script>

<main class="light-gray-background">
	<div class="breadcrumbs container">
		<Breadcrumbs size="md" separator="">
			<Breadcrumbs.Item href="/">
				<Fa class="icon" icon={faHouse} />
			</Breadcrumbs.Item>
			<Fa class="separator" icon={faAngleRight} fw />
			<Breadcrumbs.Item>
				{service.category.name}
			</Breadcrumbs.Item>
			<Fa class="separator" icon={faAngleRight} fw />
			<Breadcrumbs.Item active={true}>
				{service.pluralName}
			</Breadcrumbs.Item>
		</Breadcrumbs>
	</div>

	<section class="businesses container">
		{#each businesses as business (business)}
			<div
				in:fly={{ x: 200, duration: 500 }}
				out:fly={{ x: 200, duration: 500 }}
				animate:flip={{ duration: 500 }}
			>
				<BusinessComponent {business} />
			</div>
		{/each}
	</section>
</main>

<style lang="scss">
	.breadcrumbs {
		margin-top: 1rem;
	}

	.businesses {
		max-width: var(--container-width);
		margin-inline: auto;
		padding: var(--section-padding);
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(var(--business-columns), minmax(0, 1fr));
	}

	:global(.separator) {
		margin: 4px;
		margin-left: -8px;
	}
	:global(.separator path) {
		fill: rgba(0, 0, 0, 0.8);
	}
</style>
