<div class="welcome-box">
	Bienvenido al directorio de<br><em>servicios</em> y <em>emprendimientos</em> de<br>la iglesia <em>Vida Abundante del Sur</em>
</div>

<style lang="scss">
	.welcome-box {
		background-image: linear-gradient(to right, var(--global-color-primary), var(--global-color-primary-light));
		position: relative;
		overflow: hidden;
		padding-left: 1.5rem;
		color: white;
		border-radius: var(--global-border-radius);

		@media (min-width: 640px) {
			padding-left: min(22vw, 300px);
			font-size: min(3vw, 35px);

			&::before {
				content: "";
				position: absolute;
				background-image: url('/images/Logo Vida Abundante - Blanco.png');
				background-size: cover;
				opacity: 0.15;
				z-index: 0;

				@media (pointer: coarse) {
					left: max(-4.6vw, -53px);
					bottom: max(-5vw, -58px);
					width: min(22vw, 254px);
					height: min(22vw, 254px);
				}
				@media (pointer: fine) {
					left: clamp(-47px, -4.6vw, -53px);
					bottom: clamp(-51px, -5vw, -58px);
					width: clamp(225px, 22vw, 254px);
					height: clamp(225px, 22vw, 254px);
				}
			}
		}

		@media (pointer: coarse) {
			padding-block: min(4vw, 48px);
			font-size: clamp(15px, 3vw, 35px);
		}
		@media (pointer: fine) {
			padding-block: clamp(40px, 4vw, 48px);
			font-size: clamp(30px, 3vw, 35px);
		}

		&::after {
			content: "";
			position: absolute;
			background-image: url('/images/Logo Vida Abundante - Blanco.png');
			background-size: cover;
			opacity: 0.2;
			z-index: 0;

			@media (pointer: coarse) {
				top: max(-6vw, -66px);
				right: max(-5.5vw, -62px);
				width: min(28vw, 320px);
				height: min(28vw, 320px);
			}
			@media (pointer: fine) {
				top: clamp(-61px, -6vw, -66px);
				right: clamp(-56px, -5.5vw, -62px);
				width: clamp(287px, 28vw, 320px);
				height: clamp(287px, 28vw, 320px);
			}
		}

		em {
			font-style: normal;
			font-weight: 500;
			color: var(--global-color-accent-light);
		}
	}
</style>
