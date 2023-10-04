<script lang="ts">
	export let white = false;
</script>

<div class="logo" class:white={white} >
	<img
		src="/images/Logo Vida Abundante{ white ? ' - blanco' : '' }.png"
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

<style lang="scss">
	.logo {
		display: flex;
		align-items: center;
		font-family: sans-serif;
		font-weight: 700;
		line-height: 1;

		@media (max-width: 640px) {
			--scale-factor: 0.75;
		}
		@media (min-width: 640px) {
			--scale-factor: 1;
		}

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
			color: var(--color-accent-dark);
			font-size: calc(var(--scale-factor) * 29px);
		}

		&.white {
			--scale-factor: 0.875;

			.text-vida,
			.text-abundante,
			.text-empresarial {
				color: white;
			}
		}
	}
</style>
