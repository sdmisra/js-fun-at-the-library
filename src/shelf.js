function shelfBook(name, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(name);
  }
}


function unshelfBook(name, shelf) {
  for (var i = 0; i < shelf.length; i++) {
  if (name === shelf[i].title) {
      shelf.splice(i, 1)
  }
}
}

//  for (var i = 0; i < shelf.length; i++) {
//  if (name === shelf['title']) {
//   shelf[i].splice(0, 1)}

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};