// index.js

// Array of phrases
const phrases = [
    'After choosing an opponent, you have 30 seconds to find the ugliest website. The other players select the ugliest one. Take 2 components !',
    'After choosing an opponent, you have 30 seconds to draw … incorporating an element chosen by the other players. The other players select the best one. Take 1 component !',
    'After choosing an opponent, you have to list one by one wireframe software. The first one who has no more ideas loses the duel. Take 1 component !',
    'After choosing an opponent, you have to draw Figma\'s logo, using only your overflowing imagination. Take 2 components !',
    'After choosing an opponent, you have to list one by one thing that are irritating when creating a wireframe. The first one who has no more ideas loses the duel. Take 2 components !',
    'After choosing an opponent, you have to list one by one the keyboard shortcuts you know (mentioning the software that goes with them). The first one who has no more ideas loses the duel. Take 3 components !',
  ];
  
  // Function to generate and display a random phrase
  function generateRandomPhrase() {
    // Get a random index from the phrases array
    const randomIndex = Math.floor(Math.random() * phrases.length);
  
    // Get the random phrase
    const randomPhrase = phrases[randomIndex];
  
    // Display the random phrase
    document.getElementById('displayPhrase').textContent = randomPhrase;
  }
  
  // Add click event listener to the button
  document.getElementById('generateButton').addEventListener('click', generateRandomPhrase);
  