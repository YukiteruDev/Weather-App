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
  const d = new Date();
  const date = d.toISOString().slice(0, 10);
  const time = d.toLocaleTimeString();
  return `${date}T${time.slice(0, 2)}:00`;
}

export { getDayOfWeek, dateIsToday, getCurrentDateTime };
