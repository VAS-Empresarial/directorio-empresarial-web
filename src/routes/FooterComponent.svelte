<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
</script>

<footer>
	<div class="container">
		<a href="/sobre-nosotros">
			<img
				class="logo"
				src="/images/Logo Excelencia - Horizontal Blanco.png"
				alt="Logo Grupo Excelencia"
			>
		</a>
		<div class="text">Vida Abundante Empresarial es un producto del grupo <a href="/sobre-nosotros">Excelencia</a> de la iglesia <a href="https://www.vas.cr" target="_blank">Vida Abundante del Sur <Fa icon={faArrowUpRightFromSquare} size="sm" /></a></div>
		<a href="https://www.vas.cr" target="_blank">
			<img
				class="logo"
				src="/images/Logo VAS - Blanco.png"
				alt="Logo Vida Abundante del Sur"
			>
		</a>
	</div>
</footer>

<style lang="scss">
	footer {
		position: relative;

		&::before {
			content: "";
			position: absolute;
			inset: 0;
			background-image:
				linear-gradient(rgb(0 0 0 / 0.9), rgb(0 0 0 / 0.9)), 
				url("/images/Mountains with snow.jpg");
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
		gap: 1.5rem 3rem;
		padding-block: 1.5rem;
		@media (max-width: 824px) {
			flex-wrap: wrap;
			justify-content: center;
		}
	}

	.logo {
		opacity: 0.9;
		height: calc(var(--global-scale-factor) * 72px);
	}

	.text {
		@media (max-width: 640px) {
			font-size: 14px;
		}
		color: white;
		text-align: center;
		@media (max-width: 824px) {
			width: 100%;
			order: -1;
			padding-top: 0.5rem;
		}

		a {
			font-weight: bold;
			color: var(--global-color-accent-light);
			white-space: nowrap;

			&:hover {
				text-decoration: underline;
			}
		}
	}


</style>
