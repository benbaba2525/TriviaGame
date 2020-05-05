
$(document).ready(function(){

    
    var triviaGame = [
        {
            question: "What Christmas Ballet is the most famous of all?",
            choice:   ["Rudolph's Surprise","The Nutcracker", "Mr. and Mrs. Claus", "Frosty Goes to New York" ],
            answer:    1
        },

        {
            question: "Where was Mommy kissing Santa Claus?",
            choice:   ["On the Corner", "In the Bedroom", "Under the Mistletoe", "In a Dark Alley"],
            answer:    2
        },

        {
            question: "Who wrote the song \"Here Comes Santa Claus\"?",
            choice:   ["Michael Jackson", "Gene Autry", "Persy Douglas", "Leroy Jones"],
            answer:    1,
        },

        {
            question: "What does Alvin want for Christmas?",
            choice:   ["An iPad", "A Bottle of Rum", "A Hula Hoop", "A New Car"],
            answer:    2,
        },

        {
            question: "What should little children leave out for Santa on Christmas Eve?",
            choice:   ["Cookies and Milk", "A Bottle of Wine", "Chewing Gum", "Chedder Cheese"],
            answer:    0,
        },

        {
            question: "What is Frosty the Snowman's nose made of?",
            choice:   ["A Carrot", "A Potato", "A Button", "A Rock"],
            answer:    2,
        },

        {
            question: "What is Ebenezer?",
            choice:   ["The Milk Man", "The 23rd President", "The Scroogr", "Mrs. Claus's Secret Friend"],
            answer:    2,
        },

        {
            question: "What color is the Grinch?",
            choice:   ["Green", "Blue", "White", "Black"],
            answer:    0,
        },

        {
            question: "Which reindeer's name starts with a \"B\" ?",
            choice:  ["Bart", "Burt", "Bodog", "Blitzen"],
            answer:   3,
        },

        {
            question: "Which reindee does not belong below?",
            choice:  ["Dancer", "Comet", "Roger", "Dasher"],
            answer:   2,

       }];
    
      var correct = 0;
      var incorrect = 0;
      var unanswered = 0;
      var randomTrivia;
      var computerPick;
      var userAnswer="";
      var timer = 15;     //  Interval Demonstration ,  Set our time counter to 15.
      var intervalId;     //  Variable that will hold our interval ID when we execute ,   the "run" function
      var countQuestions = 0;

    //Hiding  Choice Div and Play Again Button
  
    $("#playagainBtn").hide();
     
   //Start Game
   $("#startBtn").on("click", function(){
    
    //When click on start button , start button will disappear and turn to question page
    $("#startBtn").hide();

    //Display question and Multiple choice
    //When user answer the question or time out then go to next question
    displayQuestion();
  
    //Start Time Remaining
    runTimer();





  
    
    
    

    //If user pick the correct answer, show message ,audio sound and picture
    // to let user know that user pick the right answer , correct++

    //If user pick incorrect answer, show message ,audio sound and picture 
    //to let user know that user pick the wrong answer , incorrect++

    //If time up user didn't pick the answer , show message ,audio sound and picture 
    //to let user know that user pick didn't pick any answer , unanswered++
   
    //Then go to the next question

    //Until user answer all question then show the result + Play Again Button

    // Create function for Correct Answer , Incorrect Answer and Unanswered the question
    function correctAnswer(){
    $("#message").text("Correct!!");
    var correctSound = new Audio("assets/audio/Correct AnswerIdea Sound Effects.mp3");
        correctSound.play();
        correct++;
        stop();
        $(".choiceDiv").hide();
        //reset();
      
  };
  
  // Create function a game loss,  player loss value losses + 1
  function wrongAnswer(){
    $("#message").text("Your Answer is Incorrect!!");
    var incorrectSound = new Audio("assets/audio/Wrong Answer - Sound Effect [HD].mp3");
        incorrectSound.play();
        incorrect++;
        stop();
        $(".choiceDiv").hide();
        //reset ();
    
  };
  
  function unansweredQuestion() {
    unanswered++;
    $("#message").text("Time Out !! You failed to choose the answer");
    $(".choiceDiv").hide();
    
    //reset();
}





   //Display question and Multiple choice
   function displayQuestion(){
    
     //Random Trivia Game
       randomTrivia = Math.floor(Math.random()*(triviaGame.length));

       computerPick = triviaGame[randomTrivia];
      //Show random question
       $("#questionP").html("<p>" + computerPick.question + "</p>");

   //Show answer choices
   for ( var i = 0; i < computerPick.choice.length; i++){
    var answerChoice = $("<div>");
    answerChoice.addClass("choiceDiv");
    answerChoice.html(computerPick.choice[i]);
    answerChoice.attr("answerVal", i);
    $("#choicePage").append(answerChoice);
   }
    
   $(".choiceDiv").on("click", function(){
    userAnswer = parseInt( $( this ).attr( "answerVal" ) );

    if (userAnswer === computerPick.answer) {
      correctAnswer();
     } else {
      wrongAnswer();
     } 


     //Checking on console.log
     console.log(userAnswer);
    


   });

  }

  

    // TODO: If the count is the same as the length of the image array, reset the count to 0.
    //if (countQuestions === triviaGame.length) {
      // Show the result
    //}



   

   

   

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

    //  Show the time remaning
    $("#time-remaining").html("<p><i class='fa fa-clock-o' style='padding: 20px;color:black;' aria-hidden='true'></i> Time Remaining :  " + timer + "</p>");

    if (timer === 0) {
      stop();
    var timeUp = new Audio("assets/audio/gameover.mp3");
        timeUp.play();
        clearInterval(intervalId);
        unansweredQuestion();
      
    }
  };

  // 5 secound left alert with red colro on text content
  
  function fiveSeconds() {
    $("#time-remaining").html("<p style='color:red;'><i class='fa fa-clock-o' style='padding: 20px;color:red;' aria-hidden='true'></i> Time Remaining :  " + timer + "</p>");
    console.log("5 seconds left");
  }

  //  The stop function
  function stop() {
    clearInterval(intervalId);
  };


  
  
});






    
});