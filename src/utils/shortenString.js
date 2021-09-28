export const shortenString = (str = "Отсутствует", end) =>
  str.split(" ").length <= end
    ? str
    : str.split(" ").splice(0, end).concat(["..."]).join(" ");
