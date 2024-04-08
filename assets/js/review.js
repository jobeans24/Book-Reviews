// To Do: Declare global variables
let searchModal = document.getElementById("search-modal");
let reviewModal = document.getElementById("review-modal");
let searchResults = document.querySelector(".results-container");
let previousSearches = document.querySelector(".previous-results");

function openReviewModal() {
    var modal = document.getElementById('review-modal');
    modal.style.display = 'block';
}

// To Do: Link Back button to index.html
// Get the Back button element
const backButton = document.getElementById("back-button");

// Add event listener to the Back button
backButton.addEventListener("click", function() {
    window.location.href = "index.html";
});

document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the review form inputs
    const username = document.getElementById("username").value;
    const bookTitle = document.getElementById("book-title").value;
    const bookGenre = document.getElementById("book-genre").value;
    const bookAuthor = document.getElementById("book-author").value;
    const summary = document.getElementById("summary").value;

    // Create a new review object
    const newReview = {
        username,
        bookTitle,
        bookGenre,
        bookAuthor,
        summary
    };

    // Save the new review data to local storage
    saveReviewData(newReview);

    resetFormAndHide();

    updateDisplaySections();
});

function resetFormAndHide() {
    document.getElementById('review-form').reset();

    document.getElementById('review-modal').style.display = 'none';
}

function updateDisplaySections() {
    displayBookTitles();
}

function saveReviewData(newReview) {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || {};
    // If there's no array for this book title, create one
    if (!reviews[newReview.bookTitle]) {
        reviews[newReview.bookTitle] = [];
    }
    reviews[newReview.bookTitle].push(newReview);
    localStorage.setItem("reviews", JSON.stringify(reviews));
}

function displayBookTitles() {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || {};
    const searchHistoryDiv = document.querySelector(".search-history");
    searchHistoryDiv.innerHTML = ''; // Clear existing buttons

    Object.keys(reviews).forEach(bookTitle => {
        const button = document.createElement("button");
        button.classList.add('previous-search-button')
        button.textContent = bookTitle;
        button.addEventListener("click", () => displayReviewsForBook(bookTitle));
        searchHistoryDiv.appendChild(button);
    });
}


function displayReviewsForBook(bookTitle) {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || {};
    const bookReviews = reviews[bookTitle];
    const resultsContainer = document.querySelector(".reviewResultsContainer");
    resultsContainer.innerHTML = ''; // Clear existing content

    bookReviews.forEach(review => {
        const div = document.createElement("div");
        div.classList.add('results-card');

        div.innerHTML = `
            <h4>${review.bookTitle}</h4>
            <p>Written By: ${review.bookAuthor}</p>
            <p>Genre: ${review.bookGenre}</p>
            <p>Review/Summary: ${review.summary}</p>
            <p>Published by: ${review.username}</p>
        `;
        resultsContainer.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', displayBookTitles);

// To Do : Add NYT Best Sellers API fetch function
// Function to fetch data from the NYT Best Sellers API
 function getBestSellersData() {
//     // API endpoint
     const bestSellersAPI = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=AFYgXoe5pmVDuEA0fr01nWXwxIu38wYX';
     console.log(bestSellersAPI);
    // Fetch data from the API
    fetch(bestSellersAPI)
         .then(function (response) {
             if (response.ok) {
                 response.json().then(function (data) {
                    console.log(data);
                     // To Do: Make use of data

                    // Display books in the nyt-container
                     const nytContainer = document.getElementById('nyt-container');
                    
                     data.results.books.forEach(book => {
                         const card = document.createElement('div');
                         card.classList.add('card');
                         card.innerHTML = `
                             <div class="card-body">
                                 <h5 class="card-title">${book.title}</h5>
                                 <p class="card-text">Author: ${book.author}</p>
                                 <p class="card-text">Publisher: ${book.publisher}</p>
                             </div>
                        `;
                         nytContainer.appendChild(card);
                     });
                    });
            } else {
                alert('Error: ' + response.statusText);
            }
        });
}

//Call the getBestSellersData function to fetch data from the NYT Best Sellers API
 getBestSellersData();
 
// To Do: Generate scroll toggle for NYT best sellers and place them below the review results container
const nytContainer = document.getElementById('nyt-container');
nytContainer.style.overflowY = 'scroll';
nytContainer.style.height = '200px'; 