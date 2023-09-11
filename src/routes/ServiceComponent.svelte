<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faArrowRight, fas } from '@fortawesome/free-solid-svg-icons';
	import type { HomepageService } from '$lib/types/Homepage';

	export let service: HomepageService;
</script>


<a
	href={'/' + service.slug}
	class="service"
>
	<div class="card">
		<div class="icon-container">
			<Fa class="icon" icon={fas[service.icon]} />
		</div>
		<h4>{service.pluralName}</h4>
		<div class="bottom-row">
			<div class="text-secondary">{service.businessCount} emprendimiento{service.businessCount > 1 ? 's' : ''}</div>
			<Fa class="icon" icon={faArrowRight} />
		</div>
	</div>
</a>

<style lang="scss">
	.card {
		@media (max-width: 640px) {
			padding: 0.75rem;
		}
		@media (min-width: 640px) {
			padding: 1rem;
		}
		background-color: white;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.icon-container {
		display: grid;
		place-items: center;
		@media (max-width: 640px) {
			width: 42px;
			height: 42px;
			:global(svg) {
				font-size: 1.25em;
			}
		}
		@media (min-width: 640px) {
			width: 48px;
			height: 48px;
			:global(svg) {
				font-size: 1.5em;
			}
		}
		background-color: rgba(var(--color-primary-rgb), var(--opacity-background));
		border-radius: 50%;
		margin-bottom: 0.5rem;

		:global(svg path) {
			fill: var(--color-primary);
		}
	}

	h4 {
		@media (max-width: 640px) {
			font-size: 14px;
		}
		@media (min-width: 640px) {
			font-size: 16px;
		}
		margin-bottom: 0.5rem;
		color: rgba(0, 0, 0, .8);
		flex: 1;
	}

	.bottom-row {
		display: flex;
		justify-content: space-between;
		align-items: center;

		:global(svg) {
			@media (max-width: 640px) {
				font-size: 1.25em;
			}
			@media (min-width: 640px) {
				font-size: 1.5em;
			}
		}

		:global(svg path) {
			fill: var(--color-accent);
		}
	}

	.text-secondary {
		@media (max-width: 640px) {
			font-size: 11px;
		}
		@media (min-width: 640px) {
			font-size: 11px;
		}
		color: rgba(0, 0, 0, .8);
	}
</style>
