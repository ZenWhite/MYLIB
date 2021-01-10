class BookService {
  constructor() {
    this.url = 'https://www.googleapis.com/books/v1/volumes'
    this.key = 'AIzaSyAfrZf3W8jHHCbM2KXE6sa1E64_KJyF_xk'
  }

  async getList(value) {
    return await fetch(`${this.url}?q=${value}&key=${this.key}`).then((response) => response.json())
  }
}

export const bookService = new BookService()
