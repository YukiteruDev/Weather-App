const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDayOfWeek(date: string) {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek) ? "" : weekDays[dayOfWeek];
}

function dateIsToday(date: string) {
  const today = new Date().getDay();
  const dateOfWeek = new Date(date).getDay();
  return today === dateOfWeek;
}

export { getDayOfWeek, dateIsToday };
