const dayOfWeek = 3; 
const themeColor = 'dark';
const notificationStatus = ['new', 'unread' , 'unopened'];
let description=""
const movieRating="G"
const audienceScore = 70
let message = ""
const userInput="hello"
const releaseMonth = 4
//1
switch (dayOfWeek) {
    case 1:
        console.log("Sunday: Classic Movie Marathon");
        break;
    case 2:
        console.log("Monday: Indie Film Night");
        break;
    case 3:
        console.log("Tuesday: Documentary Special");
        break;
    case 4:
        console.log("Wednesday: Comedy Night");
        break;
    case 5:
        console.log("Thursday: Action Blockbusters");
        break;
    case 6:
        console.log("Friday: Horror Fest");
        break;
    case 7:
        console.log("Saturday: Family Movies");
        break;
    default:
        console.log("Invalid day");
}
//2
switch (themeColor) {
    case 'light':
        console.log("Theme set to Light");
        break;
    case 'dark':
        console.log("Theme set to Dark");
        break;
    case 'night':
        console.log("Theme set to Night");
        break;
    default:
        console.log("Unsupported theme color");
}
//3
notificationStatus.forEach(status => {
    switch (status) {
        case 'new':
            console.log("You have new movie notifications!");
            break;
        case 'unread':
            console.log("You have unread movie notifications!");
            break;
        case 'unopened':
            console.log("You have unopened movie notifications!");
            break;
        default:
            console.log("All notifications are read");
    }
});
//4
switch (movieRating) {
    case 'G':
        description = "General Audiences: All ages admitted.";
        break;
    case 'PG':
        description = "Parental Guidance Suggested: Some material may not be suitable for children.";
        break;
    case 'PG-13':
        description = "Parents Strongly Cautioned: Some material may be inappropriate for children under 13.";
        break;
    case 'R':
        description = "Restricted: Under 17 requires accompanying parent or adult guardian.";
        break;
    case 'NC-17':
        description = "Adults Only: No one 17 and under admitted.";
        break;
    default:
        description = "Unknown rating.";
}
console.log(description);
//5
switch (true) {
    case (audienceScore >= 90):
        message = "Must Watch!";
        break;
    case (audienceScore >= 75 && audienceScore <= 89):
        message = "Recommended";
        break;
    case (audienceScore >= 60 && audienceScore <= 74):
        message = "Mixed Reviews";
        break;
    case (audienceScore < 60):
        message = "Skip It";
        break;
    default:
        message = "Invalid score.";
}
//6
switch (typeof (userInput)) {
    case 'string':
        console.log("You entered a string.");
        break;
    case 'number':
        if (userInput >= 0 && userInput <= 10) {
            console.log("You entered a number between 0 and 10.");
        } else {
            console.log("You entered a number.");
        }
        break;
    case 'boolean':
        console.log("You entered a boolean.");
        break;
    default:
        console.log("Unknown type.");
}
//7
switch (releaseMonth) {
    case 1:
    case 2:
    case 3:
         console.log("Q1");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Q2");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Q3");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Q4");
        break;
    default:
        console.log("Invalid month.");
}
