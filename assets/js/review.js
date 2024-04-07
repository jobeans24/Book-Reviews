// To Do: Declare global variables

// To Do: Link Back button to index.html



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

// Possible To Do: Add Reddit API to share reddit reviews

