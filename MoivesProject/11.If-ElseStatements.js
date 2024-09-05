const movieRating = 2
const movieBudget = 1000
const movieGenere = "Horror"
const audinceAge = 15
const firstMovieDuration = 120
const seconedtMovieDuration = 120
const viewerAge = 20
const popularityScore=200
const numOfAwards=5
const actorAge=22
const hasInvitation = true
const screeningDuration = 28
const dayOfWeek = "Thursday"
const releaseYear=2001
const ticketPrice=15
const isAdult = true
const movieTitle = "Inside Out 2"
//1
if(movieRating>7){
    console.log("Highly Rated Movie");
}else{
    console.log("This Movie Has Room For Improvment");
}
//2
if(movieBudget>1000000 && movieBudget<100000000){
    console.log("Big-Budget Movie");
}else{
    console.log("Indie Movie");
}
//3
if(movieGenere==="Horror"){
    if(audinceAge>=18){
        console.log("Suitable for the audince");
    }else{
        console.log("Not suitable for the audince");
    }
}else{
    console.log("Suitable for all audince");
}
//4
if(firstMovieDuration===seconedtMovieDuration){
    console.log("Movies Have The Same Duration");
}else if(firstMovieDuration>seconedtMovieDuration){
    console.log("The first movie is longer");
}
//5
if(viewerAge>=13 && viewerAge<=18){
    console.log("Suitable for teens");
}else if(viewerAge>18){
    console.log("Suitable for adults");
}else{
    console.log("Suitable for kids");
}
//6
console.log(popularityScore>=80 ? "Popular Movie" : "Less Known Movie" );
//7
console.log(numOfAwards%2===0 ? "Even Number Of Awards" : "Odd Number Of Awards" );
//8
console.log(actorAge<14 ? "Child Actor" : actorAge<=24?"Young Actor":"Adult Actor");
//9
console.log(hasInvitation ? "Welcome To The Premiere" : "Please Check Your Invitation ");
//10
if(screeningDuration<40){
    console.log("Short Film");
}else if(screeningDuration<120){
    console.log("Feature Film");
}else{
    console.log("Epic Length");
}
//11
if(dayOfWeek==="Saturday" || dayOfWeek==="Sunday"){
    console.log("Special Screening Event!");
}else{
    console.log("Regular Movie Showtimes");
}
//12
if(releaseYear>=2001 && releaseYear<=2100){
    console.log("21st century movie");
}else{
    console.log("20st century movie");
}
//13
if(movieGenere==="Action" && movieRating>=7){
    console.log("Must Watch");
}else{
    console.log("Check reviews before watching");
}
//14
if(ticketPrice<=10){
    console.log("Discount ticket");
}else{
    console.log("Regular price");
}
//15
if (viewerAge>=18 || isAdult){
    console.log("Allowed To Watch");
}else{
    console.log("Age-restricted content");
}
//16
if(movieTitle.search("part")!==-1 || movieTitle.search("2")!==-1){
    console.log("This Movie Is a Sequal");
}else{
    console.log("This Movie Isn't a Sequal ");
}
