const BookService = (function() {
	const url = 'https://www.googleapis.com/books/v1/volumes';//&key=yourAPIKey
	const key = 'AIzaSyAfrZf3W8jHHCbM2KXE6sa1E64_KJyF_xk';

	return {
		async getList(value) {
			const data = await fetch(`${url}?q=${value}&key=${key}`);
			const booksList = await data.json();

			return booksList;
		},
	}
})();

export default BookService;