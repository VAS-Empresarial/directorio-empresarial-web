<script lang="ts">
	export let title: string;
</script>

<div class="title-box card">
	<h1>{title}</h1>
</div>

<style lang="scss">
	.title-box {
		background-color: var(--color-light-gray);
		padding: 2rem;
		@media (max-width: 640px) {
			min-height: 200px;
			font-size: 2rem;
		}
		@media (min-width: 640px) {
			min-height: 300px;
			font-size: 3rem;
		}
		color: var(--color-primary);
		display: grid;
		place-items: center;
	}

	h1 {
		font-size: inherit;
	}
</style>
