import { useMemo } from 'react';

type UseDateResult = {
  fullDate: string;
  day: string;
  shortMonthDate: string;
  month: string;
  dayNum: string;
  time: string;
  year: string;
};

export function useDate(
  date: Date | string,
  language: Intl.LocalesArgument = 'en-US',
): UseDateResult {
  const parsedDate = useMemo(() => (typeof date === 'string' ? new Date(date) : date), [date]);

  const fullDate = useMemo(
    () =>
      parsedDate.toLocaleDateString(language, { year: 'numeric', month: 'long', day: 'numeric' }),
    [parsedDate, language],
  );

  const day = useMemo(
    () => parsedDate.toLocaleDateString(language, { weekday: 'long' }),
    [parsedDate, language],
  );

  const month = useMemo(
    () => parsedDate.toLocaleDateString(language, { month: 'long' }),
    [parsedDate, language],
  );
  const year = useMemo(
    () => parsedDate.toLocaleDateString(language, { year: 'numeric' }),
    [parsedDate, language],
  );
  const dayNum = useMemo(
    () => parsedDate.toLocaleDateString(language, { day: 'numeric' }),
    [parsedDate, language],
  );

  const time = useMemo(
    () =>
      parsedDate
        .toLocaleDateString('en-MY', { hour: 'numeric', minute: '2-digit', hour12: true })
        .split(' ')
        .splice(1, 2)
        .join('')
        .toUpperCase(),
    [parsedDate, language],
  );

  const shortMonthDate = useMemo(
    () =>
      parsedDate.toLocaleDateString(language, { year: 'numeric', month: 'short', day: 'numeric' }),
    [parsedDate, language],
  );

  return { fullDate, day, shortMonthDate, month, dayNum, time, year };
}
