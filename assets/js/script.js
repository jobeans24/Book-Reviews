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

        </div>
    `;
    previousResultsContainer.appendChild(card);
});


// Function to fetch NYT Best Sellers API data
// function getBestSellersData() {
//     // API endpoint
//     const bestSellersAPI = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=AFYgXoe5pmVDuEA0fr01nWXwxIu38wYX';
//     console.log(bestSellersAPI);

    // Fetch data from the API
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
// getBestSellersData();


//To Do: Link review button to review.html
window.onload = function() {
    let AddreviewButton = document.querySelector('#add-review');

    AddreviewButton.addEventListener('click', function(){
        window.location.href = 'review.html';
    });
};

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
    
    let openLibraryApi ='https://openlibrary.org/search.json?';
    //if else statment to sort provided parameters
    if (title) {
        openLibraryApi += 'title=' + title;
        if (author) {
            openLibraryApi += '&author=' + author;
            if (genre) {
                openLibraryApi += '&subject=' + genre           
             }
        } else if (genre) {
            openLibraryApi += '&subject=' + genre
        }
    } else if (author) {
        openLibraryApi += 'author=' + author;
        if (genre) {
            openLibraryApi += '&subject=' + genre;
        }
    } else if (genre) {
        openLibraryApi += 'subject=' + genre;
    } else {
        alert('Must input at least one search parameter');
        return;
    }
    
    console.log(openLibraryApi); 

    fetch(openLibraryApi)
        .then(function (response) {
         if (response.ok){
            response.json().then(function (data){
            console.log(data);
            
        
            //Todo: make use of data
            renderSearchResults(data);
            //after processing search return to index.html
         
            $('#search-modal').hide();
            
          });
         } else {
          alert("Error: " + response.statusText);
        };     
        });
}
//Function to render serch results
function renderSearchResults(searchResults) {
    if (searchResults.length === 0) {
        alert("Search results not available");
        return;
    }

    // Clear previous search results
    document.getElementById('searchResultsContainer').innerHTML = '';

    searchResults.docs.forEach(doc => {
        const resultsCard = document.createElement('div');
        resultsCard.classList.add('resultsCard');
        
        resultsCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Title: ${doc.title}</h5>
                <h5 class="card-text">Author: ${doc.author_name}</h5>
                <h5 class="card-text">Ratings: ${doc.rating_average}</h5>
            </div>
        `;

        document.getElementById('searchResultsContainer').appendChild(resultsCard);
    });
}

// searchResults.docs.forEach(doc => {

//     let resultsCard = $('<div>').addClass('resultCard');
    
//     let title = $('<h5>').text('Title: ' + doc.title);
//     let author = $('<h5>').text('Author: ' + doc.author_name);
//     let ratings = $('<h5>').text('Ratings: ' + doc.rating_average);
//     //appending results to results card
//     resultsCard.append(title, author, ratings);
//     //appending results card to container
//     $('#searchResultsContainer').append(resultsCard);
// });
// };

// Function to redirect the page to review.html on click of the Add review button


window.onload = function() {
    let AddreviewButton = document.querySelector('#add-review');

    AddreviewButton.addEventListener('click', function(){
        window.location.href = 'review.html';
    });

};

//search submit event listener
$('#submitsearch').on('click', handleSearchBooks)

