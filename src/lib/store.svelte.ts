import { browser } from '$app/environment';
import {
	insertWeightMeasurement,
	listWeightMeasurements,
	type WeightMeasurement
} from './weightMeasurements';
import { getContext, onMount, setContext } from 'svelte';

const STORE_KEY = 'store';

function store() {
	let weightMeasurements = $state<WeightMeasurement[]>([]);

	onMount(async () => {
		if (!browser) return;
		const result = await listWeightMeasurements();
		weightMeasurements = result;
	});

	return {
		get weightMeasurements() {
			return weightMeasurements;
		},
		addWeightMeasurement: async (date: Date, weight: number) => {
			const weightMeasurement = await insertWeightMeasurement(date, weight);
			weightMeasurements = await listWeightMeasurements();
			return weightMeasurement;
		}
	};
}

export function setStore() {
	return setContext<ReturnType<typeof store>>(STORE_KEY, store());
}

export function getStore() {
	return getContext<ReturnType<typeof setStore>>(STORE_KEY);
}
