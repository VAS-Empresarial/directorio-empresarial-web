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
		align-items: flex-start;
		height: 100%;
	}

	.icon-container {
		@media (max-width: 640px) {
			height: 42px;

			:global(.svelte-fa) {
				font-size: 1.25em;
			}
		}
		@media (min-width: 640px) {
			height: 3rem;

			:global(.svelte-fa) {
				font-size: 1.5em;
			}
		}
		background-color: rgba(var(--color-primary-rgb), var(--opacity-background));
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
		width: 100%;
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
			font-size: 13px;
		}
		color: rgba(0, 0, 0, .8);
	}
</style>
