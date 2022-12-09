/**
 * Return a Javascript date object that represents the date of tomorrow.
 * @returns {Date} - Tomorrow date object
 */
export function getTomorrow(): Date {
	const tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	return tomorrow;
}

/**
 * Format a date to YYYY-MM-DD
 * @param {Date} date - The Javascript date to format
 * @returns {string} - The formatted date
 */
export function dateToString(date: Date): string {
	return date.toISOString().slice(0, 10);
}

/**
 * Return the first and last day of the week in the format of YYYY-MM-DD
 * @returns {Object} - An object with both formatted dates
 */
export function getLastDayOfWeekToString(): { first: string; last: string } {
	const today = new Date();
	const first = today.getDate() - today.getDay();
	const last = first + 6;

	return ({
		first: dateToString(new Date(today.setDate(first))),
		last:  dateToString(new Date(today.setDate(last))),
	});
}
