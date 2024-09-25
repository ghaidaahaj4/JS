class Superclass {
    constructor() {
        this.testimonials = [];
        this.dimensionRatings = [];
        this.featureRatings = [];
    }
    getTestimonials() {
        return this.testimonials;
    }
    getDimensionRatings() {
        return this.dimensionRatings;
    }
    getFeatureRatings() {
        return this.featureRatings;
    }
    addTestimonial(testimonial) {
        this.testimonials.push(testimonial);
    }
    addDimensionRating(rating) {
        if (typeof rating === 'number') {
            this.dimensionRatings.push(rating);
        } else {
            console.error("Dimension rating must be a number");
        }
    }
    addFeatureRating(rating) {
        if (typeof rating === 'number') {
            this.featureRatings.push(rating);
        } else {
            console.error("Feature rating must be a number");
        }
    }
}


const mySuperclass = new Superclass();
mySuperclass.addTestimonial("Great product!");
mySuperclass.addDimensionRating(4);
mySuperclass.addFeatureRating(5);

console.log(mySuperclass.getTestimonials()); 
console.log(mySuperclass.getDimensionRatings()); 
console.log(mySuperclass.getFeatureRatings());



class Media {
    constructor(title, year) {
        this.title = title;
        this.year = year;
    }

    displayDetails() {
        return `Title: ${this.title}, Year: ${this.year}`;
    }
}

class Movie extends Media {
    #director;
    #genre;

    constructor(title, year, director, genre) {
        super(title, year);
        this.#director = director;
        this.#genre = genre;
    }

    get director() {
        return this.#director;
    }

    get genre() {
        return this.#genre;
    }

    displayDetails() {
        return `${super.displayDetails()}, Director: ${this.director}, Genre: ${this.genre}`;
    }
}

class Series extends Media {
    #seasons;

    constructor(title, year, seasons) {
        super(title, year);
        this.#seasons = seasons;
    }

    get seasons() {
        return this.#seasons;
    }

    displayDetails() {
        return `${super.displayDetails()}, Seasons: ${this.seasons}`;
    }
}

const myMovie = new Movie("Inception", 2010, "Christopher Nolan", "Sci-Fi");
console.log(myMovie.displayDetails()); 

const mySeries = new Series("Stranger Things", 2016, 4);
console.log(mySeries.displayDetails()); 

class User {
    #username;
    #media = [];
    _friends = [];
  
    constructor(username) {
      this.#username = username;
    }
  
    get username() {
      return this.#username;
    }
  
    addFriend(user) {
      this._friends.push(user);
    }
  
    addMedia(media) {
      this.#media.push(media);
    }
  
    rateMedia(title, rating, author) {
      const media = this.#media.find(m => m.title === title);
      if (media) {
        media.rating = { rating, author };
      } else {
        console.log('Media not found');
      }
    }
  
    metadata() {
      if (this.#media.length === 0) {
        console.log('No media available');
      } else {
        this.#media.forEach(media => {
          console.log(`Title: ${media.title}, Type: ${media.type}, Details: ${media.details}`);
        });
      }
    }
  }
  

  const user1 = new User('Alice');
  const user2 = new User('Bob');
  
  user1.addFriend(user2);
  user1.addMedia({ title: 'Inception', type: 'Movie', details: 'A mind-bending thriller' });
  user1.rateMedia('Inception', 5, 'Alice');
  user1.metadata();
  