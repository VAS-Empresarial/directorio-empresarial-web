<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { Modal, Checkbox, Button } from '@svelteuidev/core';
	import Fa from 'svelte-fa/src/fa.svelte';
	import FaLayers from 'svelte-fa/src/fa-layers.svelte';
	import FaLayersText  from 'svelte-fa/src/fa-layers-text.svelte';
	import { faChurch, faNotEqual, faEquals, faBuildingUser, faSquare } from '@fortawesome/free-solid-svg-icons';
	import { convertFaIconToDuotone } from '$lib/actions';

	let isSiteConditionsModalOpen = false;
	let doNotShowModalAgain = false;

	onMount(() => {
		let shouldOpenSiteConditionsModal = !localStorage.getItem('doNotOpenSiteConditionsModal');
		isSiteConditionsModalOpen = shouldOpenSiteConditionsModal;
	});

	function onSiteConditionsModalClose() {
		isSiteConditionsModalOpen = false;

		if (doNotShowModalAgain) {
			localStorage.setItem('doNotOpenSiteConditionsModal', 'true');
		}
	}
</script>

<Modal
	class="site-conditions-modal"
	target={'body'}
	centered
	size="xl"
	overlayOpacity={0.7}
	overlayBlur={2}
	withCloseButton={false}
	closeOnClickOutside={false}
	closeOnEscape={false}
	opened={isSiteConditionsModalOpen}
	on:close={onSiteConditionsModalClose}
>
	<div class="icons">
		<div use:convertFaIconToDuotone={['primary-color', 'secondary-color', 'secondary-color']}>
			<Fa class="icon" icon={faChurch} />
		</div>
		<FaLayers class="icon small">
			<Fa icon={faEquals} color="rgba(var(--color-primary-rgb), 0.65)" />
			<FaLayersText scale={1.15} rotate={15} translateY={-0.08} color="var(--color-primary)" style="font-weight: 600">
				/
			</FaLayersText>
		</FaLayers>
		<div use:convertFaIconToDuotone={[
			'secondary-color',
			'white',
			'white',
			'white',
			'primary-color',
			'primary-color',
		]}>
			<FaLayers class="icon">
				<Fa icon={faBuildingUser}/>
				<Fa icon={faSquare} color="white" scale={0.135} translateX={-0.25} translateY={-0.25} />
				<Fa icon={faSquare} color="white" scale={0.135} translateX={-0.25} />
				<Fa icon={faSquare} color="white" scale={0.135} translateX={-0.06} />
			</FaLayers>
		</div>
	</div>
	<h3>
		Descargo de Responsabilidad
	</h3>
	<p>
		Este sitio web es un directorio de empresas y profesionales que brindan sus productos y servicios. 
		La iglesia Vida Abundante del Sur no asume responsabilidad por las acciones de dichos individuos y entidades. 
		Para continuar, le invitamos a hacer clic en 'Comprendo y Acepto' para cerrar este aviso.
	</p>
	<div class="footer">
		<Button size="md" on:click={onSiteConditionsModalClose}>
			Comprendo y acepto
		</Button>
	</div>
	<div>
		<span>
			<Checkbox
				bind:checked={doNotShowModalAgain}
				label="No volver a mostrar"
				size="sm"
			/>
		</span>
	</div>
</Modal>

<style lang="scss">
	:global(.site-conditions-modal .svelteui-Modal-modal) {
		text-align: center;

		@media (max-width: 640px) {
			padding: 2rem;
		}
		@media (min-width: 640px) {
			padding: 4rem;
		}


		:global(.icons) {
			max-width: calc(100vw - 6rem);
			display: flex;
			justify-content: center;
			align-items: center;
			gap: min(5%, 2rem);
			margin-bottom: 2rem;
		}

		:global(.icon) {
			@media (max-width: 640px) {
				font-size: 2.5em;
			}
			@media (min-width: 640px) {
				font-size: 5em;
			}
		}

		:global(.icon.small) {
			scale: 0.65;
		}

		:global(svg path.primary-color) {
			fill: var(--color-primary);
		}

		:global(svg path.secondary-color) {
			fill: rgba(var(--color-primary-rgb), 0.65);
		}

		:global(svg path.white) {
			fill: white;
		}

		:global(.svelteui-Modal-header) {
			justify-content: center;
		}

		:global(.footer) {
			margin-top: 2rem;
			display: flex;
			justify-content: center;
		}

		:global(button) {
			background-image: linear-gradient(to right, var(--color-accent-dark), var(--color-accent));
			margin-bottom: 1rem;
			outline-color: var(--color-accent) !important;
		}

		:global(.svelteui-Checkbox-root) {
			display: inline-flex;
		}

		:global(.svelteui-Checkbox-label) {
			color: rgba(0, 0, 0, 0.75);
		}
	}
</style>
