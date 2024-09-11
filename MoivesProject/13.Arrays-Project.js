// 1.
const movieLibrary1 = ['Inception', 'The Matrix', 'Interstellar'];
const movieToCheck1 = 'Inception';
console.log(movieLibrary1.includes(movieToCheck1));

// 2.
const releaseDates2 = ['1999', '2010', '2014'];
const res = releaseDates2.reverse()
console.log(res); 

// 3. 
const movieGenres3 = ['Sci-Fi', 'Action', 'Adventure'];
console.log(movieGenres3.join(", ")); 

// 4.
const movieGenres4 = ['Sci-Fi', 'Action', 'Adventure'];
const genreToCheck4 = 'Action';
console.log(movieGenres4.includes(genreToCheck4)); 

// 5.
const movieTitles5 = ['Inception', 'The Matrix', 'Interstellar'];
const specificMovie5 = 'Interstellar';
console.log(movieTitles5.indexOf(specificMovie5)); 

// 6.
const upcomingReleases6 = ['Avatar', 'Dune', 'Tenet'];
const res6 = upcomingReleases6.slice(0,upcomingReleases6.length-1)
console.log(res6); 

// 7. 
const classicMovies7 = ['The Godfather', 'Citizen Kane'];
const newMovie7 = 'Casablanca';
classicMovies7.splice(0,0,newMovie7)
console.log(classicMovies7);

// 8. 
const filmNoir8 = ['The Maltese Falcon', 'Touch of Evil', 'Double Indemnity'];
const removed = filmNoir8.shift()
console.log(removed);

// 9.
const actionMovies9 = ['Die Hard', 'John Wick'];
const comedyMovies9 = ['Superbad', 'The Hangover'];
const allMovies9 = actionMovies9.concat(comedyMovies9);
console.log(allMovies9); 

// 10.
const movieTitles10 = ['Inception', 'The Matrix', 'Interstellar'];
movieTitles10.sort()
console.log(movieTitles10); 

// 11.
const quotesString11 = "I'll be back,May the Force be with you,To infinity and beyond";
const quotesArray11 = quotesString11.split(",");
console.log(quotesArray11);

// 12. 
const topMovies12 = ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight'];
const n =2
console.log(topMovies12.slice(0,n)); 

// 13.
const movieWishlist13 = ['The Matrix 4', 'Avatar 2', 'Dune'];
for (let i = movieWishlist13.length - 1; i >= 0; i--) {
  movieWishlist13.pop();
}
console.log(movieWishlist13); // Output: []

// 14.
const movies14 = ['Inception', 'Interstellar'];
const newMovie14 = 'Tenet';
movies14.push(newMovie14)
console.log(movies14); 

// 15. 
const movies15 = ['Inception', 'Interstellar', 'Tenet'];
movies15.shift()
console.log(movies15); 

// 16. 
const movies16 = ['Inception', 'Interstellar', 'Tenet'];
console.log(movies16.join(", ")); 

// 17.
const movies17 = ['Inception', 'Interstellar', 'Tenet'];
const movieToFind17 = 'Interstellar';
console.log(movies17.indexOf(movieToFind17)); 

// 18. 
const movies18 = ['Inception', 'Interstellar', 'Tenet'];
console.log(movies18.reverse()); 

// 19.
const releaseYears19 = [2001, 2023, 1998, 2014];
console.log(releaseYears19.sort()); 
