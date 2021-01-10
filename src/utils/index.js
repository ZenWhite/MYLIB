export const shortenString = (str = 'Отсутствует', end) => {
    if(str.split(' ').length <= end) return str;
    return str.split(' ').splice(0, end).concat(['...']).join(' ');
}

export const getBook = book => {
    const {volumeInfo: info} = book;
    const images = info.imageLinks;

    return {
        id: book.id,
        title: shortenString(info.title, 3),
        description: shortenString(info.description, 15),
        thumb: images ? images.thumbnail : '',
        link: info.previewLink
    }
}

export const storage = (item, payload) => {
    if(payload) return localStorage.setItem( item, JSON.stringify(payload) );
    return JSON.parse( localStorage.getItem(item) );
}