import { shortenString } from "./shortenString";

export const getBook = (book) => {
  const { volumeInfo: info } = book;
  const images = info.imageLinks;

  return {
    id: book.id,
    title: shortenString(info.title, 3),
    description: shortenString(info.description, 15),
    thumb: images ? images.thumbnail : "",
    link: info.previewLink,
  };
};
