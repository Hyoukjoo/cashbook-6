export const getWeek = (day: number) => {
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  return weeks[day];
};

export const formatToShortDate = (date: Date) => {
  const str = Intl.DateTimeFormat().format(date);
  const formated = str
    .split(" ")
    .map((s) => s.replace(".", ""))
    .map((s) => (s.length < 2 ? `0${s}` : s))
    .join("-");

  return formated;
};
