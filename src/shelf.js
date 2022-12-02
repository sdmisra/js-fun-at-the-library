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
function listTitles(shelf){
  var listedShelf = "";
  for (var i = 0; i < shelf.length; i++) {
  if (i === shelf.length-1) {
  listedShelf += shelf[i].title
  } else {
  listedShelf += shelf[i].title + ", "}
  }
  return listedShelf;
}

function searchShelf
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};