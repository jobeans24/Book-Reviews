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


//To Do: Link review button to review.html
window.onload = function() {
    let AddreviewButton = document.querySelector('#add-review');

    AddreviewButton.addEventListener('click', function(){
        window.location.href = 'review.html';
    });
};

//To Do: Add event listener for search form submission
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const results = { title, author, genre };
    previousResults.push(results);
    localStorage.setItem('previousResults', JSON.stringify(previousResults));
    window.location.href = 'review.html';
});


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