
$(document).ready(function(){

    
    var triviaGame = [
        {
            question: "What Christmas Ballet is the most famous of all?",
            answer:    "The Nutcracker",
            choice:   ["Rudolph's Surprise","The Nutcracker", "Mr. and Mrs. Claus", "Frosty Goes to New York" ]

        },

        {
            question: "Where was Mommy kissing Santa Claus?",
            answer:    "Under the Mistletoe",
            choice:   ["On the Corner", "In the Bedroom", "Under the Mistletoe", "In a Dark Alley"]
        },

        {
            question: "Who wrote the song \"Here Comes Santa Claus\"?",
            answer:    "Gene Autry",
            choice:   ["Michael Jackson", "Gene Autry", "Persy Douglas", "Leroy Jones"]
        },

        {
            question: "What does Alvin want for Christmas?",
            answer:    "A Hula Hoop",
            choice:   ["An iPad", "A Bottle of Rum", "A Hula Hoop", "A New Car"]
        },

        {
            question: "What should little children leave out for Santa on Christmas Eve?",
            answer:    "Cookies and Milk",
            choice:   ["Cookies and Milk", "A Bottle of Wine", "Chewing Gum", "Chedder Cheese"]
        },

        {
            question: "What is Frosty the Snowman's nose made of?",
            answer:    "A Button",
            choice:   ["A Carrot", "A Potato", "A Button", "A Rock"]
        },

        {
            question: "What is Ebenezer?",
            answer:    "The Scrooge",
            choice:   ["The Milk Man", "The 23rd President", "The Scroogr", "Mrs. Claus's Secret Friend"]
        },

        {
            question: "What color is the Grinch?",
            answer:    "Green",
            choice:   ["Green", "Blue", "White", "Black"]
        },

        {
            question: "Which reindeer's name starts with a \"B\" ?",
            answer:   "Blitzen",
            choice:  ["Bart", "Burt", "Bodog", "Blitzen"]
        },

        {
            question: "Which reindee does not belong below?",
            answer:   "Roger",
            choice:  ["Dancer", "Comet", "Roger", "Dasher"]

       }];
      var userGuesses = 0;
      var correct = 0;
      var incorrect = 0;
      var unanswered = 0;
      var randomTrivia;
      var timer = 15;     //  Interval Demonstration ,  Set our time counter to 15.
      var intervalId;     //  Variable that will hold our interval ID when we execute ,   the "run" function

    //Hiding  Choice Div and Play Again Button
      $("#choiceDiv").hide();
      $("#playagainBtn").hide();

   //Start Game
   $("#startBtn").on("click", function(){
    
    //When click on start button , start button will disappear and turn to question page
    $("#startBtn").hide();

    //Display question and Multiple choice
    displayQuestion();
  
    //Start Time Remaining
    runTimer();
    

   

    //When user guess
    //If user pick the correct answer, show message ,audio sound and picture
    // to let user know that user pick the right answer , correct++

    //If user pick incorrect answer, show message ,audio sound and picture 
    //to let user know that user pick the wrong answer , incorrect++

    //If time up user didn't pick the answer , show message ,audio sound and picture 
    //to let user know that user pick didn't pick any answer , unanswered++
   
    //Then go to the next question

    //Until user answer all question then show the result + Play Again Button

    



   });

   //Display question and Multiple choice
   function displayQuestion(){
    var randomTrivia = Math.floor(Math.random()*(triviaGame.length));
    $("#questionP").html(randomTrivia);
    
   };


  // Timer start count down, timer--

   function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  };

  //  The decrement function.
  function decrement() {
    timer--;
     //
     setTimeout(fiveSeconds, 1000 * 10);
     fiveSeconds();

    //  Show the number in the #show-number tag.
    $("#time-remaining").html("<p><i class='fa fa-clock-o' style='padding: 20px;color:black;' aria-hidden='true'></i> Time Remaining :  " + timer + "</p>");

    if (timer === 0) {
      stop();
    var timeUp = new Audio("assets/audio/gameover.mp3");
        timeUp.play();
      
    }
  };

  // 5 secound left
  
  function fiveSeconds() {
    $("#time-remaining").html("<p style='color:red;'><i class='fa fa-clock-o' style='padding: 20px;color:red;' aria-hidden='true'></i> Time Remaining :  " + timer + "</p>");
    console.log("5 seconds left");
  }

  //  The stop function
  function stop() {
    clearInterval(intervalId);
  };

  






















    
});