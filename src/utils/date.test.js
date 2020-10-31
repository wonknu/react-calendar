import { getDateInformations } from './date';
import { localStore } from '../services/localStore';

// Fake event for 14 octobre
const payload = {
  "14": [{"text":"event 1","date":"Wed Oct 14 2020 20:00:00 GMT+0200 (heure d’été d’Europe centrale)","timestamp":"2020-10-31T12:10:50.741Z"}]
};

test('Test getDateInformations method', () => {
  jest
    .spyOn(localStore, "getEventsInMonth")
    .mockImplementation(() => payload);

  const dateInformations = getDateInformations(new Date(2020, 9, 10));
  const { daysInMonth, firstDayOfMonth, lastDayOfMonth, currentDayOfWeek, firstDayOfMonthOfWeek, tableMonth } = dateInformations;
  const fakedDayToTest = tableMonth[2][3];

  expect(fakedDayToTest.day).toBe(14);
  expect(fakedDayToTest.formatedDate.toISOString()).toBe('2020-10-14T00:00:00.000Z');
  expect(fakedDayToTest.eventsCount).toBe(1);

  expect(daysInMonth).toBe(31)
  expect(firstDayOfMonth.toISOString()).toBe('2020-10-01T00:00:00.000Z')
  expect(lastDayOfMonth.toISOString()).toBe('2020-10-31T23:59:59.999Z')
  expect(currentDayOfWeek).toBe(6)
  expect(firstDayOfMonthOfWeek).toBe(4)
});
