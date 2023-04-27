console.log('hello world')

let message = document.querySelector('#message')

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = "Movie destroyed in the Abaloth!"
}

function addMovie(event){

    event.preventDefault()
    //GET INPUT ELEMENT
    let inputField = document.querySelector('input')

    //SELECT WHERE INPUT WILL GO

    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')

    //TO ADD MOVIES VIA INPUT
    
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    
    movieList = document.querySelector('ul')
    movieList.appendChild(movie)
    
    // ADD ANOTHER 'CLICK' FUNCTION 'CHECKED" TO THE SPAN ELEMENET WHICH IS MOVIETITLE
    
    movieTitle.addEventListener('click', crossOffMovie)
    
    /// REMOVE MOVIES \\\

    //CREATE DELETE BUTTON

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'

    //APPEND BUTTON TO INPUTTED MOVIE OBJECT

    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', deleteMovie) 

    //RESET FIELD TO BLANK
    inputField.value = ""
}

document.querySelector('form').addEventListener('submit', addMovie)


function crossOffMovie (event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = "Movie watched!"
    } else {
        message.textContent = "Oops! Still need to watch that one!"
    }
}