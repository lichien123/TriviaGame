$( document ).ready(function() {



var timerVar = 45;

var answers = [];
var correctAnswer = [{ value: "Nintendo" }, { value: "Seven" },
					{ value: "Brock" }, { value: "Pokemon 2000" },
					{ value: "Poison" }, { value: "Kyogre" },
					{ value: "Umbreon" }, { value: "Normal" },
					{ value: "Dynamic Punch" }, { value: "Trees" }];
var wrongAnswers = [];
var unansweredQuestions = [];
var game = {correct: 0,
			incorrect: 0}

			$("#start-button").click(function(){
				//show quiz
				$("#main").removeClass("hidden");
				$("#start").addClass("hidden");
				// decrease timer
				setInterval(function() {
		        timerVar = timerVar - 1;
		        $('#timer').text(timerVar);
		        if (timerVar == 0) {
		            showResultsPage();
							}
		    }, 1000);
			});

			$("#finish").click(function(){
				// show results page
				$("#main").addClass("hidden");
		    $("#results").removeClass("hidden");
				//tally results
				//question 0
				$.each($("input[name='question-0']:checked"), function() {
      			if ($(this).val() == correctAnswer[0].value) {
			        game.correct++;
			      }
			      else {
			        game.incorrect++;
			      }
						console.log($(this).val())
						console.log(correctAnswer[0].value)
    		})

				//question 1
				$.each($("input[name='question-1']:checked"), function() {
      			if ($(this).val() == correctAnswer[1].value) {
			        game.correct++;
			      }
			      else {
			        game.incorrect++;
			      }
						console.log($(this).val())
						console.log(correctAnswer[1].value)
    		})

				//question 2
				$.each($("input[name='question-2']:checked"), function() {
      			if ($(this).val() == correctAnswer[2].value) {
			        game.correct++;
			      }
			      else {
			        game.incorrect++;
			      }
						console.log($(this).val())
						console.log(correctAnswer[2].value)
    		})

				//question 3
				$.each($("input[name='question-3']:checked"), function() {
      			if ($(this).val() == correctAnswer[3].value) {
			        game.correct++;
			      }
			      else {
			        game.incorrect++;
			      }
						console.log($(this).val())
						console.log(correctAnswer[3].value)
    		})

				//question 4
				$.each($("input[name='question-4']:checked"), function() {
      			if ($(this).val() == correctAnswer[4].value) {
			        game.correct++;
			      }
			      else {
			        game.incorrect++;
			      }
						console.log($(this).val())
						console.log(correctAnswer[4].value)
    		})

				//question 5
				$.each($("input[name='question-5']:checked"), function() {
      			if ($(this).val() == correctAnswer[5].value) {
			        game.correct++;
			      }
			      else {
			        game.incorrect++;
			      }
						console.log($(this).val())
						console.log(correctAnswer[5].value)
    		})

				//question 6
				$.each($("input[name='question-6']:checked"), function() {
      			if ($(this).val() == correctAnswer[6].value) {
			        game.correct++;
			      }
			      else {
			        game.incorrect++;
			      }
						console.log($(this).val())
						console.log(correctAnswer[6].value)
    		})

				//question 7
				$.each($("input[name='question-7']:checked"), function() {
      			if ($(this).val() == correctAnswer[7].value) {
			        game.correct++;
			      }
			      else {
			        game.incorrect++;
			      }
						console.log($(this).val())
						console.log(correctAnswer[7].value)
    		})

				//question 8
				$.each($("input[name='question-8']:checked"), function() {
      			if ($(this).val() == correctAnswer[8].value) {
			        game.correct++;
			      }
			      else {
			        game.incorrect++;
			      }
						console.log($(this).val())
						console.log(correctAnswer[8].value)
    		})

				//question 9
				$.each($("input[name='question-9']:checked"), function() {
      			if ($(this).val() == correctAnswer[9].value) {
			        game.correct++;
			      }
			      else {
			        game.incorrect++;
			      }
						console.log($(this).val())
						console.log(correctAnswer[9].value)
    		})

					$('#correct').append(game.correct);
			    $('#incorrect').append(game.incorrect);
			    // $('#unanswered').append(unansweredQuestions.length);
					console.log(game.correct);
					console.log(game.incorrect);
			});


// function showQuiz() {
//     $("#main").removeClass("hidden");
//     $("#start").addClass("hidden");
// }
//
//
// function showResultsPage() {
//     $("#main").addClass("hidden");
//     $("#results").removeClass("hidden");
// }


// //create a set interval function that decreases 'timer' by 1 every second
//
//
//
// function decreaseTimer() {
//
//     setInterval(function() {
//         timerVar = timerVar - 1;
//         $('#timer').text(timerVar);
//         if (timerVar == 0) {
//             showResultsPage();
//             tallyResults();
//
//         }
//     }, 1000);
// };


	});
