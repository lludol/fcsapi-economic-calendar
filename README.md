# fcsapi-economic-calendar

Wrapper of the fcsapi.com for the economic calendar route.

More infos: https://fcsapi.com/document/forex-api#economy_calendar

## Node.js library

```bash
npm install fcsapi-economic-calendar # or yarn add fcsapi-economic-calendar
```

### fetchEconomicCalendar
Return economic events between two dates.

```typescript
fetchEconomicCalendar(
	{
		symbol:     'EUR,USD',
		from:       '2022-12-05',
		to:         '2022-12-10',
		access_key: 'XXX', // Create an account on fcsapi.com to get an access key
	},
	[0, 1, 2], // News importance (optional parameters)
);
```

### fetchDailyEconomicCalendar
Return economic events of the current day.

```typescript
fetchDailyEconomicCalendar(
	{
		symbol:     'CAD,JPY',
		access_key: 'XXX', // Create an account on fcsapi.com to get an access key
	},
	[2], // News importance (optional parameters)
);
```

### fetchWeeklyEconomicCalendar
Return economic events of the current week.

```typescript
fetchWeeklyEconomicCalendar(
	{
		symbol:     'GBP,USD,EUR,CAD',
		access_key: 'XXX', // Create an account on fcsapi.com to get an access key
	},
	[1, 2], // News importance (optional parameters)
);
```

*TypeScript types are also availaible for all methods.*

## Contributing

Don't hesitate to [create a pull request](https://github.com/lludol/fcsapi-economic-calendar/pulls) to improve the project.

## Bugs

If you find a bug or want a new feature, dont'hesitate to [create an issue](https://github.com/lludol/fcsapi-economic-calendar/issues).

## License

[MIT](LICENSE)