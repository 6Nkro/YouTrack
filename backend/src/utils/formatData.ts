export const formatViewCount = (viewCount: number | string): string => {
  viewCount = +viewCount;

  if (viewCount < 1000) {
    return viewCount.toString();
  }

  const units = ["", "천", "만", "억"];
  const format = (n: number, showDecimal: boolean) =>
    showDecimal ? n.toFixed(1).replace(/\.0$/, "") : n.toFixed(0);

  let unitIndex = 0;
  let divisor = 1000;

  while (viewCount >= divisor && unitIndex < units.length - 1) {
    viewCount /= divisor;
    unitIndex++;

    divisor = unitIndex === 1 ? 10 : 10000;
  }

  const showDecimal = unitIndex === 1 || viewCount < 100;
  return `${format(viewCount, showDecimal)}${units[unitIndex]}`;
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
