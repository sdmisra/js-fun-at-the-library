function createLibrary (name) {
    var library = {};
    library.name = name;
    library.shelves = {fantasy: [] , fiction : [], nonFiction: []}
    return library;
}

function addBook(library, book) {
    if (book.genre == 'fantasy') {
        library.shelves['fantasy'].push(book)
    }
    if (book.genre == 'fiction') {
        library.shelves['fiction'].push(book)
    }
    if (book.genre == 'nonFiction') {
      library.shelves['nonFiction'].push(book)
    }
return book
}
function checkoutBook (library, book, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i]['title'] == book) {
      library.shelves[genre].splice(i);
      return `You have now checked out ${book} from the Denver Public Library`
    }
  }
  return `Sorry, there are currently no copies of ${book} available at the Denver Public Library`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};