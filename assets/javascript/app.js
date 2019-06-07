$(document).ready(function() {
    

    // track which question we are on
    var questionCounter = 0;
    // initial time of 30 seconds for each question
    var time = 30;
    // will keep tally of right guesses for end game
    var correctGuesses = 0;
    //will keep tally of wrong guesses for end game
    var incorrectGuesses = 0;

    // question & answer array
    var questions = [
        {
            question: "Which actor played Bruce Banner in the 2008 film 'The Incredible Hulk'?",
            choices: ["Marc Ruffalo", "Edward Norton", "Robert Downey Jr.", "Dave Hawkins"],
            correctChoice: "Edward Norton",
            image: "<img src='assets/images/hulk1.gif'>"
        },

        {
            question: "Which actor played Bruce Banner in the 2012 film 'The Avengers'?",
            choices: ["Edward Norton", "Dave Hawkins", "Marc Ruffalo", "Robert Downey Jr."],
            correctChoice: "Marc Ruffalo",
            image: "<img src='assets/images/hulk2.gif'>"
        },

        {
            question: "Who was the doctor that transformed Steve Rogers into Captain America?",
            choices: ["Dr. Erskine", "Dr. Phil", "Dr. America", "Dr. Hawkins"],
            correctChoice: "Dr. Erskine",
            image: "<img src='assets/images/capt1.gif'>"
        },

        {
            question: "What is Captain America's shield made out of?",
            choices: ["Titanium", "Hawkanium", "Aluminum", "Vibranium"],
            correctChoice: "Vibranium",
            image: "<img src='assets/images/captshield.gif'>"
        },

        {
            question: "Who was 'The First Avenger'?",
            choices: ["Tony Stark", "Nick Fury", "Dave Hawkins", "Steve Rogers"],
            correctChoice: "Steve Rogers",
            image: "<img src='assets/images/firstavenger.gif'>"
        },

        {
            question: "In the 2011 movie, 'Thor', who is Thor's father?",
            choices: ["Odin", "Loki", "Heimdall", "Dave Hawkins"],
            correctChoice: "Odin",
            image: "<img src='assets/images/odin.gif'>"
        },

        {
            question: "How does Black Widow turn The Hulk back into Bruce Banner?",
            choices: ["By asking politly", "With a text message", "By slapping him", "With a lullaby"],
            correctChoice: "With a lullaby",
            image: "<img src='assets/images/hulklullaby.gif'>"
        },

        {
            question: "What is Clint Barton's superhero name?",
            choices: ["Hawkeye", "Black Panther", "Iron Man", "Hawkins"],
            correctChoice: "Hawkeye",
            image: "<img src='assets/images/hawkeye.gif'>"
        },

        {
            question: "What is Peter Parker's superhero name?", 
            choices: ["Batman", "Captain Underpants", "War Machine", "Spider-Man"], 
            correctChoice: "Spider-Man", 
            image: "<img src='assets/images/sman.jpg'>"
        },

        {
            question: "What is the name of the Marvel comic legend who has made an appearance in all the films of the MCU?", 
            choices: ["Dave Hawkins", "Stan Lee", "Steve Rogers", "Jack Kirby"], 
            correctChoice: "Stan Lee",
            image: "<img src='assets/images/stanlee.gif'>"
        },

        {
            question: "Thor's hammer is of metal from the heart of a dying what?",
            choices: ["Asteroid", "Hawk", "Star", "Comet"],
            correctChoice: "Star",
            image: "<img src='assets/images/thor1.gif'>"
        }
    ];
	  

	// create question contents according to question count
	function questionContent() {
		
    	$("#gameScreen").append("<h3><strong>" + 
    		questions[questionCounter].question + 
    		"</h3><p class='choices'>" + 
    		questions[questionCounter].choices[0] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[1] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[2] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[3] + 
    		"</strong></p>");
	}

	// user guessed correctly
	function userWin() {
		$("#gameScreen").html("<p>You got it right!</p>");
		correctGuesses++;
		var correctChoice = questions[questionCounter].correctChoice;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctChoice + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	// user guessed incorrectly
	function userLoss() {
		$("#gameScreen").html("<p>Nope, that's not it!</p>");
		incorrectGuesses++;
		var correctChoice = questions[questionCounter].correctChoice;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctChoice + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	// user ran out of time
	function userTimeout() {
		if (time === 0) {
			$("#gameScreen").html("<p>You ran out of time!</p>");
			incorrectGuesses++;
			var correctChoice = questions[questionCounter].correctChoice;
			$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
				correctChoice + 
				"</span></p>" + 
				questions[questionCounter].image);
			setTimeout(nextQuestion, 4000);
			questionCounter++;
		}
	}

	// screen that shows final score and nice message :)
	function resultsScreen() {
		
		$("#gameScreen").html("<p>You got <strong>" + 
			correctGuesses + "</strong> right.</p>" + 
			"<p>You got <strong>" + incorrectGuesses + "</strong> wrong.</p>");
		$("#gameScreen").append("<h1 id='start'>Start Over?</h1>");
		// $("#bottomText").html(bottomText);
		gameReset();
		$("#start").click(nextQuestion);
	}

	// game clock currently set to 30 seconds
	function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				userTimeout();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html("<strong>" + time + "</strong>");
		}
	}

	// moves question counter forward to show next question
	function nextQuestion() {
		if (questionCounter < questions.length) {
			time = 30;
			$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
			questionContent();
			timer();
			userTimeout();
		}
		else {
			resultsScreen();
		}
	
	}

	// reset score and counter parameters on restart
	function gameReset() {
		questionCounter = 0;
		correctGuesses = 0;
		incorrectGuesses = 0;
	}

    function startGame() {
    	$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
    	$("#start").hide();
    	
		questionContent();
    	timer();
    	userTimeout();
    }

    // this starts the game
    
    $("#start").on("click", function() {
        $("#start").hide();
        nextQuestion();
    })

    // click function to trigger right or wrong screen
	$("#gameScreen").on("click", ".choices", (function() {
		// alert("clicked!");
		var userGuess = $(this).text();
		if (userGuess === questions[questionCounter].correctChoice) {
			clearInterval(clock);
			userWin();
		}
		else {
			clearInterval(clock);
			userLoss();
		}
	}));
});