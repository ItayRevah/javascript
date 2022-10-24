let x = 10

let y = 5

let result = x + y;

// alert(result);


function calc() {

    let num1 = prompt('Enter first number');

    let num2 = prompt('Enter second number');

    let result = Number(num1) + Number(num2);

    document.getElementById('hw').innerHTML = `${num1} + ${num2} = ${result}`;

    // alert(`${num1} + ${num2} = ${result}`);
}


function o_o() {

    let number1 = document.getElementById('_num1').value;

    let number2 = document.getElementById('_num2').value;

    let result = Number(number1) + Number(number2);

    document.getElementById('hw3').innerHTML = `${number1} + ${number2} = ${result}`;
}


function _calculate(x, y) {
    let result = Number(x) + Number(y);
    document.getElementById('hw3').innerHTML = `${x} + ${y} = ${result}`;
}



function check() {
    let numberOne = Number(document.getElementById('num1').value);
    let numberTwo = Number(document.getElementById('num2').value);

    if (numberOne > numberTwo) {
        document.getElementById('_special').innerHTML = `${numberOne} Is Greater Than ${numberTwo} 🔼`;
    }

    else if (numberOne == numberTwo) {
        document.getElementById('_special').innerHTML = `${numberOne} Is Equal To ${numberTwo} 🤝`;
    }

    else {
        document.getElementById('_special').innerHTML = `${numberOne} Is Less Than ${numberTwo} 🔽`;
    }
}



let array_ = [10, 20, 30, 40, "Netanel", 3.4, -5, -10.5];
console.log(array_); // מדפיס את כל המערך
console.log(`Array Length Is: ${array_.length}`);
console.log(array_[0]); // 10
console.log(array_[2]); // 30
console.log(array_[4]); // "Netanel"

//array_[array_.length - 1 להדפיס את המשתנה האחרון במערך
console.log(`The Last Element In The Array Is: ${array_[array_.length - 1]}`)



let movies = [
    {
        title: "The Dark Knight",
        rating: 9.5,
        year: 2008,
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._SL1500_.jpg",
        linkUrl: "https://www.imdb.com/title/tt0468569/",
        ratingUrl: "https://www.imdb.com/title/tt0468569/ratings/"
    },
    {
        title: "The Dark Knight",
        rating: 9.5,
        year: 2008,
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._SL1500_.jpg",
        linkUrl: "https://www.imdb.com/title/tt0468569/",
        ratingUrl: "https://www.imdb.com/title/tt0468569/ratings/"
    }
]

function displayMovies() {

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

    }

}



for (let i = 0; i < 100; i++) {
    console.log(`Hey Netanel i is equal to: ${i}`);
}



let _a_r_r_a_y_ = [90584096804, 'lear', x, y];

//מדפיס את כל המערך
console.log(_a_r_r_a_y_);

//מדפיס את האובייקט הראשון במערך
console.log(_a_r_r_a_y_[0]);    // screenshot: shift + win + S

// להשיג את האובייקט האחרון במערך. בכך שאני ניגש למיקום על ידי שימוש בגודל המערך שהוא שווה כרגע ל4 ופחות אחד
console.log(_a_r_r_a_y_[_a_r_r_a_y_.length - 1]);
console.log(_a_r_r_a_y_.length);


//1
let array = ['text', 'lear', x, y, 'dfgdf', 'lear', 'dfgdfgdrdrg', 'last'];

console.log(`The Fourth element is ${array[3]}`)

//2
console.log(`Array Length Is: ${array.length} The Last Element Is ${array.length[array.length - 1]}`);


let _movies = [
    {
        title: "Batman The Dark Knight",
        year: 2008,
        rate: 9,
        imageUrl: "https://m.media-amazon.com/images/I/91KkWf50SoL._SL1500_.jpg",
        movieUrl: "https://www.imdb.com/title/tt0468569",
        rateUrl: "https://www.imdb.com/title/tt0468569/ratings"
    },
    {
        title: "Batman The Dark Knight Rises",
        year: 2012,
        rate: 8.4,
        imageUrl: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/63b5bed74b1870ba6b8615c181ccecca1dce574cc57005212492567ae6060f83._RI_V_TTW_.jpg",
        movieUrl: "https://www.imdb.com/title/tt1345836/",
        rateUrl: "https://www.imdb.com/title/tt1345836/ratings"
    },
    {
        title: "Taxi Driver",
        year: 1976,
        rate: 8.2,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        movieUrl: "https://www.imdb.com/title/tt0075314/",
        rateUrl: "https://www.imdb.com/title/tt0075314/ratings"
    },
    {
        title: "2001: A Space Odyssey",
        year: 1968,
        rate: 8.3,
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/815ex8QSniL._RI_.jpg",
        movieUrl: "https://www.imdb.com/title/tt0062622/",
        rateUrl: "https://www.imdb.com/title/tt0062622/ratings"
    },
    {
        title: "The Matrix",
        year: 1999,
        rate: 8.7,
        imageUrl: "https://m.media-amazon.com/images/I/51unGrb-AAL._AC_.jpg",
        movieUrl: "https://www.imdb.com/title/tt0133093/",
        rateUrl: "https://www.imdb.com/title/tt0133093/ratings"
    },
    {
        title: "Interstellar",
        year: 2014,
        rate: 8.7,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        movieUrl: "https://www.imdb.com/title/tt0816692/",
        rateUrl: "https://www.imdb.com/title/tt0816692/ratings"
    },
];

// For loop
for (let index = 50; index < 100; index++) {
    console.log(`index is equal to = ${index}`);
}

// Display all movies from the array
function displayImages() {
    for (let i = 0; i < _movies.length; i++) {
        document.getElementById('images').innerHTML += `
      <div class="col">
          <div class="card shadow-sm">
          <img class="card-img" src="${_movies[i].imageUrl}" alt="${_movies[i].title}">
            <div class="card-body">
              <h6 class="card-text">Movie Name: </h6> ${_movies[i].title}
              <h6 class="card-text">Rating: </h6> ${_movies[i].rating}
              <h6 class="card-text">Year: </h6> ${_movies[i].year}
              <div class="d-flex justify-content-between align-items-center">
               <div class="btn-group">
                <a class="btn btn-sm btn-secondary" href="${_movies[i].linkUrl}" target="_blank">View Movie</a>
                <a class="btn btn-sm btn-outline-secondary" href="${_movies[i].rateUrl}" target="_blank">Rate</a>
               </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
}

window.onload = function () {
    displayImages();
};


function sendEmail() {
    let firstName = document.querySelector('[name="firstName"]').value;
    let lastName = document.querySelector('[name="lastName"]').value;
    let email = document.querySelector('[name="email"]').value;
    let message = document.querySelector('[name="messageContent"]').value;
    let date = new Date();

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "learhoudini@gmail.com",
        Password: "C3010EE697A7DC5F8A7DF5A4777BF52E0E03",
        From: "learhoudini@gmail.com",
        To: "mpg.teacher.22@gmail.com",
        Subject: `${firstName} ${lastName} שלח/ה לך הודעה מהאתר`,
        Body: ` 
    <b>הודעה מאת:</b> ${firstName} ${lastName} 
    <br>
    <br>
    <b>כתובת איימיל של השולח:</b> ${email}
    <br>
    <br>
    <b>נשלח בתאריך:</b> ${date} 
    <br>
    <br>
    <b>תוכן ההודעה:</b>
    <br>
    ${message}`
    });

    document.querySelector('#sent-success').style = 'display:block';

}
