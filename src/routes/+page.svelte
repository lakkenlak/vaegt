<script lang="ts">
	import { base } from '$app/paths';
	import { getStore } from '$lib/store.svelte';

	const store = getStore();
</script>

<main class="flex h-full flex-col gap-2 overflow-auto p-2">
	<div class="grow overflow-auto">
		<table class="table-zebra table">
			<thead>
				<tr>
					<th>Date</th>
					<th>Weight</th>
				</tr>
			</thead>
			<tbody>
				{#each store.weightMeasurements as measurement}
					<tr>
						<td>{measurement.date.toLocaleString()}</td>
						<td>{measurement.weight}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div>
		<a href="{base}/collect" class="btn btn-primary w-full">Add measurement</a>
	</div>
</main>
