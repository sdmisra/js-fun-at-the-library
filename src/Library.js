
function createLibrary (name) {
    var library = {};
    library.name = name;
    library.shelves = {fantasy: [] , fiction : [], nonFiction: []}
    return library;
}

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};