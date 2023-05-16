<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import FaLayers from 'svelte-fa/src/fa-layers.svelte';
	import { faGlobe, faPhone, type IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
	import { faWhatsapp, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { Badge } from '@svelteuidev/core';
	import type { Business } from '../lib/interfaces/Business';
	import { SocialMedia } from '../lib/interfaces/SocialMedia';

	export let business: Business;

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

<article class="container card">
	<header>
		<img class="logo" src={business.logo.sizes?.thumbnail.url} alt="Logo de la empresa">
		<div class="title-container">
			<h3 class="title">{business.name}</h3>
			<Badge color="blue" radius="sm" variant="filled">{business.service.name}</Badge>
		</div>
	</header>
	<img class="image" src={business.image.sizes?.card.url || business.image.url} alt="Imagen de la empresa">
	<div class="card__body">
		{business.description}
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
</article>

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

	.container {
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
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		margin-right: 1rem;
	}

	.title-container {
		// Trick to allow long titles to grow vertically without affecting the layout
		margin-block: -8px;
	}

	.title {
		font-size: var(--title-font-size);
	}

	.image {
		width: 100%;
		height: 15rem;
		object-fit: cover;
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
