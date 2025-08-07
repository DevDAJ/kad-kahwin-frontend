import { useMemo } from 'react';

type UseDateResult = {
  fullDate: string;
  day: string;
  shortMonthDate: string;
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

  const shortMonthDate = useMemo(
    () =>
      parsedDate.toLocaleDateString(language, { year: 'numeric', month: 'short', day: 'numeric' }),
    [parsedDate, language],
  );

  return { fullDate, day, shortMonthDate };
}
