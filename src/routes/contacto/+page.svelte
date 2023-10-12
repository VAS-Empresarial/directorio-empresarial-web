<script lang="ts">
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
	import TitleBox from "../../components/TitleBox.svelte";

	onMount(() => {
		convertFaIconToDuotone('.envelope path');
	});

	function convertFaIconToDuotone(svgPathSelector: string) {
		const originalPathElement = document.querySelector(svgPathSelector)!;
		const originalPathTransformValue = originalPathElement.getAttribute('transform')!;
		const pathParentElement = originalPathElement!.parentElement!;
		const pathString = originalPathElement.getAttribute('d')!;
		const pathSegments = pathString.match(/M[^Mz]*z/g)!; // Match substrings that start with "M" and end with "z". 
		const newPathElements: SVGPathElement[] = [];

		pathParentElement.removeChild(originalPathElement);

		pathSegments.forEach((path) => {
			const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			pathElement.setAttribute('d', path);
			pathElement.setAttribute('fill', 'currentColor');
			pathElement.setAttribute('transform', originalPathTransformValue);
			newPathElements.push(pathElement);
			pathParentElement.appendChild(pathElement);
		});

		newPathElements[0].classList.add('secondary-color');
		newPathElements[1].classList.add('primary-color');
	}
</script>

<main>
	<header class="container">
		<TitleBox title="Contacto"/>
	</header>

	<article class="container">
		<h2>¿Preguntas o comentarios?</h2>
		<p>
			Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto 
			con nosotros. Estamos disponibles por correo y en Facebook.
		</p>

		<div class="container contact-cards">
			<a href="mailto:emprendedores@vas.cr">
				<div class="card">
					<div class="contact-icon-container">
						<Fa class="icon envelope" icon={faEnvelope} />
					</div>
					<h4>emprendedores@vas.cr</h4>
				</div>
			</a>
			<a href="https://www.facebook.com/excelenciavas" target="_blank">
				<div class="card">
					<div class="contact-icon-container">
						<Fa class="icon" icon={faFacebookF} />
					</div>
					<h4>@ExcelenciaVAS</h4>
				</div>
			</a>
		</div>
	</article>
</main>

<style lang="scss">
	.contact-cards {
		display: flex;

		@media (max-width: 640px) {
			flex-direction: column;
    		align-items: center;
			padding-block: 1rem;
			gap: 1.5rem;
		}
		@media (min-width: 640px) {
			padding-block: 2rem;
			gap: 2rem;
			justify-content: space-around;
		}
	}

	.card {
		width: 280px;
		background-color: white;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		transition: all 150ms ease;

		&:hover {
			background-color: rgba(var(--color-light-gray-rgb), 0.4);
			box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);
			transition: all 150ms ease;
		}
	}

	.contact-icon-container {
		display: grid;
		place-items: center;
		@media (max-width: 640px) {
			height: 8rem;
			aspect-ratio: 1;

			:global(.svelte-fa) {
				font-size: 4em;
			}
		}
		@media (min-width: 640px) {
			height: 9rem;
			aspect-ratio: 1;

			:global(.svelte-fa) {
				font-size: 5em;
			}
		}
		border: solid var(--color-accent) 4px;
		border-radius: 50%;

		:global(svg path:not(.primary-color):not(.secondary-color)),
		:global(svg path.primary-color) {
			fill: var(--color-primary);
		}

		:global(svg path.secondary-color) {
			fill: var(--color-primary-light);
		}
	}
</style>