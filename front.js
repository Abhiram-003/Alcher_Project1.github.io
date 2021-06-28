
const API_KEY ='api_key=36d8c7d0811cee628bbd3d27ab07d79a';
const BASE_URL='https://api.themoviedb.org/3';
const API_KEY= BASE_URL+'/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL= 'https://image.tmbd.org/t/pp/w500';
const searchURL = BASE_URL+ '/search/movie?'+API_KEY;

const main= document.getElementById('main');
const form= document.getElementById('main');
const search= document.getElementById('search');
getMovies(API_KEY)

function getMovies(url) {

    fetch(url).then(res => res.json).then(data => {
        
        showMovies(data.results);
    })

  }


  function showMovies(data){

    main.innerHTML='';
    data.forEach(movie =>{
        const{title}=movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('gallery');
        movieEl.innerHTML=`
        
        <div class="gallery">
        <img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="desc">${title}</div>
        </div>
        
        `

        main.appendChild(movieEl);
    })
  }


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTem = search.Value;

    if(searchTem){
        getMovies(searchURL+'&query='+searchTerm)
    }else
    {
        getMovies(API_URL);
    }
})
