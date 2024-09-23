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

// Update all movies to a different year
movies.forEach(movie => movie.year = 2021);

// Add a new method to the director object
movies.forEach(movie => {
    movie.director.addNewMovie = function(newMovie) {
        console.log(`New movie added: ${newMovie}`);
    };
});

// Modify the rating for one of the movies
delete movies[0].ratings[1]; // Delete the current rating
movies[0].ratings[1] = 3; // Add a new rating using bracket notation

console.log(movies);
