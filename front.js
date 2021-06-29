const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

   function Stringcut(str, num, str2) {
            if (str.length <= 65) {
              return str
            }
            else if(str.length >= num && str2.length < 30)
                return str.slice(0, 65) + '...'
            else if(str.length >= num && str2.length >= 30 && str2.length <= 64)
                return str.slice(0, 30) + '...';
            else if(str.length >= num && str2.length >= 65)
            return str.slice(0, 10) + '...';

          }
function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);
    })
}

function showMovies(data)
{
    
var count = 1;
    for(var i = 0;i<data.length-1;i++)
    {
        const IMG='https://www.themoviedb.org/t/p/w500null';
        if("https://www.themoviedb.org/t/p/w500"+data[i].poster_path != IMG)
        {
         switch (count) 
           {
              case 1:
                  {
                  document.getElementById('desc_1').innerHTML = data[i].original_title;
                  document.getElementById('over1').innerHTML = Stringcut(data[i].overview, 78,data[i].original_title);
                  document.getElementById('img1').src = "https://www.themoviedb.org/t/p/w500"+data[i].poster_path;
                  count++;
                break;
                  }
              case 2:{
                  document.getElementById('desc_2').innerHTML = data[i].original_title;
                  document.getElementById('over2').innerHTML = Stringcut(data[i].overview, 78,data[i].original_title);

                  document.getElementById('img2').src = "https://www.themoviedb.org/t/p/w500"+data[i].poster_path;
                  count++;
      
                break;}
              case 3:{
                  document.getElementById('desc_3').innerHTML = data[i].original_title;
                  document.getElementById('over3').innerHTML = Stringcut(data[i].overview, 78,data[i].original_title);

                  document.getElementById('img3').src = "https://www.themoviedb.org/t/p/w500"+data[i].poster_path;
                  count++;
                break;
              }
              case 4:{
                  document.getElementById('desc_4').innerHTML = data[i].original_title;
                  document.getElementById('over4').innerHTML = Stringcut(data[i].overview, 78,data[i].original_title);

                  document.getElementById('img4').src = "https://www.themoviedb.org/t/p/w500"+data[i].poster_path;
                  count++;
      
                break;}
              case 5:{
                  
              document.getElementById('desc_5').innerHTML = data[i].original_title;
              document.getElementById('over5').innerHTML = Stringcut(data[i].overview, 78,data[i].original_title);

              document.getElementById('img5').src = "https://www.themoviedb.org/t/p/w500"+data[i].poster_path;
              count++;
      
                break;
              }
              case  6:{
                  document.getElementById('desc_6').innerHTML = data[i].original_title;
                  document.getElementById('over6').innerHTML = Stringcut(data[i].overview, 78,data[i].original_title);

                  document.getElementById('img6').src = "https://www.themoviedb.org/t/p/w500"+data[i].poster_path;
                  count++;
      
                  break;
              }
              case  7:{
                  document.getElementById('desc_7').innerHTML = data[i].original_title;
                  document.getElementById('over7').innerHTML = Stringcut(data[i].overview, 78,data[i].original_title);

                  document.getElementById('img7').src = "https://www.themoviedb.org/t/p/w500"+data[i].poster_path;
                  count++;
                  break;
              }
              case  8:{
                  document.getElementById('desc_8').innerHTML = data[i].original_title;
                  document.getElementById('over8').innerHTML = Stringcut(data[i].overview, 78,data[i].original_title);

                  document.getElementById('img8').src = "https://www.themoviedb.org/t/p/w500"+data[i].poster_path;
                  count++;
                  break;
              }
            }
        }
          
    }
}



const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup',(e)=>
{
    const searchString = e.target.value.toLowerCase();
    if(searchString){
        getMovies(searchURL+'&query='+searchString);
    }else{
        getMovies(API_URL);
    }
})
getMovies(API_URL);
