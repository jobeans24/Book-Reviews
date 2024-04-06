// To Do: Declare global variables
let searchModal = document.getElementById("search-modal");
let reviewModal = document.getElementById("review-modal");
let searchResults = document.querySelector(".results-container");
let previousSearches = document.querySelector(".previous-results");

// To Do: Link Back button to index.html
// Get the Back button element
const backButton = document.getElementById("back-button");

// Add event listener to the Back button
backButton.addEventListener("click", function() {
    window.location.href = "index.html";
});

// To Do: Retrieve review data from local storage submitted the review modal  
function getReviewData() {
    let reviewData = localStorage.getItem("reviews");
    if (reviewData) {
        return JSON.parse(reviewData);
    } else {
        return [];
    }
}

// Call the getReviewData function to retrieve the review data
reviews = getReviewData();
console.log(reviews);


// Retrieve review data from local storage
function getReviewData() {
    let reviewData = localStorage.getItem("reviews");
    if (reviewData) {
        return JSON.parse(reviewData);
    } else {
        return [];
    }
}

// Call the getReviewData function to retrieve the review data
let reviews = getReviewData();
console.log(reviews);


// To Do: display review data in the book review format

// To do: add event listener for review form submission (form can be copied from index.html for the modal here if needed)
// Select the review form element
const reviewForm = document.getElementById("review-form");

// Add event listener for form submission
reviewForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the values from the review form inputs
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const rating = document.getElementById("rating").value;
    const content = document.getElementById("content").value;
    
    // Create a new review object
    const newReview = {
        title: title,
        author: author,
        rating: rating,
        content: content
    };
    
    // Save the new review data to local storage
    saveReviewData(newReview);
    
    // Display the updated reviews on the page
    displayReviews();
    
    // Reset the form after submission
    reviewForm.reset();
});

// Function to save review data to local storage
function saveReviewData(review) {
    let reviews = getReviewData();
    reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));
}


// Possible To Do: Add Reddit API to share reddit reviews

