export enum Importance {
    LOW = '0',
    MEDIUM = '1',
    HIGH = '2'
}

export enum Scale {
    THOUSAND = 'K',
    MILLION = 'M',
    BILLION = 'B'
}

export type Currencies = 'AUD' | 'CAD' | 'CHF' | 'EUR' | 'GBP' | 'JPY' | 'NZD' | 'USD';

export interface EconomicEvent {
    title: string;
    indicator: string;
    country: string;
    currency: Currencies;
    importance: Importance;
    period: string;
    actual: string;
    forecast: string;
    previous: string;
    scale: Scale;
    source: string;
    unit: string;
    comment: string;
    date: string;
}
