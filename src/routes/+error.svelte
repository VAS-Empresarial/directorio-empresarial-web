<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import FaLayers from 'svelte-fa/src/fa-layers.svelte';
	import { faCloud, faCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
</script>

<main>
	<div class="container">
		<FaLayers size="9x">
			<Fa icon={faCloud} color="#1E8EC5" />
			<Fa icon={faCircle} scale={0.375} translateX={0.35} translateY={0.35} color="white" />
			<Fa icon={faCircleXmark} scale={0.3} translateX={0.35} translateY={0.35} color="#D3A92D"/>
		</FaLayers>
		<div class="right-side">
			<h1>¡Ups!</h1>
			<p>Algo anda mal</p>
			<p>Estamos experimentando dificultades técnicas</p>
		</div>
	</div>
</main>

<style lang="scss">
	main {
		display: grid;
		place-items: center;
		padding-block: 2rem;
		color: rgba(0, 0, 0, .8);
	}

	.container {
		display: flex;
		align-items: center;
		gap: 2rem 4rem;

		@media (max-width: 640px) {
			flex-direction: column;
			text-align: center;
		}
	}

	h1 {
		font-size: 4rem;
	}

	p {
		font-size: 1.5rem;
	}

	p + p {
		font-size: 1.2rem;
	}
</style>
