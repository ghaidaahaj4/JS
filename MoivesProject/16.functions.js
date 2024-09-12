const movieRatings = [];

function initializeRatings() {
    movieRatings = [];
}
function addRating(movieTitle, rating) {
    movieRatings.push([movieTitle, rating]);
}
addRating("hi",7)
console.log(movieRatings);

function findRating(movieTitle) {
    const movie = movieRatings.find(movie => movie[0] === movieTitle);
    if (movie) {
        console.log(`Rating of ${movieTitle}: ${movie[1]}`);
    } else {
        console.log("Movie was not found.");
    }
}

function updateRating(movieTitle, newRating) {
    const movie = movieRatings.find(movie => movie[0] === movieTitle);
    if (movie) {
        movie[1] = newRating;
    } else {
        console.log("Movie was not found.");
    }
}

function removeRating(movieTitle) {
    const index = movieRatings.findIndex(movie => movie[0] === movieTitle);
    if (index !== -1) {
        movieRatings.splice(index, 1);
    } else {
        console.log("Movie was not found.");
    }
}

function listMovies() {
    movieRatings.forEach(movie => {
        console.log(`${movie[0]} - ${movie[1]}`);
    });
}
function highestRatedMovie() {
    if (movieRatings.length === 0) {
        console.log("No movies found.");
        return;
    }
    let highestRated = movieRatings[0];
    movieRatings.forEach(movie => {
        if (movie[1] > highestRated[1]) {
            highestRated = movie;
        }
    });
    console.log(`Highest rated movie: ${highestRated[0]} with rating ${highestRated[1]}`);
}
function calculateAverageRating(ratings) {
    const total = ratings.reduce((sum, rating) => sum + rating, 0);
    return total / ratings.length;
}

const ratings = [3, 4, 5, 3, 5];
console.log(calculateAverageRating(ratings));

function findHighestRating(ratings) {
    return Math.max(...ratings);
}
const ratings2 = [3, 4, 5, 3, 5];
console.log(findHighestRating(ratings2)); 

function ratingsAboveThreshold(ratings, threshold) {
    return ratings.filter(rating => rating > threshold);
}
const ratings3 = [3, 4, 5, 2, 1, 5];
console.log(ratingsAboveThreshold(ratings3, 3)); 

function countInRatingRange(ratings, lowerBound, upperBound) {
    return ratings.filter(rating => rating >= lowerBound && rating <= upperBound).length;
}
console.log(countInRatingRange([3, 4, 5, 2, 1, 5], 4, 5)); 

function uniqueRatings(ratings) {
    return ratings.filter((rating, index) => ratings.indexOf(rating) === index);
}
console.log(uniqueRatings([5, 3, 4, 3, 5, 4, 5])); 

function mergeRatings(ratings1, ratings2) {
    const combined = [...ratings1, ...ratings2];
    return combined.filter((rating, index) => combined.indexOf(rating) === index);
}
console.log(mergeRatings([5, 3, 4], [2, 3, 5])); 

function averageRating(ratings) {
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return sum / ratings.length;
}
function ratingsDifferential(ratings1, ratings2) {
    const avg1 = averageRating(ratings1);
    const avg2 = averageRating(ratings2);
    return Math.abs(avg1 - avg2);
}

console.log(ratingsDifferential([4, 4, 4, 4, 5], [3, 3, 3, 3])); 

//extra 
function sortRatings(ratings) {
    let sortedRatings = [...ratings];
    for (let i = 0; i < sortedRatings.length; i++) {
        for (let j = 0; j < sortedRatings.length - 1; j++) {
            if (sortedRatings[j] > sortedRatings[j + 1]) {
                let temp = sortedRatings[j];
                sortedRatings[j] = sortedRatings[j + 1];
                sortedRatings[j + 1] = temp;
            }
        }
    }
    return sortedRatings;
}
console.log(sortRatings([5, 3, 4, 2, 1])); 

function averageOfTopN(ratings, N) {
    let sortedRatings = sortRatings(ratings);
    let topNRatings = sortedRatings.slice(-N);
    let sum = topNRatings.reduce((acc, rating) => acc + rating, 0);
    return sum / N;
}
console.log(averageOfTopN([3, 1, 5, 4, 2], 3)); 

function ratingFrequency(ratings) {
    let frequencyMap = {};
    ratings.forEach(rating => {
        frequencyMap[rating] = (frequencyMap[rating] || 0) + 1;
    });
    return Object.entries(frequencyMap).map(([rating, count]) => [parseInt(rating), count]);
}
console.log(ratingFrequency([3, 4, 3, 5, 4, 5, 5])); 

function normalizeRatings(ratings, newMin, newMax) {
    let oldMin = Math.min(...ratings);
    let oldMax = Math.max(...ratings);
    return ratings.map(rating => ((rating - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin);
}

console.log(normalizeRatings([1, 2, 3, 4, 5], 0, 10)); 




