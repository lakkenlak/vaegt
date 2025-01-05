<script lang="ts">
	import { setStore } from '$lib/store.svelte';
	import '../app.css';
	let { children } = $props();

	setStore();
</script>

<svelte:head>
	<title>Vaegt</title>
</svelte:head>

{@render children()}
