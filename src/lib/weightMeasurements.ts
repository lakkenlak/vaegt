import { getDatabaseConnection } from './indexeddb';

const WEIGHT_MEASUREMENT_STORE_NAME = 'weight_measurement';

export type WeightMeasurement = {
	id: IDBValidKey;
	date: Date;
	weight: number;
};

export async function listWeightMeasurements(): Promise<WeightMeasurement[]> {
	const db = await getDatabaseConnection();
	const result: WeightMeasurement[] = await db.getAll(WEIGHT_MEASUREMENT_STORE_NAME);
	return result.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export async function insertWeightMeasurement(
	date: Date,
	weight: number
): Promise<WeightMeasurement> {
	const db = await getDatabaseConnection();

	const result = await db.add(WEIGHT_MEASUREMENT_STORE_NAME, {
		date,
		weight
	});
	return {
		id: result,
		date,
		weight
	};
}
