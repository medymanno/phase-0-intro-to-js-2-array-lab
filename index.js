// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  return [...cats, name];
  // or cats.concat(name);
}
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}
function prependCat(name) {
  return [name, ...cats];
  // or cats.concat(name) but for start you'd use spread syntax
}
function removeFirstCat() {
  return cats.slice(1);
}

