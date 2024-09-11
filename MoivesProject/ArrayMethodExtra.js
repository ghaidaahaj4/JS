const input = [
    { title: "Inception", genre: "Action" },
    { title: "The Dark Knight", genre: "Action" },
    { title: "A Beautiful Mind", genre: "Drama" }
  ];
  const result = {};
  input.forEach((Element) => {
    const genre = Element.genre;
    if (!(genre in result)) {
      result[genre] = [];
    }
    result[genre].push(Element);
    console.log(result);
  });


//2
function findTopRatedMoviesByGenre(movies) {
    const topRatedMovies = {};
    movies.forEach(movie => {
        const { genre, rating } = movie;
        if (!topRatedMovies[genre] || rating > topRatedMovies[genre].rating) {
            topRatedMovies[genre] = movie; }
 }); 
    return topRatedMovies;
}
  

const movies = [
    { title: "Inception", genre: "Action", rating: 8.8 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0 },
    { title: "A Beautiful Mind", genre: "Drama", rating: 8.2 }
];
  
 
const topMoviesByGenre = findTopRatedMoviesByGenre(movies);
console.log(topMoviesByGenre);
  

//3
function countMoviesByGenre(movies) {
    const genreCounts = {};
    movies.forEach(movie => {
        console.log("hi");
        const genre = movie.genre
        if(! genreCounts[genre]){
            genreCounts[genre]=[]
        }
        genreCounts[genre]=[...genreCounts[genre],movie]
        console.log(genreCounts);
    });
    const result = []
    Object.keys(genreCounts).forEach(key=>{
        console.log(key);
        result[key]=genreCounts[key].length
    })
    return result;
  }
  const movies3 = [
    { title: "Inception", genre: "Action" },
    { title: "The Dark Knight", genre: "Action" },
    { title: "A Beautiful Mind", genre: "Drama" }
  ];
  const movieCountsByGenre = countMoviesByGenre(movies3);
  console.log(movieCountsByGenre);
  
  //4