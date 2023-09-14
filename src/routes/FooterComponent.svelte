<script>
	import LogoComponent from "./LogoComponent.svelte";
</script>

<footer>
	<div class="container">
		<LogoComponent white />
		<div class="text">Vida Abundante Empresarial es un producto del grupo <a href="/sobre-nosotros">Excelencia</a> de la iglesia <a href="https://www.vas.cr">Vida Abundante del Sur</a></div>
		<img
			class="logo-VAS"
			src="/images/Logo VAS - blanco.webp"
			alt="Logo Vida Abundante del Sur"
		>
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
		gap: 1rem 3rem;
		padding-block: 1rem;
		@media (max-width: 824px) {
			flex-wrap: wrap;
			justify-content: center;
		}
	}

	.text {
		color: white;
		text-align: center;
		@media (max-width: 824px) {
			width: 100%;
			order: -1;
			padding-top: 0.5rem;
		}
	}


</style>
