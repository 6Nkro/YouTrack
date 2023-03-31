export const timeAgo = (date: string) => {
  const diffTimeBySecond = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000
  );

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = month * 12;

  if (diffTimeBySecond < minute) {
    return `방금 전`;
  } else if (diffTimeBySecond < hour) {
    return `${Math.floor(diffTimeBySecond / minute)}분 전`;
  } else if (diffTimeBySecond < day) {
    return `${Math.floor(diffTimeBySecond / hour)}시간 전`;
  } else if (diffTimeBySecond < month) {
    return `${Math.floor(diffTimeBySecond / day)}일 전`;
  } else if (diffTimeBySecond < year) {
    return `${Math.floor(diffTimeBySecond / month)}달 전`;
  } else {
    return `${Math.floor(diffTimeBySecond / year)}년 전`;
  }
};

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

export const formatKakaoVideoUrl = (videoId: string) => {
  const baseUrl = "https://tv.kakao.com/embed/player/cliplink";
  const params = [
    "service=kakao_tv",
    "section=channel",
    "autoplay=1",
    "profile=HIGH",
    "wmode=transparent",
  ];

  return `${baseUrl}/${videoId}?${params.join("&")}`;
};
