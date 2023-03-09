function kmToBeaufort(km: number) {
  if (km <= 1) {
    return 0;
  } else if (km <= 5) {
    return 1;
  } else if (km <= 11) {
    return 2;
  } else if (km <= 19) {
    return 3;
  } else if (km <= 28) {
    return 4;
  } else if (km <= 38) {
    return 5;
  } else if (km <= 49) {
    return 6;
  } else if (km <= 61) {
    return 7;
  } else if (km <= 74) {
    return 8;
  } else if (km <= 88) {
    return 9;
  } else if (km <= 102) {
    return 10;
  } else if (km <= 117) {
    return 11;
  } else if (km <= 134) {
    return 12;
  } else {
    return "Hurricane";
  }
}

function kmToWindForce(km: number) {
  if (km <= 0.2) {
    return "Calm";
  } else if (km <= 1.5) {
    return "Light air";
  } else if (km <= 3.3) {
    return "Light breeze";
  } else if (km <= 5.5) {
    return "Gentle breeze";
  } else if (km <= 8) {
    return "Moderate breeze";
  } else if (km <= 10.8) {
    return "Fresh breeze";
  } else if (km <= 13.9) {
    return "Strong breeze";
  } else if (km <= 17.2) {
    return "Near gale";
  } else if (km <= 20.8) {
    return "Gale";
  } else if (km <= 24.5) {
    return "Strong gale";
  } else if (km <= 28.5) {
    return "Storm";
  } else if (km <= 32.7) {
    return "Violent storm";
  } else {
    return "Hurricane";
  }
}

function getDirection(degree: number) {
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
export { kmToBeaufort, kmToWindForce, getDirection };
