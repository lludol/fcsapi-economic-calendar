import axios from 'axios';
import { EconomicEvent, Importance } from './models';
import { dateToString, getLastDayOfWeekToString, getTomorrow } from './date';

const API_URL = 'https://fcsapi.com/api-v3/forex/economy_cal';

export interface EconomicCalendarParams {
    symbol: string; // CAD,USD,EUR
    from: string; // YYYY-MM-DD
    to: string; // YYYY-MM-DD
    access_key: string;
}

export type DailyEconomicCalendarParams = Omit<EconomicCalendarParams, 'from' | 'to'>;
export type WeeklyEconomicCalendarParams = Omit<EconomicCalendarParams, 'from' | 'to'>;

interface FCSAPI_Response<T> {
    status: boolean;
    code: number;
    msg: string;
    response: T;
}

/**
 * Return economic events between two dates.
 * @param {EconomicCalendarParams} params - Filters for the economic events.
 * @param {Importance[]} importances - Filter regarding the expected impact of each event.
 * @returns {Promise<EconomicEvent[]>} - Economic events
 */
export async function fetchEconomicCalendar(
	params: EconomicCalendarParams,
	importances: Importance[] = [Importance.LOW, Importance.MEDIUM, Importance.HIGH],
): Promise<EconomicEvent[]> {
	const { data } = await axios.get<FCSAPI_Response<EconomicEvent[]>>(API_URL, {
		params,
	});

	if (data.code === 200) {
		return data.response.filter((news) => importances.includes(news.importance));
	}

	return [];
}

/**
 * Return the daily economic events.
 * @param {DailyEconomicCalendarParams} params - Filters for the economic events.
 * @param {Importance[]} importances - Filter regarding the expected impact of each event.
 * @returns {Promise<EconomicEvent[]>} - Economic events
 */
export function fetchDailyEconomicCalendar(
	params: DailyEconomicCalendarParams,
	importances: Importance[] = [Importance.LOW, Importance.MEDIUM, Importance.HIGH],
): Promise<EconomicEvent[]> {
	return fetchEconomicCalendar(
		{
			from:       dateToString(new Date()),
			to:         dateToString(getTomorrow()),
			symbol:     params.symbol,
			access_key: params.access_key,
		},
		importances,
	);
}

/**
 * Return the week economic events.
 * @param {DailyEconomicCalendarParams} params - Filters for the economic events.
 * @param {Importance[]} importances - Filter regarding the expected impact of each event.
 * @returns {Promise<EconomicEvent[]>} - Economic events
 */
export function fetchWeeklyEconomicCalendar(
	params: WeeklyEconomicCalendarParams,
	importances: Importance[] = [Importance.LOW, Importance.MEDIUM, Importance.HIGH],
): Promise<EconomicEvent[]> {
	const { first, last } = getLastDayOfWeekToString();

	return fetchEconomicCalendar(
		{
			from:       first,
			to:         last,
			symbol:     params.symbol,
			access_key: params.access_key,
		},
		importances,
	);
}
