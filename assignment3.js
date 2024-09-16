//const book = {title: 'Bible', author: 'God', isbn: 'j0s9s'}

class Book {
  #available;
  constructor( title, author, isbn, available){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.#available = available;
  }

  borrowBook () {
    let avail;
    if (this.#available) {
      avail = false
      return `The ${this.title} is available`
    } else {
      return `The ${this.title} is not available`
    }
    return avail;
  }

}

const book = new Book ('Bible', 'God','j0s9s', true);
console.log(book.borrowBook())


const books = [
  {title: 'Atomic habits', author: 'James Clear', isbn: 9784},
  {title: 'Richest man in babylon', author: 'George Clason', isbn: 9781},
  {title: 'Think and grow rich', author: 'Napoleon Hill', isbn: 9780},
  {title: 'Spirit within and spirit upon', author: 'Kenneth Hagin', isbn: 9788}
]
class Library {
  constructor(books){
    this.books = books;
  }

  addBook (anotherBook) {
   
    this.books.push(anotherBook);
    return this.books;
    
  }
  removeBook (isbn) {
   this.books = this.books.filter(book => book.isbn !== isbn);
    return this.books;
  }
    
  findBookByTitle (title) {
    this.books = this.books.filter (book => book.title === title);
      return this.books;
    
  };
}
  class DigitalLibrary extends Library {
    constructor(books, year) {
      super(books)
      this.year = year
    }

    downloadBook(isbn) {
      const book = this.books.find(book => book.isbn === isbn)
      if (book => book.isbn === isbn) {
        return `This ${book.title} is downloading`
      } else {
        return `Book not found`
      }
    }
  }


const library = new Library(books);

// Adding a new book
const anotherBook = {title: 'Dominion Mandate', author: 'David Ogbueli', isbn: 9786};

console.log(library.addBook(anotherBook));

console.log(library.removeBook(9780)); 


console.log(library.findBookByTitle('Richest man in babylon'));


const Dlibrary = new DigitalLibrary(books, 2000);


console.log(Dlibrary.downloadBook(9788));