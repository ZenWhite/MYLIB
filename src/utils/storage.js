export const storage = (item, payload) =>
  payload
    ? localStorage.setItem(item, JSON.stringify(payload))
    : JSON.parse(localStorage.getItem(item));
