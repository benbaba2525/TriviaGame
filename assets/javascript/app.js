$(document).ready(function () {

var triviaGame;
var correct;
var incorrect;
var unanswered;
var randomTrivia;
var computerPick;
var userAnswer;
var timer; //  Interval Demonstration ,  Set our time counter to 15.
var running;
var intervalId; //  Variable that will hold our interval ID when we execute , the "run" function
var newArray;
var countQuestions;


  initializeGame();

  //Hiding  Start Over Button
  $("#startOverBtn").hide();

  //Start Game
  $("#startBtn").on("click", function () {

    $("#startBtn").hide();
    displayQuestion();

  });


  //Display question and Multiple choice
  function displayQuestion() {

  //Start Time Remaining
    runTimer();
    decrement();

  //Random TriviaGame
    randomTrivia = Math.floor(Math.random() * (triviaGame.length));
    computerPick = triviaGame[randomTrivia];

  //Show random question    
    $("#questionP").html("<p>" + computerPick.question + "</p>");

  //Show answer choices
    for (var i = 0; i < computerPick.choice.length; i++) {
      var answerChoice = $("<div>");
      answerChoice.addClass("choiceDiv");
      answerChoice.html(computerPick.choice[i]);
      answerChoice.attr("answerVal", i);
      $("#choicePage").append(answerChoice);
    }

  // When click on answer choice will check the answer is correct or incorrect     
    $(".choiceDiv").on("click", function () {
      userAnswer = parseInt($(this).attr("answerVal"));

      if (userAnswer === computerPick.answer) {
        correctAnswer();
  //Checking on console.log
  console.log("Your answer is correct");
      } else {
        wrongAnswer();
  //Checking on console.log
  console.log("Your answer is incorrect");

      }

  //Checking on console.log
      console.log(computerPick.question);
      console.log(computerPick.choice);
      console.log(userAnswer);

    });

  };


  // Timer start count down, timer--

  function runTimer() {
    if (!running) {
      intervalId = setInterval(decrement, 1000);
      running = true;
    }
  };

  //  The decrement function.
  function decrement() {

    //  Show the time remaning
    $("#time-remaining").html("<p><i class='fa fa-clock-o' style='padding: 20px;color:black;' aria-hidden='true'></i> Time Remaining :  " + timer + "</p>");

    timer--;
    //Checking on console.log
    console.log("Time Remaining : " + timer);

    //When 5 second left alert with red color on text content
    setTimeout(fiveSeconds, 1000 * 10);

    //If time = 0 then stop the time

    if (timer === 0) {
      stop();

      var timeUp = new Audio("assets/audio/gameover.mp3");
      timeUp.play();
      unansweredQuestion();
      
  //Checking on console.log
  console.log("Time is up !!")

    }
  };

  // 5 secound left alert with red color on text content

  function fiveSeconds() {
    $("#time-remaining").html("<p style='color:red;'><i class='fa fa-clock-o' style='padding: 20px;color:red;' aria-hidden='true'></i> Time Remaining :  " + timer + "</p>");
  };

  // Function to clear the time
  function stop() {
    running = false;
    clearInterval(intervalId);
  };

  // Create function to check Correct Answer , Incorrect Answer and Unanswered the question

  // Function when answer is correct 
  function correctAnswer() {
    $("#message").html("Your Answer is <span style='color:green';>Correct!!     <i class='fa fa-check-square-o' aria-hidden='true'></i></span>");
    var correctSound = new Audio("assets/audio/Correct AnswerIdea Sound Effects.mp3");
    correctSound.play();
    correct++;
    $("#ansImage").html("<img src=" + computerPick.image + ">");
    stop();
    $("#time-remaining").hide();
    $(".choiceDiv").hide();
    $("#message").show();
    $("#ansImage").show();
    nextQuestion();
  };

  // Function when the answer is incorrect  
  function wrongAnswer() {
    $("#message").html("<p>Your Answer is <span style='color:red';>Incorrect!!    <i class='fa fa-times-circle' aria-hidden='true'></i></span> <br> The Correct Answer is  " + computerPick.choice[computerPick.answer] + "</p>");
    var incorrectSound = new Audio("assets/audio/Wrong Answer - Sound Effect [HD].mp3");
    incorrectSound.play();
    incorrect++;
    $("#ansImage").html("<img src=" + computerPick.image + ">");
    stop();
    $("#time-remaining").hide();
    $(".choiceDiv").hide();
    $("#message").show();
    $("#ansImage").show();
    nextQuestion();
  };

  // Function when user not answer the question  
  function unansweredQuestion() {
    unanswered++;
    $("#message").html("<span style='color:red';>Time Out !! You failed to choose the answer.</span> <br>  The Answer is  " + computerPick.choice[computerPick.answer] + "</p>");
    $("#time-remaining").hide();
    $(".choiceDiv").hide();
    $("#ansImage").html("<img src=" + computerPick.image + ">");
    $("#message").show();
    $("#ansImage").show();
    nextQuestion();

  };


  // Function to display the next question    
  function nextQuestion() {
    newArray.push(computerPick);
    triviaGame.splice(randomTrivia, 1);

    setTimeout(function () {
      timer = 15;
      $("#time-remaining").show();
      $(".choiceDiv").empty();
      $("#ansImage").empty();
      $("#message").empty();

//When countQuestion is equal to index length, return the result if not continue displayQuestion.
      if ((correct + incorrect + unanswered) === countQuestions) {

        var timeUp = new Audio("assets/audio/gameover.mp3");
        timeUp.play();

        $("#questionP").hide();
        $("#time-remaining").hide();
        $("#ansImage").hide();
        $("#resultP").append("<h2><strong>Here is Results of Your Quiz</strong></h2>");
        $("#resultP").append("<h4>Correct Answers: " + correct + "</h4>");
        $("#resultP").append("<h4>Incorrect Answers: " + incorrect + "</h4>");
        $("#resultP").append("<h4>Unanswered Questions: " + unanswered + "</h4>");
        $("#startOverBtn").show();

//Checking on console.log
console.log("Your Results");
console.log("Correct Answers:  " + correct);
console.log("Incorrect Answers:  " + incorrect);
console.log("Unanswered Questions: " + unanswered);

      } else {
        displayQuestion();
      }

    }, 4000);
  };

  // Reset the Game
  function resetGame() {
    initializeGame();
    $("#questionP").show();
    $("#time-remaining").show();
    $("#ansImage").show();
    $("#resultP").empty();
    $("#startOverBtn").hide();
    displayQuestion();
  };

  function initializeGame() {
    triviaGame = [{
        question: "What Christmas Ballet is the most famous of all?",
        choice: ["Rudolph's Surprise", "The Nutcracker", "Mr. and Mrs. Claus", "Frosty Goes to New York"],
        answer: 1,
        image: "assets/images/answer1.gif"
      },

      {
        question: "Where was Mommy kissing Santa Claus?",
        choice: ["On the Corner", "In the Bedroom", "Under the Mistletoe", "In a Dark Alley"],
        answer: 2,
        image: "assets/images/answer2.gif"
      },

      {
        question: "Who wrote the song \"Here Comes Santa Claus\"?",
        choice: ["Michael Jackson", "Gene Autry", "Persy Douglas", "Leroy Jones"],
        answer: 1,
        image: "assets/images/answer3.jpg"
      },

      {
        question: "What does Alvin want for Christmas?",
        choice: ["An iPad", "A Bottle of Rum", "A Hula Hoop", "A New Car"],
        answer: 2,
        image: "assets/images/answer4.gif"
      },

      {
        question: "What should little children leave out for Santa on Christmas Eve?",
        choice: ["Cookies and Milk", "A Bottle of Wine", "Chewing Gum", "Chedder Cheese"],
        answer: 0,
        image: "assets/images/answer5.gif"
      },

      {
        question: "What is Frosty the Snowman's nose made of?",
        choice: ["A Carrot", "A Potato", "A Button", "A Rock"],
        answer: 2,
        image: "assets/images/answer6.gif"
      },

      {
        question: "What is Ebenezer?",
        choice: ["The Milk Man", "The 23rd President", "The Scrooge", "Mrs. Claus's Secret Friend"],
        answer: 2,
        image: "assets/images/answer7.gif"
      },

      {
        question: "What color is the Grinch?",
        choice: ["Green", "Blue", "White", "Black"],
        answer: 0,
        image: "assets/images/answer8.gif"
      },

      {
        question: "Which reindeer's name starts with a \"B\" ?",
        choice: ["Bart", "Burt", "Bodog", "Blitzen"],
        answer: 3,
        image: "assets/images/answer9.gif"
      },

      {
        question: "When do most Americans put up a Christmas tree?",
        choice: ["Weekend After Thanksgiving", "Second Week of November", "Second Week of December", "On Christmas Eve"],
        answer: 0,
        image: "assets/images/answer10.gif"

      }
    ];
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    randomTrivia;
    computerPick;
    userAnswer = "";
    timer = 15; //  Interval Demonstration ,  Set our time counter to 15.
    running = false;
    intervalId; //  Variable that will hold our interval ID when we execute , the "run" function
    newArray = [];
    holder = [];
    countQuestions = triviaGame.length;
  }

  //Reset the game
  $("#startOverBtn").on("click", function () {
    resetGame();
  });

});

