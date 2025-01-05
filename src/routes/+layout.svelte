<script lang="ts">
	import { base } from '$app/paths';
	import { setStore } from '$lib/store.svelte';
	import '../app.css';
	let { children } = $props();

	setStore();
</script>

<svelte:head>
	<title>Vaegt</title>
	<link rel="manifest" href="{base}/manifest.json" />
</svelte:head>

{@render children()}
