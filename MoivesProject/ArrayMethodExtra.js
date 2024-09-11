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
  function countMoviesByYearForGenre(movies, genre) {
    const yearCounts = {};
    movies.forEach(movie => {
      if (movie.genre === genre) {
        const { year } = movie; 
        yearCounts[year] = (yearCounts[year] || 0) + 1;
      }
    });
  
    return yearCounts;
  }

  const movies4 = [
    { title: "Inception", genre: "Action", year: 2010 },
    { title: "The Dark Knight", genre: "Action", year: 2008 },
    { title: "A Beautiful Mind", genre: "Drama", year: 2001 }
  ];
  const genre = "Action";
  const moviesCountByYear = countMoviesByYearForGenre(movies4, genre);
  console.log(moviesCountByYear);
  
  //5
  function getMoviesWithinRatingRange(movies, lowerBound, upperBound) {
    const filteredMovies = movies.filter(movie => 
      movie.rating >= lowerBound && movie.rating <= upperBound
    );
  
    return filteredMovies.map(movie => movie.title);
  }
  
  const movies5 = [
    { title: "Inception", rating: 8.8 },
    { title: "The Dark Knight", rating: 9.0 },
    { title: "A Beautiful Mind", rating: 8.2 }
  ];
  const lowerBound = 8.5;
  const upperBound = 9.0;
  
  const moviesWithinRange = getMoviesWithinRatingRange(movies5, lowerBound, upperBound);
  console.log(moviesWithinRange);
  
  //6
  function findUniqueGenres(movies) {
    const uniqueGenres = new Set();
  
    movies.forEach(movie => {
      uniqueGenres.add(movie.genre); 
    });
  

    return Array.from(uniqueGenres);
  }
  
const movies6 = [
    { title: "Inception", genre: "Action" },
    { title: "The Dark Knight", genre: "Action" },
    { title: "A Beautiful Mind", genre: "Drama" }
  ];

  const uniqueGenres = findUniqueGenres(movies6);
  console.log(uniqueGenres);
  
  //7
  function deepCopyMovies(movies) {
    const deepCopiedMovies = movies.map(movie => ({ ...movie }));
    return deepCopiedMovies;
  }
  
  const originalMovies = [
    { title: "Inception", genre: "Action" },
    { title: "The Dark Knight", genre: "Action" }
  ];
  
  const copiedMovies = deepCopyMovies(originalMovies);
  console.log(copiedMovies); 

  //8
  function sortMoviesByRatingAndVotes(movies) {
  const sortedMovies = movies.slice().sort((a, b) => {
    if (b.rating !== a.rating) {
      return b.rating - a.rating;
    } else {
      return b.votes - a.votes; 
    }
  });

  return sortedMovies;
}

const movies8 = [
  { title: "Inception", rating: 8.8, votes: 2000 },
  { title: "The Dark Knight", rating: 9.0, votes: 1500 },
  { title: "A Beautiful Mind", rating: 8.8, votes: 3000 }
];
const sortedMovies = sortMoviesByRatingAndVotes(movies8);
console.log(sortedMovies);

//9
function normalizeRatings(movies) {
    if (movies.length === 0) return [];
    const ratings = movies.map(movie => movie.rating);
    const minRating = Math.min(...ratings);
    const maxRating = Math.max(...ratings);
    const normalizedMovies = movies.map(movie => {
      const normalizedRating = ((movie.rating - minRating) / (maxRating - minRating)) * 100;
      return { ...movie, rating: parseFloat(normalizedRating.toFixed(1)) };
    });
  
    return normalizedMovies;
  }
  
  const movies9 = [
    { title: "Inception", rating: 8.8 },
    { title: "The Dark Knight", rating: 9.0 },
    { title: "A Beautiful Mind", rating: 8.2 }
  ];
  
  const normalizedMovies = normalizeRatings(movies);
  console.log(normalizedMovies);
