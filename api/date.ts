import dayjs from "dayjs";
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
  const now = dayjs();
  return now.format("YYYY-MM-DDTHH:00"); // get the exact time to match the API
}

export { getDayOfWeek, dateIsToday, getCurrentDateTime };
