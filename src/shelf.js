function shelfBook(name, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(name);
  }
}
function unShelfBook(name, shelf) {
}






module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};