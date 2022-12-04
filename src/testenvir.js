// function shelfBook(name, shelf) {
//     if (shelf.length < 3) {
//       shelf.unshift(name);
//     }
//   }
//   var sciFiShelf = [];
//   var hyperion = {
//     title: "Hyperion",
//     mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
//     pageCount: 482,
//     genre: "sciFi"
//   };
//   var dune = {
//     title: "Dune",
//     mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
//     pageCount: 421,
//     genre: "sciFi"
//   };
//   var endersGame = {
//     title: "Ender's Game",
//     mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
//     pageCount: 324,
//     genre: "sciFi"
//   };
//   var caseysBook = {
//     title: "The Robot Kitty",
//     mainCharacter: { name: "Coda", age: 15, pronouns: "he/him" },
//     pageCount: 201,
//     genre: "sciFi"
//   };

// shelfBook(hyperion, sciFiShelf);
// shelfBook(dune, sciFiShelf);
// shelfBook(endersGame, sciFiShelf);
// shelfBook(caseysBook, sciFiShelf);
// console.log(sciFiShelf);
// console.log(sciFiShelf[0])
// console.log(sciFiShelf);

// function unShelfBook(name, shelf) {
//     for (var i = 0; i < shelf.length; i++) {
//     if (name === shelf['title']) {
//         shelf.splice(i, 1)
//     }
// }
// }

// Library Test Environment:
//
var dracula = {
  title: "Dracula",
  mainCharacter: { name: "Count Dracula", age: undefined, pronouns: "he/him" },
  pageCount: 418,
  genre: "fantasy"
}
var bornACrime = {
  title: "Born a Crime",
  mainCharacter: { name: "Trevor Noah", age: 36, pronouns: "he/him" },
  pageCount: 304,
  genre: "nonFiction"
}
var prideAndPrejudice = {
  title: "Pride and Prejudice",
  mainCharacter: { name: "Eliabeth Bennet", age: 20, pronouns: "she/her" },
  pageCount: 432,
  genre: "fiction"
}

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
// Need to match genre, loop through genre array, match title of book, splice at location of book within genre array, return success or fail message.
function checkoutBook (library, book, shelf) {
  if (book.genre == 'fantasy') {
    for (var i = 0; i < shelf.length; i++) {
      if (book.title == library.shelves.fantasy[i].title){
        library.shelves.fantasy[i].splice(i, 1)
        return `"You have now checked out ${library.shelves.fantasy[i].title} from the Denver Public Library"`
      }
    }
}
  else if (book.genre == 'fiction') {
      for (var i = 0; i < shelf.length; i++) {if (book.title == library.shelves.fiction[i].title){
        library.shelves.fiction[i].splice(i, 1)
        return `"You have now checked out ${library.shelves.fiction[i].title} from the Denver Public Library"`}
    }
}
  else if (book.genre == 'nonFiction') {
      for (var i = 0; i < shelf.length; i++) {if (book.title == library.shelves.nonFiction[i].title){
        library.shelves.fantasy[i].splice(i, 1)
        return `"You have now checked out ${library.shelves.nonFiction[i].title} from the Denver Public Library"`}
        }
    }
  else return `"Sorry, there are currently no copies of ${book.title} available at the ${library}"`
}

var denverLibrary = createLibrary("Denver Public Library");

addBook(denverLibrary, dracula);
addBook(denverLibrary, bornACrime);
addBook(denverLibrary, prideAndPrejudice);
console.log(dracula, bornACrime, prideAndPrejudice);
console.log(denverLibrary);
console.log(denverLibrary.shelves.nonFiction[0].title);
// var result1 = checkoutBook(denverLibrary, "Pride and Prejudice", "fiction");
// var result2 = checkoutBook(denverLibrary, "Born a Crime", "nonFiction");
// console.log(result1);
// console.log(result2);
checkoutBook(denverLibrary, "Pride and Prejudice", "fiction");
checkoutBook(denverLibrary, "Born a Crime", "nonFiction");

console.log(denverLibrary);