export const getDateString = date => {
  const fullDate = new Date(+date * 1000);
  const [, month, day, year] = fullDate.toDateString().split(" ");
  const timeString = fullDate
    .toLocaleTimeString()
    .split(":")
    .slice(0, 2)
    .join(":");

  return `${month} ${day}, ${year} at ${timeString}`;
};