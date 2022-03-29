// 3. Write a function that would allow you to do this:
const sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2)); // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); // prints "Each person gets 2.67 slices of pizza"
  





// function cutPizzaSlices(pizza){ // define the funtion
//     return person => { // what I want the function to do
//       let eat = pizza / person;
//         console.log("Each person gets " + `${eat}` + " slices of pizza");
//     }
//   }
//   //call the function/ print out the results 
//   var sharePizza = cutPizzaSlices(8);
//   console.log(sharePizza(2)); // prints "Each person gets 4.00 slices of pizza"
//   console.log(sharePizza(3)); // prints "Each person gets 2.67 slices of pizza"




  // It's time for trivia!

// Create a trivia game of 4-6 questions with the following requirements:
//   1. Starts when the "New Game" button is clicked
//   2. Prompts user to answer each question
//   3. Calculates and gives total score for user
//   4. Accepts case insensitive input
// Bonus points:
//   1. Gives users the correct answer if they miss a question
//   2. Displays total score in the DOM (will likely require research)


//Function key
const triviaQuestions = [
    {
      question:"What color is the sky?",
      answer: "blue",
    },
    {
      question:"What color is the grass?",
      answer: "green",
    },
    {
      question:"What day comes after Monday?",
      answer: "tuesday",
    }, 
    {
      question:"How many days are in a week?",
      answer: "seven",
    }, 
  ];
  
  // action of the function
  function startGame() { //Label Function
    let points = 0;
  //What i want the loop to do
    for(let i = 0; i < triviaQuestions.length; i++) { 
      let answer = window.prompt(triviaQuestions[i].question);
      if (answer === triviaQuestions[i].answer) {
      points++;
      console.log("Correct!");
  } 
      else {
        console.log("Wrong! " + "Correct answer is " + `${triviaQuestions[i].answer}`);
      }
    }
    console.log("Your " + "score is " + points);
  }  
  
    
  //Almost there  
  //for(let i = 1; i < triviaQuestions.length; i++){
  //      let userAnswers = prompt(triviaQuestions.question);
  //    if (userAnswers == triviaQuestions.questions){
  //      console.log("Correct" + " " + points++)
  //    }
  //   else {
  //     console.log("WRONG! The answer is " + `${triviaQuestions.answer}`);
  //   } 
  // }
  



  // Using what you've learned so far, create a program that randomly generates a three day outlook for this weekend's weather (Friday, Saturday, and Sunday) with the click of a button. Each day should include:

//  1. projected high and low temperatures (as whole integers)
//  2. sky condition
//  3. wind (in mph)
//  4. precipitation probability (as a %)
  
//  * While high and low temperatures will vary, try to keep from having an apocalyptic 60 degree difference!
 
//  Bonus:
//  1. Based on each day's weather, recommend an activity for the user — e.g., "A great day for golfing," or "Reading a book inside might be nice."
 
// Check out the National Weather Service for more info on these descriptors if you're stuck: https://www.weather.gov/bgm/forecast_terms

function generateWeather() { 
    let day =['Friday','Saturday', 'Sunday'];
     let randomDay = day[Math.floor(Math.random() * day.length)];
     
    let sky = ['Cloudy','Rainy','Sunny'];
      let randomSky = sky[Math.floor(Math.random() * sky.length)];
     
    let high = ['high of 85', 'high of 75' , 'high of 65'];
     let randomHigh = high[Math.floor(Math.random() * high.length)];
     
    let low = ['low of 60' , 'low of 55', 'low of 50'];
     let randomLow = low[Math.floor(Math.random() * low.length)];
     
    let wind = ['3 mph', '2 mph', '4 mph'];
     let randomWind = wind[Math.floor(Math.random() * wind.length)];
     
    let precipitation = ['5%' , '10%', ' 20%'];
     let randomPrecip = precipitation[Math.floor(Math.random() * precipitation.length)];
     
     console.log("Today is " + randomDay + "." + " The weather for today is " + randomSky + " with a " + randomHigh + " and a " + randomLow + "." + " The wind speed is " + randomWind + " with a chance of " + randomPrecip + " precipitation");
     
   }