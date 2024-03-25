<script lang="ts">
	import { page } from '$app/stores';
	import { Burger, Collapse } from '@svelteuidev/core';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

	let isNavMenuOpen = false;
</script>

<header class="shadow">
	<div class="container">
		<a
			href="/"
			on:click={() => (isNavMenuOpen = false)}
		>
			<img
				class="logo"
				src="/images/Logo Directorio Empresarial.png"
				alt="Logo Directorio Empresarial"
			>
		</a>
		<Burger
			class="burger-button"
			title="Menú de navegación"
			opened={isNavMenuOpen}
			on:click={() => (isNavMenuOpen = !isNavMenuOpen)}
		/>
		<nav class="nav-bar">
			<a
				href="/sobre-nosotros"
				class:active={$page.route.id === '/sobre-nosotros'}
			>
				Sobre nosotros
			</a>
			<a
				href="/contacto"
				class:active={$page.route.id === '/contacto'}
			>
				Contacto
			</a>
		</nav>
	</div>
	<Collapse open={isNavMenuOpen} class="toggler">
		<nav class="nav-menu">
			<a
				href="/sobre-nosotros"
				on:click={() => (isNavMenuOpen = false)}
			>
				<div
					class="nav-item container"
					class:active={$page.route.id === '/sobre-nosotros'}
				>
					<div>Sobre nosotros</div>
					<Fa icon={faArrowRight} />
				</div>
			</a>
			<a
				href="/contacto"
				on:click={() => (isNavMenuOpen = false)}
			>
				<div
					class="nav-item container"
					class:active={$page.route.id === '/contacto'}
				>
					<div>Contacto</div>
					<Fa class="icon" icon={faArrowRight} />
				</div>
			</a>
		</nav>
	</Collapse>
</header>

<style lang="scss">
	:root {
		@media (max-width: 640px) {
			--a-font-size: 12px;
			--h1-font-size: 7vw;
			--container-padding-block: 0.5rem;
		}
		@media (min-width: 640px) {
			--a-font-size: 14px;
			--h1-font-size: 2.5rem;
			--container-padding-block: 0.75rem;
		}
		@media (min-width: 1024px) {
			--a-font-size: 16px;
			--h1-font-size: 3rem;
		}
	}

	@media (pointer: coarse) {
		:global(.on-service-page) header {
			display: none;
		}
	}

	header {
		position: relative;
		background-color: white;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		padding-block: var(--container-padding-block);
	}

	:global(.toggler) {
		width: 100%;
	}

	@media (min-width: 640px) {
		:global(.burger-button),
		:global(.toggler) {
			display: none;
		}

		nav.nav-bar {
			display: flex;
		}
	}

	.logo {
		height: calc(var(--global-scale-factor) * 68px);
	}

	.nav-menu .nav-item {
		border-top: 1px solid var(--global-color-light-gray);
		padding-block: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: 600;
		opacity: 0.9;

		&.active {
			opacity: 1;
			text-shadow: -0.02ex 0 0 currentColor, 0.02ex 0 0 currentColor;
		}

		:global(svg) {
			font-size: 1.25em;
		}

		:global(svg path) {
			fill: var(--global-color-accent);
		}
	}

	.nav-bar {
		display: none;
		justify-content: flex-end;
		gap: 2rem;
		padding-block: 0.5rem;

		a {
			text-decoration: none;
			font-size: var(--a-font-size);
			font-weight: 600;
			opacity: 0.9;
			white-space: nowrap;
			padding-block: 0.5rem;
			position: relative;
			-webkit-tap-highlight-color: transparent;

			&::after {
				content: "";
				width: 100%;
				height: 3px;
				position: absolute;
				bottom: 0;
				left: 0;
				background-color: var(--global-color-accent);
				opacity: 0;
				transition: opacity 300ms ease;
			}

			&:hover::after {
				opacity: 1;
			}

			&.active {
				opacity: 1;
				text-shadow: -0.02ex 0 0 currentColor, 0.02ex 0 0 currentColor;
			}
		}
	}
</style>