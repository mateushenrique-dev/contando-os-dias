import { selector } from 'recoil';
import { dates } from './date-atom';

export const dateSelector = selector({
  key: "dateSelector",
  get({ get }) {
    const numberDates = get(dates);

    if (!numberDates) return {
      years: "--",
      months: "--",
      days: "--" 
    }

    return numberDates;
  }
})