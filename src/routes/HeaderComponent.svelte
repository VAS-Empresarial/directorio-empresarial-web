<header>
	<nav>
		<a href="/">Sobre nosotros</a>
		<a href="/">Contacto</a>
	</nav>
	<div>
		<img
			src="/images/Logo Excelencia.png"
			alt="Logo Excelencia"
			class="logo"
		>
		<h1>
			Directorio <span>Empresarial</span>
		</h1>
	</div>
</header>

<style lang="scss">
	:root {
		@media (max-width: 640px) {
			--a-font-size: 12px;
			--h1-font-size: 7vw;
			--header-padding-bottom: 1.5rem;
		}
		@media (min-width: 640px) {
			--a-font-size: 14px;
			--h1-font-size: 2.5rem;
			--header-padding-bottom: 2rem;
		}
		@media (min-width: 1024px) {
			--a-font-size: 16px;
			--h1-font-size: 3rem;
			--header-padding-bottom: 3rem;
		}
	}

	header {
		position: relative;
		padding-bottom: var(--header-padding-bottom);

		&::before {
			content: "";
			position: absolute;
			inset: 0;
			background-image:
				linear-gradient(rgb(0 0 0 / 0.8), rgb(0 0 0 / 0.8)), 
				url(/images/rodrigo-dos-reis-ct.jpg);
			background-size: cover;
			background-position: center;
			opacity: 0.9;
			z-index: -1;
		}

		nav {
			display: flex;
			justify-content: flex-end;
			padding: 0.5rem 1rem;

			a {
				text-decoration: none;
				color: white;
				font-size: var(--a-font-size);
				font-weight: bold;
				padding-block: 0.5rem;
				margin-inline: 1rem;
				position: relative;
				-webkit-tap-highlight-color: transparent;

				&::after {
					content: "";
					width: 100%;
					height: 2px;
					position: absolute;
					bottom: 0;
					left: 0;
					background-color: white;
					opacity: 0;
					transition: opacity 300ms ease;

				}
				&:hover::after {
					opacity: 1;
				}
			}
		}

		> div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}

		.logo {
			width: 300px;
			max-width: 50vw;
			margin-inline: auto;
			filter: drop-shadow(0 0 8px black);
		}

		h1 {
			color: white;
			font-size: var(--h1-font-size);
			text-shadow: 0 0 32px black;

			span {
				color: var(--color-accent);
				text-transform: uppercase;
				font-weight: 500;
			}
		}
	}
</style>