<script lang="ts">
	import { setStore } from '$lib/store.svelte';
	import '../app.css';
	let { children } = $props();

	setStore();
</script>

{@render children()}
