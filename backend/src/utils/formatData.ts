export const formatViewCount = (viewCount: number | string) => {
  viewCount = +viewCount;
  const units = ["", "만", "억"];
  const filterToFixed = (n: number) => (n < 100 ? n.toFixed(1) : n.toFixed(0));

  let unitIndex = 0;
  while (viewCount >= 10000 && unitIndex < units.length - 1) {
    viewCount /= 10000;
    unitIndex++;
  }

  return `${filterToFixed(viewCount).replace(/\.0$/, "")}${units[unitIndex]}`;
};

export const formatYouTubeDuration = (duration: string) => {
  const regex = /(\d+)([HMS])/g;

  const unitToSeconds: { [key: string]: number } = {
    H: 3600,
    M: 60,
    S: 1,
  };

  const totalSeconds = Array.from(duration.matchAll(regex)).reduce(
    (acc, [_, value, unit]) => acc + +value * unitToSeconds[unit],
    0
  );
  return formatDurationBySeconds(totalSeconds);
};

export const formatDurationBySeconds = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const parts = [
    hours ? `${hours.toString().padStart(2, "0")}:` : "",
    `${minutes.toString().padStart(2, "0")}:`,
    seconds.toString().padStart(2, "0"),
  ];

  return parts.join("");
};
