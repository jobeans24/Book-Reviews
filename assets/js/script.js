openSearchModal = () => {
    // Open the search modal
    searchModal.style.display = 'block';
    }

openReviewModal = () => {
    // Open the review modal
    reviewModal.style.display = 'block';
    }
// Get the search button element
const searchButton = document.getElementById('search-button');

// Get the search modal element
const searchModal = document.getElementById('search-modal');

// Add click event listener to the search button
searchButton.addEventListener('click', () => {
  // Open the search modal
  searchModal.style.display = 'block';
});

// Get the close button element
const closeButton = document.getElementById('close-button');

// Add click event listener to the close button
closeButton.addEventListener('click', () => {
  // Close the search modal
  searchModal.style.display = 'none';
});

// Get the search input element
const searchInput = document.getElementById('search-input');

// Add keyup event listener to the search input
searchInput.addEventListener('keyup', () => {
  // Get the search query
  const query = searchInput.value.toLowerCase();

  // Get all the cards
  const cards = document.querySelectorAll('.card');

  // Loop through all the cards
  cards.forEach((card) => {
    // Get the card title
    const title = card.querySelector('.card-title').textContent.toLowerCase();

    // Check if the title contains the query
    if (title.includes(query)) {
      // Show the card
      card.style.display = 'block';
    } else {
      // Hide the card
      card.style.display = 'none';
    }
  });
});

// Get review button element
const reviewButton = document.getElementById('review-button');

// Get review modal element
const reviewModal = document.getElementById('review-modal');

// Add click event listener to the review button
reviewButton.addEventListener('click', () => {
  // Open the review modal
  reviewModal.style.display = 'block';
});




