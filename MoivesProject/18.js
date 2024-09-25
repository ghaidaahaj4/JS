let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    genre: ["Sci-Fi", "Thriller"],
    releaseYear: 2010,
    ratings: [],
    getAverageRating: function() {
        if (this.ratings.length === 0) return 0;
        let sum = this.ratings.reduce((a, b) => a + b, 0);
        return sum / this.ratings.length;
    },
    addRating: function(rating) {
        this.ratings.push(rating);
    },
    cast: [
        { name: "Leonardo DiCaprio", role: "Cobb" },
        { name: "Joseph Gordon-Levitt", role: "Arthur" }
    ]
};


movie.addRating(5);
movie.addRating(4);
console.log(movie.getAverageRating()); 
console.log(movie.genre[1]); 
console.log(movie["genre"][1]); 


let movies = [
    { title: "Inception", year: 2010, ratings: [5, 4, 5], director: { name: "Christopher Nolan" } },
    { title: "Interstellar", year: 2014, ratings: [5, 5, 4], director: { name: "Christopher Nolan" } }
];


movies.forEach(movie => movie.year = 2021);


movies.forEach(movie => {
    movie.director.addNewMovie = function(newMovie) {
        console.log(`New movie added: ${newMovie}`);
    };
});


delete movies[0].ratings[1]; 
movies[0].ratings[1] = 3; 

console.log(movies);

const movies = [
    { title: "Interstellar", details: { duration: 169, rating: "PG" } },
    { title: "In Time", details: { duration: 109, rating: "PG-13" } },
    { title: "Toy Story", details: { duration: 81, rating: "PG" } }
];


const pgFilms = movies.filter(movie => movie.details.rating === "PG");
console.log(pgFilms);


const totalDuration = movies.reduce((sum, movie) => sum + movie.details.duration, 0);
const averageDuration = totalDuration / movies.length;
console.log(`Average duration: ${averageDuration} minutes`);
