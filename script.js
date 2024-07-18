const searchBox = document.getElementById('search-box');
const suggestionList = document.getElementById('suggestion-list');

// Replace with your actual data source (API call, local array, etc.)
const suggestions = [
  'Suggestion 1',
  'Suggestion 2',
  'This is a longer suggestion',
  'Report about something',
];

function showSuggestions(userInput) {
  const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(userInput.toLowerCase()));
  suggestionList.innerHTML = ''; // Clear previous suggestions

  filteredSuggestions.forEach(suggestion => {
    const listItem = document.createElement('li');
    listItem.innerText = suggestion;
    suggestionList.appendChild(listItem);
  });
}

searchBox.addEventListener('keyup', (event) => {
  const userInput = event.target.value;
  showSuggestions(userInput);
});
