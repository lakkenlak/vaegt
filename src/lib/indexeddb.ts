import { openDB, type IDBPDatabase } from 'idb';

const DATABASE_NAME = 'vaegt';

let db: IDBPDatabase<unknown>;

export async function getDatabaseConnection() {
	if (!db) {
		db = await openDB(DATABASE_NAME, 1, {
			upgrade(db) {
				db.createObjectStore('weight_measurement', {
					keyPath: 'id',
					autoIncrement: true
				});
			}
		});
	}

	return db;
}
