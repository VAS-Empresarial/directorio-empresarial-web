<script lang="ts">
	import { getContext } from 'svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import FaLayers from 'svelte-fa/src/fa-layers.svelte';
	import { faGlobe, faPhone, fas, type IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
	import { faWhatsapp, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { Badge } from '@svelteuidev/core';
	import type { Service } from '$lib/types/Service';
	import type { Business } from '../lib/types/Business';
	import { SocialMedia } from '../lib/types/SocialMedia';

	export let business: Business;

	const service = getContext<Service>('service');

	function generateHueFromId(id: string): number {
		// Generate the hue from the last 2 characters of the id
		const numericalValue = parseInt(id.slice(-2), 16); // The id is HEX based
		const maxValue = parseInt('ff', 16); // 255

		const hue = numericalValue / maxValue * 360; // Get a Hue value from 0 to 360

		return hue;
	}

	interface SocialMediaIconData {
		icon: IconDefinition,
		color: string,
		linkPrefix?: string,
	}

	const socialMediaIconData: Record<keyof typeof SocialMedia, SocialMediaIconData> = {
		[SocialMedia.website]: {
			icon: faGlobe,
			color: '#4285f4',
		},
		[SocialMedia.telephone]: {
			icon: faPhone,
			color: '#1ab7ea',
			linkPrefix: 'tel:',
		},
		[SocialMedia.email]: {
			icon: faEnvelope,
			color: '#f06d1b',
			linkPrefix: 'mailto:',
		},
		[SocialMedia.whatsApp]: {
			icon: faWhatsapp,
			color: '#25d366',
		},
		[SocialMedia.facebook]: {
			icon: faFacebookF,
			color: '#1877f2',
		},
		[SocialMedia.instagram]: {
			icon: faInstagram,
			color: '#c32aa3',
		},
		[SocialMedia.twitter]: {
			icon: faTwitter,
			color: '#1da1f2',
		},
	};

	function getIconDataBySocialMediaKey(key: string): SocialMediaIconData {
		const socialMediaKey = key as keyof typeof SocialMedia;
		return socialMediaIconData[socialMediaKey];
	}
</script>

<div class="business card shadow">
	<header>
		{#if business.logo}
			<img class="logo" src={business.logo.sizes.thumbnail.url} alt="Logo de la empresa">
		{:else}
			<div class="logo fallback-logo">
				<Fa class="icon" icon={fas[service.icon]} />
			</div>
		{/if}
		<div class="title-container">
			<h3 class="title">{business?.name}</h3>
			<div class="services">
				{#each business.services as service}
					<Badge color="blue" radius="sm" variant="filled">{service.singularName}</Badge>
				{/each}
			</div>
		</div>
	</header>
	{#if business.image}
		<img class="image" src={business.image.sizes.card.url || business.image?.url} alt="Imagen de la empresa">
	{:else}
		{@const hue = generateHueFromId(business.id)}
		<div
			class="image fallback-image"
			style="background-image: linear-gradient(135deg, hsl({hue}, 35%, 75%), hsl({hue}, 35%, 65%));"
		>
			<Fa
				class="icon"
				icon={fas[service.icon]}
				size="10x"
				color="hsl({hue}, 35%, 75%)"
			 />
		</div>
	{/if}
	<div class="card__body">
		{business.description || ''}
	</div>
	<footer
		class="social-media"
		class:six-icons={Object.keys(business.socialMedia).length == 6}
	>
		{#each Object.entries(business.socialMedia) as [socialMediaKey, socialMediaLink]}
			{@const iconData = getIconDataBySocialMediaKey(socialMediaKey)}
			<a href={(iconData.linkPrefix || '') + socialMediaLink} class={socialMediaKey}>
				<FaLayers size="2.5x">
					<Fa icon={iconData.icon} scale={0.5} color={iconData.color} />
				</FaLayers>
			</a>
		{/each}
	</footer>
</div>

<style lang="scss">
	:root {
		@media (max-width: 640px) {
			--title-font-size: 16px;
		}
		@media (min-width: 640px) {
			--title-font-size: 17px;
		}
		@media (min-width: 1024px) {
			--title-font-size: 18px;
		}
	}

	.business {
		background-color: white;
		display: flex;
		flex-direction: column;
    	height: 100%;
	}

	header {
		padding: 1em;
		display: flex;
		align-items: center;
	}

	.logo {
		flex-shrink: 0;
		width: 4rem;
		height: 4rem;
		background-color: teal;
		border-radius: 50%;
		margin-right: 1rem;
	}

	.fallback-logo {
		display: grid;
		place-items: center;
		background-color: rgba(var(--color-primary-rgb), var(--opacity-background));

		:global(.icon) {
			font-size: 1.5em;
		}

		:global(svg path) {
			fill: var(--color-primary);
		}
	}

	.title-container {
		// Trick to allow long titles to grow vertically without affecting the layout
		margin-block: -8px;
	}

	.title {
		font-size: var(--title-font-size);
		line-height: 1.35;
		margin-bottom: .25rem;
	}

	.image {
		width: 100%;
		height: 15rem;
		object-fit: cover;
	}

	.fallback-image {
		display: grid;
		place-items: center;
	}

	.services {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
	}

	.card__body {
		flex: 1;
		padding: 1rem;
	}

	.social-media {
		padding: 0 1rem 1rem;
		display: flex;
		gap: 0.5em;

		a {
			border: var(--border-width) solid var(--border-color);
			border-radius: 50%;
	
			&:hover {
				background-color: #eee;
			}

			&.telephone {
				// Make the icon thicker
				:global(svg path) {
					stroke: white;
					stroke-width: 48px;
				}

				&:hover :global(svg path) {
					stroke: #eee;
				}
			}
		}

		:global(.svelte-fa-layers) {
			width: 1em !important;
		}

		&.six-icons {
			gap: min(0.5em, calc((100% - 44px*6)/5));
		}
	}
</style>
