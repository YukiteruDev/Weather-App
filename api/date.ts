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

function getCurrentDateTime() {
  const date = new Date();
  const isoDateTime = date.toISOString();
  const formattedDateTime = isoDateTime.slice(0, 14) + "00";
  return formattedDateTime;
}

export { getDayOfWeek, dateIsToday, getCurrentDateTime };
