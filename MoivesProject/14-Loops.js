// 1
const movieTitles1 = ['Inception', 'The Dark Knight', 'Interstellar'];
let longestName = "";

for (let i = 0; i < movieTitles1.length; i++) {
  if (movieTitles1[i].length > longestName.length) {
    longestName = movieTitles1[i];
  }
}
console.log(longestName);

// 2
const movieRatings2 = [8.3, 7.5, 9.0, 8.7];
let sum = 0;
for (let i = 0; i < movieRatings2.length; i++) {
  sum += movieRatings2[i];
}
const averageRating = sum / movieRatings2.length;
console.log(averageRating.toFixed(2)); 

// 3
const movieTitles3 = ['Inception', 'The Dark Knight', 'Interstellar'];
const reversedList = [];
for (let i = movieTitles3.length - 1; i >= 0; i--) {
  reversedList.push(movieTitles3[i]);
}
console.log(reversedList);

// 4
const movieRatings4 = [8.3, 7.5, 9.0, 8.7];
for (let i = 0; i < movieRatings4.length; i++) {
    movieRatings4[i]=movieRatings4[i] + 0.5;
}
console.log(movieRatings4); 

// 5
const movieRatings5 = [8.3, 7.5, 9.0, 8.7];
const highRatings = [];
for (let i = 0; i < movieRatings5.length; i++) {
  if (movieRatings5[i] > 8.0) {
    highRatings.push(movieRatings5[i]);
  }
}
console.log(highRatings); 

// 6
const movieRatings6 = [8.3, 8.7, 9.0, 8.7, 8.3];
const specificRating6 = 8.7;
let countSpecificRating = 0;
for (let i = 0; i < movieRatings6.length; i++) {
  if (movieRatings6[i] === specificRating6) {
    countSpecificRating++;
  }
}
console.log(countSpecificRating); 

// 7
const watchedList7 = ['Inception', 'The Dark Knight'];
const wishList7 = ['Interstellar', 'Inception'];
const commonMovies = [];
for (let i = 0; i < watchedList7.length; i++) {
  for (let j = 0; j < wishList7.length; j++) {
    if (watchedList7[i] === wishList7[j]) {
      commonMovies.push(watchedList7[i]);
    }
  }
}
console.log(commonMovies); 

// 8
const movieRatings8 = [8.3, 7.5, 9.0, 8.7];
const minRating8 = 8.0;
let allAboveThreshold = true;
for (let i = 0; i < movieRatings8.length; i++) {
  if (movieRatings8[i] < minRating8) {
    allAboveThreshold = false;
    break;
  }
}
console.log(allAboveThreshold); 

// 9
const movieRatings9 = [8.3, 7.5, 9.0, 8.7];
let maxRating = movieRatings9[0];
for (let i = 1; i < movieRatings9.length; i++) {
  if (movieRatings9[i] > maxRating) {
    maxRating = movieRatings9[i];
  }
}
console.log(maxRating); 

// 10
const movieRatings10 = [8.3, 7.5, 9.0, 8.7];
let highestRating = movieRatings10[0];
for (let i = 1; i < movieRatings10.length; i++) {
  if (movieRatings10[i] > highestRating) {
    highestRating = movieRatings10[i];
  }
}
console.log(highestRating); 

// 11
const ratingsList11 = [[8, 7, 9], [6, 8, 7], [9, 9, 10]];
const averages = [];
for (let i = 0; i < ratingsList11.length; i++) {
  let sum = 0;
  for (let j = 0; j < ratingsList11[i].length; j++) {
    sum += ratingsList11[i][j];
  }
  averages.push(sum / ratingsList11[i].length);
}
console.log(averages); 

// 12
const movieRatings12 = [8, 5, 9];
for (let i = 0; i < movieRatings12.length; i++) {
  let bar = '';
  for (let j = 0; j < movieRatings12[i]; j++) {
    bar += '*';
  }
  console.log(bar);
}


// 13
const movieRatings13 = [8.3, 7.5, 9.0, 8.7];
for (let i = 0; i < movieRatings13.length; i++) {
  for (let j = i + 1; j < movieRatings13.length; j++) {
    if (movieRatings13[i] > movieRatings13[j]) {
      const temp = movieRatings13[i];
      movieRatings13[i] = movieRatings13[j];
      movieRatings13[j] = temp;
    }
  }
}
console.log(movieRatings13); 

// 14
const reviewMatrix14 = [[7, 8.5], [6, 9], [8, 7.5]];
let totalRatings = 0;
for (let i = 0; i < reviewMatrix14.length; i++) {
  for (let j = 0; j < reviewMatrix14[i].length; j++) {
    totalRatings += reviewMatrix14[i][j];
  }
}
console.log(totalRatings); 

// 15
const ratingMatrix15 = [[7, 8.5], [6, 9], [8, 7.5]];
const highestInEachCategory = [];
for (let i = 0; i < ratingMatrix15.length; i++) {
  let maxRating = ratingMatrix15[i][0];
  for (let j = 1; j < ratingMatrix15[i].length; j++) {
    if (ratingMatrix15[i][j] > maxRating) {
      maxRating = ratingMatrix15[i][j];
    }
  }
  highestInEachCategory.push(maxRating);
}
console.log(highestInEachCategory); 

// 16
const genreAcclaimMatrix16 = [[5, 7], [8, 6], [9, 7]];
const acclaimedMoviesCount = [];
for (let i = 0; i < genreAcclaimMatrix16.length; i++) {
  let count = 0;
  for (let j = 0; j < genreAcclaimMatrix16[i].length; j++) {
    if (genreAcclaimMatrix16[i][j] >= 8) {
      count++;
    }
  }
  acclaimedMoviesCount.push(count);
}
console.log(acclaimedMoviesCount); 

// 17
const blockbusterRatingMatrix17 = [[7, 8.5], [9.5, 9], [8, 7.5]];
const sumBlockbusterRatings = [];
for (let i = 0; i < blockbusterRatingMatrix17.length; i++) {
  let sum = 0;
  for (let j = 0; j < blockbusterRatingMatrix17[i].length; j++) {
    sum += blockbusterRatingMatrix17[i][j];
  }
  sumBlockbusterRatings.push(sum);
}
console.log(sumBlockbusterRatings); 

// 18
const directorRatingMatrix18 = [[7, 8.5], [6, 9], [8, 7.5]];
const directorAverages = [];
for (let i = 0; i < directorRatingMatrix18.length; i++) {
  let sum = 0;
  for (let j = 0; j < directorRatingMatrix18[i].length; j++) {
    sum += directorRatingMatrix18[i][j];
  }
  directorAverages.push(sum / directorRatingMatrix18[i].length);
}
console.log(directorAverages); 
