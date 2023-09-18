/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
let person = {
  name: "Mohammad",
  age: 29,
  city: "Kuwait City",
};
console.log(person);
/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.email = "mohammad@email.com";
console.log(person);
/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
const hasKey = (obj, key) => {
  if (obj[key]) {
    console.log(true + ` The object has key: "${key}".`);
  } else {
    console.log(false + ` "${key}" key not found.`);
  }
};
const user = {
  name: "John",
  age: 25,
};
hasKey(user, "name");
hasKey(user, "city");

/******************************
	Q4) Create a function that checks if all properties in an object have values
 (i.e., no properties are undefined or null).
- running the function on this object should return false
		const myObject = {
		  name: "John",
		  age: 30,
		  city: null,
		};
- running the function on this object should return true 
		const myObject = {
		  name: "John",
		  age: 30,
		  city: "Kuwait",
		};
********************************/
const checkKey = (obj) => {
  arr = Object.values(obj);
  console.log(arr);
  let answer = "";
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == undefined || null) {
      answer = false;
      break;
    } else {
      answer = true;
    }
  }
  console.log(answer);
};

const myObject = {
  name: "John",
  age: 30,
  city: "Kuwait City",
};

const myObject2 = {
  name: "John",
  age: 30,
  city: null,
};
checkKey(myObject);
checkKey(myObject2);

//***********************************************/
const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];

/******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to log the titles of all the movies.
  ********************************/
const moviesLog = (arr) => {
  arr.forEach((x) => console.log(x.title));
};
moviesLog(movies);
/******************************
      Q6) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
const moviesIn1994 = (arr) => {
  newArr = arr.filter((x) => x.year == 1994);
  console.log(newArr.length);
};
moviesIn1994(movies);
/******************************
      Q7) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
const updateGenre = (arr, movName, newGenre) => {
  const newArr = arr.map((x) => {
    if (x.title == movName) {
      x.genre = newGenre;
    }
    return x;
  });
  console.log(newArr);
};
updateGenre(movies, "The Dark Knight", "Action/Drama");
