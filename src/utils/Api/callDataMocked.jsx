import {
	USER_ACTIVITY,
	USER_MAIN_DATA,
	USER_AVERAGE_SESSIONS,
	USER_PERFORMANCE,
} from '../../datas/data';

/**
 * Get mocked user data
 * @param {string} id
 * @returns object
 */

async function DataUser(id) {
	try {
		// eslint-disable-next-line eqeqeq
		const res = USER_MAIN_DATA.find((el) => el.id == id);
		return { data: res };
	} catch (e) {
		console.log(e);
	}
}

/**
 * Get mocked activity data
 * @param {string} id
 * @returns object
 */

async function DataActivity(id) {
	try {
		// eslint-disable-next-line eqeqeq
		const res = USER_ACTIVITY.find((el) => el.userId == id);
		return { data: res };
	} catch (e) {
		console.log(e);
	}
}

/**
 * Get mocked average session data
 * @param {string} id
 * @returns object
 */

async function DataAverage(id) {
	try {
		// eslint-disable-next-line eqeqeq
		const res = USER_AVERAGE_SESSIONS.find((el) => el.userId == id);
		return { data: res };
	} catch (e) {
		console.log(e);
	}
}

/**
 * Get mocked performance data
 * @param {string} id
 * @returns object
 */

async function DataPerformance(id) {
	try {
		// eslint-disable-next-line eqeqeq
		const res = USER_PERFORMANCE.find((el) => el.userId == id);
		return { data: res };
	} catch (e) {
		console.log(e);
	}
}

export { DataUser, DataActivity, DataAverage, DataPerformance };
