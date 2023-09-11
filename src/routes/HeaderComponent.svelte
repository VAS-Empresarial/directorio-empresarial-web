<header>
	<div class="container">
		<div class="logo">
			<img
				src="/images/Logo Vida Abundante.png"
				alt="Logo Vida Abundante"
			>
			<div>
				<div>
					<span class="text-vida">VIDA</span>
					<span class="text-abundante">ABUNDANTE</span>
				</div>
				<div class="text-empresarial">EMPRESARIAL</div>
			</div>
		</div>
		<nav>
			<a href="/">Sobre nosotros</a>
			<a href="/">Contacto</a>
		</nav>
	</div>
</header>

<style lang="scss">
	:root {
		@media (max-width: 640px) {
			--a-font-size: 12px;
			--h1-font-size: 7vw;
			--scale-factor: 0.75;
		}
		@media (min-width: 640px) {
			--a-font-size: 14px;
			--h1-font-size: 2.5rem;
			--scale-factor: 1;
		}
		@media (min-width: 1024px) {
			--a-font-size: 16px;
			--h1-font-size: 3rem;
		}
	}

	header {
		position: relative;

		&::before {
			content: "";
			position: absolute;
			inset: 0;
			background-image:
				linear-gradient(rgb(0 0 0 / 0.85), rgb(0 0 0 / 0.85)), 
				url(/images/rodrigo-dos-reis-ct.jpg);
			background-size: cover;
			background-position: center;
			opacity: 0.9;
			z-index: -1;
		}
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: 0.5rem;
	}

	.logo {
		display: flex;
		align-items: center;
		font-family: sans-serif;
		font-weight: 700;
		line-height: 1;
		filter: drop-shadow(0 0 8px black);

		img {
			width: calc(var(--scale-factor) * 80px);
			margin-left: calc(var(--scale-factor) * -8px);
		}

		img + div {
			margin-left: calc(var(--scale-factor) * -6px);
			margin-top: calc(var(--scale-factor) * 4px);
		}

		.text-vida,
		.text-abundante {
			font-size: calc(var(--scale-factor) * 22px);
			letter-spacing: calc(var(--scale-factor) * 1px);
		}

		.text-vida {
			color: var(--color-primary);
		}

		.text-abundante {
			color: var(--color-primary-light);
		}

		.text-empresarial {
			color: var(--color-accent);
			font-size: calc(var(--scale-factor) * 29px);
		}
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
			white-space: nowrap;
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
</style>