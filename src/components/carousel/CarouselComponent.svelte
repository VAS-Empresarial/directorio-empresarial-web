<script lang="ts">
	import { SvelteComponent, onMount } from "svelte";
	import TouchDeviceWrapperComponent from "./TouchDeviceWrapperComponent.svelte";
	import MouseDeviceWrapperComponent from "./MouseDeviceWrapperComponent.svelte";

	export let items: any[];

	let isDesktopDevice: boolean;
	let wrapperComponent: typeof SvelteComponent;

	onMount(() => {
		const desktopDeviceMedia  = window.matchMedia("(pointer: fine)");
		isDesktopDevice = desktopDeviceMedia.matches;

		if (isDesktopDevice) {
			wrapperComponent = MouseDeviceWrapperComponent;
		} else {
			wrapperComponent = TouchDeviceWrapperComponent;
		}
	});
</script>

<svelte:component this={wrapperComponent} {items} let:item={item}>
	<slot {item} />
</svelte:component>
