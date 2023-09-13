<div class="container">
	<div class="welcome-box">
		Bienvenido al directorio de<br><em>servicios</em> y <em>emprendimientos</em> de<br>la red de iglesias <em>Vida Abundante</em>
	</div>
</div>

<style lang="scss">
	.welcome-box {
		background-image: linear-gradient(to right, var(--color-primary), var(--color-primary-light));
		position: relative;
		overflow: hidden;
		padding-block: min(4vw, 48px);
		padding-left: 1.5rem;
		font-size: 15px;
		color: white;
		border-radius: var(--border-radius);

		@media (min-width: 640px) {
			padding-left: min(22vw, 300px);
			font-size: min(3vw, 35px);

			&::before {
				content: "";
				position: absolute;
				left: max(-4.6vw, -53px);
				bottom: max(-5vw, -58px);
				width: min(22vw, 254px);
				height: min(22vw, 254px);
				background-image: url('/images/Logo Vida Abundante - blanco.png');
				background-size: cover;
				opacity: 0.15;
				z-index: 0;
			}
		}

		&::after {
			content: "";
			position: absolute;
			top: max(-6vw, -66px);
			right: max(-5.5vw, -62px);
			width: min(28vw, 320px);
			height: min(28vw, 320px);
			background-image: url('/images/Logo Vida Abundante - blanco.png');
			background-size: cover;
			opacity: 0.2;
			z-index: 0;
		}

		em {
			font-style: normal;
			font-weight: 500;
			color: var(--color-accent-light);
		}
	}
</style>
