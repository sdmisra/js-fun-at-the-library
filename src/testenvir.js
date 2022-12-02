function shelfBook(name, shelf) {
    if (shelf.length < 3) {
      shelf.unshift(name);
    }
  }
  var sciFiShelf = [];
  var hyperion = {
    title: "Hyperion",
    mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
    pageCount: 482,
    genre: "sciFi"
  };
  var dune = {
    title: "Dune",
    mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
    pageCount: 421,
    genre: "sciFi"
  };
  var endersGame = {
    title: "Ender's Game",
    mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
    pageCount: 324,
    genre: "sciFi"
  };
  var caseysBook = {
    title: "The Robot Kitty",
    mainCharacter: { name: "Coda", age: 15, pronouns: "he/him" },
    pageCount: 201,
    genre: "sciFi"
  };

shelfBook(hyperion, sciFiShelf);
shelfBook(dune, sciFiShelf);
shelfBook(endersGame, sciFiShelf);
shelfBook(caseysBook, sciFiShelf);
console.log(sciFiShelf);
console.log(sciFiShelf[0])
console.log(sciFiShelf);

function unShelfBook(name, shelf) {
    for (var i = 0; i < shelf.length; i++) {
    if (name === shelf['title']) {
        shelf.splice(i, 1)
    }
}
}