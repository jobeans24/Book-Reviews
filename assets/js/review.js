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
    const resultsContainer = document.querySelector(".results-container");
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
// Retrieve review data from local storage
// function getReviewData() {
//     let reviewData = localStorage.getItem("reviews");
//     if (reviewData) {
//         return JSON.parse(reviewData);
//     } else {
//         return [];
//     }
// }

// Call the getReviewData function to retrieve the review data
// let reviews = getReviewData();
// console.log(reviews);


// To Do: display review data in the book review format

// Select the review form element
// const reviewForm = document.getElementById("review-form");

// Add event listener for form submission
// reviewForm.addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the values from the review form inputs
    // const title = document.getElementById("title").value;
    // const author = document.getElementById("author").value;
    // const rating = document.getElementById("rating").value;
    // const content = document.getElementById("content").value;
    
    // Create a new review object
    // const newReview = {
    //     title: title,
    //     author: author,
    //     rating: rating,
    //     content: content
    // };
    
    // Save the new review data to local storage
    // saveReviewData(newReview);
    
    // Display the updated reviews on the page
    // displayReviews();
    
    // Reset the form after submission
//     reviewForm.reset();
// });

// Function to save review data to local storage
// function saveReviewData(review) {
//     let reviews = getReviewData();
//     reviews.push(review);
//     localStorage.setItem("reviews", JSON.stringify(reviews));
// }


// Possible To Do: Add Reddit API to share reddit reviews



