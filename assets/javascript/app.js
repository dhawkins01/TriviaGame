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
	  

	// create question contents according to question count
	function questionContent() {
		// a for loop would be cool here...
    	$("#gameScreen").append("<p><strong>" + 
    		questions[questionCounter].question + 
    		"</p><p class='choices'>" + 
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
		if (correctGuesses === questions.length) {
			var endMessage = "Perfection! Might want to go outside more tho";
			var bottomText = "#nerdalert!";
		}
		else if (correctGuesses > incorrectGuesses) {
			var endMessage = "Good work! But do better you can...";
			var bottomText = "all your base are belong to us";
		}
		else {
			var endMessage = "You seem to have taken an arrow to the knee";
			var bottomText = "#scrub";
		}
		$("#gameScreen").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" + 
			correctGuesses + "</strong> right.</p>" + 
			"<p>You got <strong>" + incorrectGuesses + "</strong> wrong.</p>");
		$("#gameScreen").append("<h1 id='start'>Start Over?</h1>");
		$("#bottomText").html(bottomText);
		gameReset();
		$("#start").click(nextQuestion);
	}

	// game clock currently set to 15 seconds
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
	// console.log(questionCounter);
	// console.log(questions[questionCounter].correctChoice);
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
    	// $("#gameScreen").append("<div id='question'>");
    	// var nextQuestion = questionContent(questionCounter);
    	// $("#gameScreen").append(nextQuestion);

		// $("#gameScreen").append("<p>" + questions[questionCounter].question + "</p><p>" + questions[questionCounter].choices[0] + "</p><p>" + questions[questionCounter].choices[1] + "</p><p>" + questions[questionCounter].choices[2] + "</p><p>" + questions[questionCounter].choices[3] + "</p>");
		// questionCounter++;
		questionContent();
    	timer();
    	userTimeout();
    }

    // this starts the game
    // $("#start").click(nextQuestion);
    // $("#start").click("#start").hide();
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