$(document).ready(function() {

    // Question and answer array

    var questions = [
        {
            question: "Which actor played Bruce Banner in the 2008 film 'The Incredible Hulk'?",
            choices: ["Marc Ruffalo", "Edward Norton", "Robert Downey Jr.", "Dave Hawkins"],
            correctChoice: "Edward Norton",
            image: ""
        },

        {
            question: "Which actor played Bruce Banner in the 2012 film 'The Avengers'?",
            choices: ["Edward Norton", "Dave Hawkins", "Marc Ruffalo", "Robert Downey Jr."],
            correctChoice: "Marc Ruffalo",
            image: ""
        },

        {
            question: "Who was the doctor that transformed Steve Rogers into Captain America?",
            choices: ["Dr. Erskine", "Dr. Phil", "Dr. America", "Dr. Hawkins"],
            correctChoice: "Dr. Erskine",
            image: ""
        },

        {
            question: "What is Captain America's shield made out of?",
            choices: ["Titanium", "Hawkanium", "Aluminum", "Vibranium"],
            correctChoice: "Vibranium",
            image: ""
        },

        {
            question: "Who was 'The First Avenger'?",
            choices: ["Tony Stark", "Nick Fury", "Dave Hawkins", "Steve Rogers"],
            correctChoice: "Steve Rogers",
            image: ""
        },

        {
            question: "In the 2011 movie, 'Thor', who is Thor's father?",
            choices: ["Odin", "Loki", "Heimdall", "Dave Hawkins"],
            correctChoice: "Odin",
            image: ""
        },

        {
            question: "How does Black Widow turn The Hulk back into Bruce Banner?",
            choices: ["By asking politly", "With a text message", "By slapping him", "With a lullaby"],
            correctChoice: "With a lullaby",
            image: ""
        },

        {
            question: "What is Clint Barton's superhero name?",
            choices: ["Hawkeye", "Black Panther", "Iron Man", "Hawkins"],
            correctChoice: "Hawkeye",
            image: ""
        },

        {
            question: "What is Peter Parker's superhero name?", 
            choices: ["Batman", "Captain Underpants", "War Machine", "Spider-Man"], 
            correctChoice: "Spider-Man", 
            image: ""
        },

        {
            question: "What is the name of the Marvel comic legend who has made an appearance in all the films of the MCU?", 
            choices: ["Dave Hawkins", "Stan Lee", "Steve Rogers", "Jack Kirby"], 
            correctChoice: "Stan Lee",
            image: ""
        },

        {
            question: "Thor's hammer is of metal from the heart of a dying what?",
            choices: ["Asteroid", "Hawk", "Star", "Comet"],
            correctChoice: "Star",
            image: ""
        }
    ];


    // Global Variables

    // track what question we are on
    var questionNumber = 0;
    // timer, 20 seconds to answer each question
    var countStartNumber = 20;
    // track the correct or incorrect quesses
    var correct = 0;
    var incorrect = 0;
    // variable to hold the intervalId
    var intervalId;

    var game = {
        questions: questions,
        currentQuestion: 0,
        counter: countStartNumber,
        correct: 0,
        incorrect: 0,
        countdown: function() {
            // decrement counter
            // use jquery to to put dynamically
            //put logic on the page
            // if statement 
                // if time is up, run time up function

        },
        loadQuestion: function() {
            // set timer
            // timer = setInterval(game.countdown, 1000)
            // dynamically add question into card variable
            // hint --- card.html ("<h2>" + "</h2>)
            // for loop to run through the questions
            // a dynamically added buttons with answer options
        },

        nextQuestion: function () {
            // set the counter
            // game.counter = countStartNUmber
            // use jquery to change the text of the game counter
            // increment the currentQuestion by one 
            // call the loadQuestion function

        },

        timeUp: function() {
            // clearInterval(timer)
            // use jquery to change the text of the game counter
            // dynamically add out of time to the card
            // append the Correct answer to the card
            // append image to the card
        },
        
        results: function() {
            // clearInterval
            // dynamically add html to let them know of there results
            // use jquery to add html of game.counter to the  id of counter-number
            // add how many correct answers they got
            // add how many incorrect answer they got
            // add how many unanswered
            // add a start over button
        },

        clicked: function() {
            //clearInterval(timer)
            // if/else statement for when an answer is clicked
            // if correct run answeredCorrectly() function
            // else run answerIncorrectly() function
        },

        answeredIncorrectly: function() {
            // add a point to the incorrect column
            // clear interval(timer);
            // dynamically add html to the them know they are wrong
            // add the right answer
            // add the image
            // if/else statement
                    //if no more questions wait 3 seconds then show results
                    // else wait three seconds and show next question


        },

        answeredIncorrectly: function() {
            // add a point to correct column
            // clearInterval(timer)
            // dynamically add html to let them know they are correct
            // add image
            // if else statement
                //if no more questions wait 3 seconds then show results
                // else wait three seconds then show next question
        },

        reset: function() {

        }

    }

    // var card that hooks to the quiz area ex var card = ("#quiz-area");

    
    //Main Game area

    //create click even
    //start button

    $(document).on("click", "#start", function (){
        $("sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>20 </span> Seconds</h2>");
        game.loadQuestion();
    })


    //answer button

    $(document).on("click", )

    
    // start over button
    
    
    
    
    
    
    
    
    
    // $("#start-button").on("click", function() {
    //     $("#start-button").hide();
    //     $("#timer").html("<h3>Time Left: " + timer + "</h3>");
        
        
    // })

    

















}); // end of document.ready