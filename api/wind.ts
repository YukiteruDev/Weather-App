const beaufortTable = {
  speed: [0, 2, 6, 12, 20, 29, 40, 51, 62, 75, 89, 103, 118],
  beaufort: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  description: [
    "Calm",
    "Light air",
    "Light breeze",
    "Gentle breeze",
    "Moderate breeze",
    "Fresh breeze",
    "Strong breeze",
    "High wind",
    "Fresh gale",
    "Strong gale",
    "Storm,whole gale",
    "Violent storm",
    "Hurricane-force",
  ],
};

export function getWindInfo(km: number) {
  const index = beaufortTable.speed.findIndex(i => km < i);
  const beaufort = beaufortTable.beaufort[index];
  const description = beaufortTable.description[index];
  return [beaufort, description];
}

export function getDirection(degree: number) {
  const directions = [
    "North",
    "North-East",
    "East",
    "South-East",
    "South",
    "South-West",
    "West",
    "North-West",
  ];
  const index =
    Math.round(((degree %= 360) < 0 ? degree + 360 : degree) / 45) % 8;
  return directions[index];
}
