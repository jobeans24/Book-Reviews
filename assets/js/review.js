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

// add code for add review button and review modal  
// Get the Add Review button element
const addReviewButton = document.getElementById("add-review");

// Add event listener to the Add Review button
addReviewButton.addEventListener("click", function() {
    reviewModal.style.display = "block";
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

// Display review data on the page
// Function to display review data in the review-card format
function displayReviews() {
    // Get the review data from local storage
    const reviews = getReviewData();
    
    // Select the review card container element
    const reviewCardContainer = document.querySelector(".review-card-container");
    
    // Clear the existing review cards
    reviewCardContainer.innerHTML = "";
    
    // Loop through the reviews and create a review card for each review
    reviews.forEach(function(review) {
        // Create a div element for the review card
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");
        
        // Create elements for the review details
        const titleElement = document.createElement("h2");
        titleElement.textContent = review.title;
        
        const authorElement = document.createElement("p");
        authorElement.textContent = "By " + review.author;
        
        const ratingElement = document.createElement("p");
        ratingElement.textContent = "Rating: " + review.rating;
        
        const contentElement = document.createElement("p");
        contentElement.textContent = review.content;
        
        // Append the review details to the review card
        reviewCard.appendChild(titleElement);
        reviewCard.appendChild(authorElement);
        reviewCard.appendChild(ratingElement);
        reviewCard.appendChild(contentElement);
        
        // Append the review card to the review card container
        reviewCardContainer.appendChild(reviewCard);
    });
}

// Call the displayReviews function to display the review data
displayReviews();




// To Do: display review data in the book review format

// To do: add event listener for review form submission (form can be copied from index.html for the modal here if needed)
// Select the review form element
const reviewForm = document.getElementById("review-modal");

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