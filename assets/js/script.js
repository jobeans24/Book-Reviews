// To Do: Declare global variables

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

//To Do: Add event listener for search form 

// Function to retrieve Api data from google books
function GetGoogleBooksData() {
const googleBooksApiKey = 'AIzaSyBOhwbepdzsM2prXOHmPDAE7zcYPKmbt7U'

let googleBooksApi ='https://www.googleapis.com/books/v1/volumes?q=intitle:' + title + '+inauthor' + author +'insubject' + genre +'&key=' + googleBooksApiKey;

//This is for testing purposes and can be deleted once parameter values are established from modal input
//let googleBooksApi = 'https://www.googleapis.com/books/v1/volumes?q=intitle:AnimalFarm+author:GeorgeOrwell+insubject:ficiton&key=AIzaSyBOhwbepdzsM2prXOHmPDAE7zcYPKmbt7U'

fetch(googleBooksApi)
    .then(function (response) {
     if (response.ok){
        response.json().then(function (data){
        console.log(data);
        
      })
     } else {
      alert("Error: " + response.statusText);
    };     
    });
}

// Function to redirect the page to review.html on click of the Add review button

window.onload = function() {
    let AddreviewButton = document.querySelector('#add-review');

    AddreviewButton.addEventListener('click', function(){
        window.location.href = 'review.html';
    });
};
