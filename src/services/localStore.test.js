import { localStore } from './localStore';

// Fake event for 14 octobre
const payload = {
  "Wed Oct 14 2020 00:00:00 GMT+0200 (heure d’été d’Europe centrale)": [{
    "text": "event 1",
    "date": "Wed Oct 14 2020 00:00:00 GMT+0200 (heure d’été d’Europe centrale)",
    "timestamp": "2020-10-31T12:55:10.954Z"
  }]
};

test('Test localstore getEvents', () => {
  jest
    .spyOn(window.localStorage.__proto__, 'getItem')
    .mockImplementation(() => JSON.stringify(payload));

  const storage = localStore.getEvents();
  const key = Object.keys(storage)[0];
  const { text, date, timestamp } = storage[key][0];

  expect(key).toBe("Wed Oct 14 2020 00:00:00 GMT+0200 (heure d’été d’Europe centrale)");
  expect(text).toBe("event 1");
  expect(date).toBe("Wed Oct 14 2020 00:00:00 GMT+0200 (heure d’été d’Europe centrale)");
  expect(timestamp).toBe("2020-10-31T12:55:10.954Z");
});

test('Test localstore getEventsInMonth', () => {
  jest
    .spyOn(window.localStorage.__proto__, 'getItem')
    .mockImplementation(() => JSON.stringify(payload));

  const storage = localStore.getEventsInMonth(2020, 9);
  const key = Object.keys(storage)[0];
  const { text, date, timestamp } = storage[key][0];

  expect(key).toBe("13");
  expect(text).toBe("event 1");
  expect(date).toBe("Wed Oct 14 2020 00:00:00 GMT+0200 (heure d’été d’Europe centrale)");
  expect(timestamp).toBe("2020-10-31T12:55:10.954Z");
});
