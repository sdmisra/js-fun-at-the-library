function createTitle(title) {
  return 'The ' + title
}

function buildMainCharacter(name, age, pronouns) {
  var character = {};
  character.name = name;
  character.age = age;
  character.pronouns = pronouns;
  return character
}
function saveReview (reviewText, reviews){
for (i = 0; i < reviews.length+1; i++ ) {
  if (reviewText === reviews[i]) {
    return reviews
  } else {
  reviews.push(reviewText);
  return reviews;
}
}
}

function calculatePageCount(bookTitle) {
  var length;
  length =+ 20* bookTitle.length;
  return length;
}

function writeBook (title, character, genre) {
  var book = {};
  book.title = title;
  book.mainCharacter = character;
  book.pageCount = calculatePageCount(title);
  book.genre = genre;
  return book;
}
function editBook (bookTitle) {
  bookTitle.pageCount = (bookTitle.pageCount *.75)
}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}