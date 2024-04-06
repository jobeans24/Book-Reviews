// To Do: Declare global variables
//const APIkey = AIzaSyA9qnL3RBSyVXPew7iMQDfMDrtnAcZk780

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
function redirectToReviewPage() {
    window.location.href = "review.html";
}

// Function to retrieve Api data from google books
    
//To Do: Add event listener for search form submission
// Select the search form element
const searchForm = document.querySelector("form");

// Add event listener for form submission
searchForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the values from the search form inputs
    const title = document.getElementById("search-title").value;
    const author = document.getElementById("search-author").value;
    const genre = document.getElementById("search-genre").value;
    
    // Perform any necessary actions with the search values (e.g., fetch data, display results)
    
    // Reset the form after submission
    searchForm.reset();
});


//Logic for enabling the search modal
function openSearchModal() {
    var modal = document.getElementById('search-modal');
    modal.style.display = 'block';

    //search submit event listener
    $('#submitsearch').on('click', handleSearchBooks) 
           
};

function openReviewModal() {
    var modal = document.getElementById('review-modal');
    modal.style.display = 'block';
}

//handle search for books
function handleSearchBooks(event) {
    event.preventDefault();

    let title = $('#search-title').val().trim();
    let author = $('#search-author').val().trim();
    let genre = $('#search-genre').val().trim();
    
    console.log('Title', title);
    console.log('Author', author);
    console.log('Genre', genre);

    getOpenLibaryData(title, author, genre);

};
//Function for openlibrary
function getOpenLibaryData(title, author, genre) {
    
    let openLibraryApi ='https://openlibrary.org/search.json?title=' + title + '&author=' + author + '&subject=' + genre;
    console.log(openLibraryApi); 

    fetch(openLibraryApi)
        .then(function (response) {
         if (response.ok){
            response.json().then(function (data){
            console.log(data);
            //Todo: make use of data

            //after processing search return to index.html
            window.location.href ='index.html';
            
          });
         } else {
          alert("Error: " + response.statusText);
        };     
        });
    };

// Function to redirect the page to review.html on click of the Add review button

window.onload = function() {
    let AddreviewButton = document.querySelector('#add-review');

    AddreviewButton.addEventListener('click', function(){
        window.location.href = 'review.html';
    });

};

