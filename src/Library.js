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
function checkoutBook (library, book, shelf) {
  if (book.genre == 'fantasy') {
    for (var i = 0; i < shelf.length; i++) {
      if (book.title == library.shelves.fantasy[i].title){
        library.shelves.fantasy[i].splice(i, 1)
        return `"You have now checked out ${library.shelves.fantasy[i].title} from the Denver Public Library"`
      }
    }
}
  if (book.genre == 'fiction') {
      for (var i = 0; i < shelf.length; i++) {if (book.title == library.shelves.fiction[i].title){
        library.shelves.fiction[i].splice(i, 1)
        return `"You have now checked out ${library.shelves.fiction[i].title} from the Denver Public Library"`}
    }
}
  if (book.genre == 'nonFiction') {
      for (var i = 0; i < shelf.length; i++) {if (book.title == library.shelves.nonFiction[i].title){
        library.shelves.fantasy[i].splice(i, 1)
        return `"You have now checked out ${library.shelves.nonFiction[i].title} from the Denver Public Library"`}
        }
    }
}
// var result1 = checkoutBook(denverLibrary, "Pride and Prejudice", "fiction");

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};