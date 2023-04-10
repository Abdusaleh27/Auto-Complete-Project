const input = document.querySelector(".fruit");
const suggestions = document.querySelector(".suggestions ul");

let searchItem, searchResults;
const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// handles the search of fruit array and returns the result in a new array
function search(str) {
  let results = [];
  // TODO
  if (str === undefined || str === null || typeof str !== "string")
    return results; // if no argument passed
  if (str.trim().length > 0) {
    results = fruit.filter((word) =>
      word.toLowerCase().includes(str.toLowerCase().trim())
    );
  }
  return results;
}

// handles the event while user is typing
function searchHandler(e) {
  // TODO
  searchItem = e.target.value;
  if (e.key !== "Escape") {
    searchResults = search(searchItem);
  }
  showSuggestions(searchResults, e.key);
}

// populates the ul with suggestions by appending them as li's
function showSuggestions(results, inputVal) {
  // TODO
  suggestions.innerHTML = "";
  if (results.length > 0 && inputVal !== "Escape") {
    for (let result of results) {
      suggestions.appendChild(createLi(result));
    }
  } else if (inputVal === "Escape") {
    suggestions.innerHTML = "";
  }
}

// creates the elements to be appended to the suggestions
function createLi(text) {
  let li = document.createElement("li");
  li.innerText = text;
  li.addEventListener("click", useSuggestion);
  li.class;
  return li;
}
// fills the search bar with the clicked suggested item
function useSuggestion(e) {
  // TODO

  let selected = e.target;
  if (selected !== undefined) {
    input.value = selected.innerText;
    suggestions.innerHTML = "";
  }
}

input.addEventListener("keyup", searchHandler);
//close drop down menu when click outside search box
window.addEventListener("click", () => {
  suggestions.innerHTML = "";
});
//suggestions.addEventListener("click", useSuggestion);
