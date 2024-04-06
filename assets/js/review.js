// To Do: Declare global variables

// To Do: Link Back button to index.html

// To Do: Link previous search results to review.html

// To Do: Retrieve previous search results from local storage

// To Do: Display previous search results

// To Do: Retrieve review data from local storage submitted the review modal   

// To Do: display review data in the book review format

// To do: add event listener for review form submission (form can be copied from index.html for the modal here if needed)

// Possible To Do: Add Reddit API to share reddit reviews

// Possible To Do: Add NYT API to share NYT best sellers list on review.html

// To Do: Display bestsellers list in the nyt-container on review.html
fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=AFYgXoe5pmVDuEA0fr01nWXwxIu38wYX')
    .then(response => response.json())
    .then(data => {
        const bestsellers = data.results.books;
        const nytContainer = document.getElementById('nyt-container');
        nytContainer.innerHTML = '';

        bestsellers.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.textContent = book.title;
            nytContainer.appendChild(bookElement);
        });
    })
    .catch(error => {
        console.error('Error fetching bestsellers:', error);
    });



// To Do: Display bestsellers list in the nytcontainer on review.html



    
    
    
    
    