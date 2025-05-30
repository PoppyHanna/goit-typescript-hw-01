enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

console.log('Is Saturday weekend?', isWeekend(DayOfWeek.Saturday));
console.log('Is Wednesday weekend?', isWeekend(DayOfWeek.Wednesday));