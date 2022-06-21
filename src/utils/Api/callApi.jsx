import axios from 'axios';

/**
 * Get data from API on user
 * @param {string} id
 * @returns Object
 */

async function DataUser(id) {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
}

/**
 * Get data from API on daily activity
 * @param {string} id
 * @returns object
 */

async function DataActivity(id) {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}/activity`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
}

/**
 * Get data from API on average session
 * @param {string} id
 * @returns object
 */

async function DataAverage(id) {
	try {
		const res = await axios.get(
			`http://localhost:3000/user/${id}/average-sessions`
		);
		return res.data;
	} catch (e) {
		console.log(e);
	}
}

/**
 * Get data from API on performance
 * @param {string} id
 * @returns object
 */

async function DataPerformance(id) {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}/performance`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
}

export { DataUser, DataActivity, DataAverage, DataPerformance };
