const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const ImagePath = "https://image.tmdb.org/t/p/w1280";
const SearchApi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search")

console.log(main, form, search)

//Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.
//The async function declaration declares an async function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
getMovies(apiUrl)
async function getMovies(url){
    const allmoviesData = []
    for (let i=1; i<11; i++){
        const resp = await fetch(url+i);
        console.log(resp)
        const respData = await resp.json();
        console.log(respData)
        console.log(respData.results) // 20 movies data in list of dict.
        allmoviesData.push(...respData.results)
    }
    ShowMovie(allmoviesData)
}

// Indivisuals movie data
function ShowMovie(movies){
    // clear main if there is anything
    main.innerHTML = "";
    const fragment = document.createDocumentFragment();

    console.log(movies[0].title)

    movies.forEach(movie => {
    //This code is using object destructuring to extract the values of poster_path, title, vote_average, and overview from the movie object.
    const {poster_path, title, vote_average, overview} = movie;
    
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie-section")

    aLink = "https://www.google.com/search?q="+title
    movieEl.innerHTML = `
            <img 
                class="poster"
                src="${ImagePath + poster_path}"
                alt="${title}"
            />
        
            <div class="movie-info">
                <a class="movie-link" href="${aLink}" target="_blank">${title}</a>
                <span class="${getClassByVote(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;
    fragment.appendChild(movieEl)
  });
  main.append(fragment);
}

// giving color to the vote calss accordind it's voting average
function getClassByVote(vote){
    if (vote>=8){
        return "green";
    }
    else if (vote>=5){
        return "orange";
    }
    else{
        return "red";
    }
}

// form
form.addEventListener("submit", (e) => {
    e.preventDefault() //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form.
    
    const searchTerm = search.value;
    if (searchTerm){
        getMovies(SearchApi + searchTerm)

        search.value = "";
    }
});
