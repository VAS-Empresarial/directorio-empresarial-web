<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
	import LogoComponent from "./LogoComponent.svelte";
</script>

<footer>
	<div class="container">
		<LogoComponent white />
		<div class="text">Vida Abundante Empresarial es un producto del grupo <a href="/sobre-nosotros">Excelencia</a> de la iglesia <a href="https://www.vas.cr" target="_blank">Vida Abundante del Sur <Fa icon={faArrowUpRightFromSquare} size="sm" /></a></div>
		<a href="https://www.vas.cr" target="_blank">
			<img
				class="logo-VAS"
				src="/images/Logo VAS - blanco.webp"
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

		a {
			font-weight: bold;
			color: var(--color-accent-light);
			white-space: nowrap;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem 3rem;
		padding-block: 1rem;
		@media (max-width: 824px) {
			flex-wrap: wrap;
			justify-content: center;
		}
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
	}


</style>
