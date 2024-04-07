// To Do: Declare global variables
const APIkey = AIzaSyA9qnL3RBSyVXPew7iMQDfMDrtnAcZk780

// Retrieve previous search results from local storage
const previousResults = JSON.parse(localStorage.getItem('previousResults')) || [];

// Display previous search results
const previousResultsContainer = document.getElementById('previous-results');
previousResults.forEach(result => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${result.title}</h5>
            <p class="card-text">${result.author}</p>
            <p class="card-text">${result.genre}</p>
        </div>
    `;
    previousResultsContainer.appendChild(card);
});

// To Do : Add NYT Best Sellers API fetch function
// Function to fetch NYT Best Sellers API data
// function getBestSellersData() {
//     // API endpoint
//     const bestSellersAPI = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=AFYgXoe5pmVDuEA0fr01nWXwxIu38wYX';
//     console.log(bestSellersAPI);

//     // Fetch data from the API
//     fetch(bestSellersAPI)
//         .then(function (response) {
//             if (response.ok) {
//                 response.json().then(function (data) {
//                     console.log(data);
//                     // To Do: Make use of data

//                     // Display books in the nyt-container
//                     const nytContainer = document.getElementById('nyt-container');
//                     data.results.books.forEach(book => {
//                         const card = document.createElement('div');
//                         card.classList.add('card');
//                         card.innerHTML = `
//                             <div class="card-body">
//                                 <h5 class="card-title">${book.title}</h5>
//                                 <p class="card-text">Author: ${book.author}</p>
//                                 <p class="card-text">Genre: ${book.genre}</p>
//                             </div>
//                         `;
//                         nytContainer.appendChild(card);
//                     });
                    
//                 });
//             } else {
//                 alert('Error: ' + response.statusText);
//             }
//         });
// }

// Call the getBestSellersData function to fetch data from the NYT Best Sellers API
getBestSellersData();


//To Do: Link review button to review.html
window.onload = function() {
    let AddreviewButton = document.querySelector('#add-review');

    AddreviewButton.addEventListener('click', function(){
        window.location.href = 'review.html';
    });
};

//To Do: Add event listener for search form submission

//Logic for enabling the search modal
function openSearchModal() {
    var modal = document.getElementById('search-modal');
    modal.style.display = 'block';
}

function openReviewModal() {
    var modal = document.getElementById('review-modal');
    modal.style.display = 'block';
}













// Function to redirect the page to review.html on click of the Add review button

window.onload = function() {
    let AddreviewButton = document.querySelector('#add-review');

    AddreviewButton.addEventListener('click', function(){
        window.location.href = 'review.html';
    });
};