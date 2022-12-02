
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



module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};