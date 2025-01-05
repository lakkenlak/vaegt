<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { getStore } from '$lib/store.svelte';
	import type { WeightMeasurement } from '$lib/weightMeasurements';

	let store = getStore();

	let weight = $state(0);

	let lastWeightMeasurement = $derived.by<WeightMeasurement | null>(() => {
		return store.weightMeasurements[0] || null;
	});

	$effect(() => {
		// get the last weight measurement and use it to set the initial value
		if (lastWeightMeasurement) {
			weight = lastWeightMeasurement.weight;
		}
	});
</script>

<main class="flex h-full flex-col justify-between p-2">
	<div class="flex grow flex-col items-center justify-center gap-3">
		<div class="flex flex-col gap-3">
			<button
				class="btn btn-neutral btn-lg"
				onclick={() => (weight = Math.round((weight + 0.1) * 10) / 10)}>Up</button
			>
			<span class={'text-center text-5xl'}>{weight}</span>
			<button
				class="btn btn-neutral btn-lg"
				onclick={() => (weight = Math.round((weight - 0.1) * 10) / 10)}>Down</button
			>
		</div>
	</div>

	<div class="join w-full">
		<a href="{base}/" class="btn btn-ghost join-item grow">Cacel</a>
		<button
			class="btn btn-primary join-item grow"
			onclick={() => {
				store.addWeightMeasurement(new Date(), Math.round(weight * 10) / 10);
				goto(base + '/');
			}}>Confirm</button
		>
	</div>
</main>
