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




function showQuiz() {
    $("#main").removeClass("hidden");
    $("#start").addClass("hidden");
}


function showResultsPage() {
    $("#main").addClass("hidden");
    $("#results").removeClass("hidden");
}


//create a set interval function that decreases 'timer' by 1 every second



function decreaseTimer() {

    setInterval(function() {
        timerVar = timerVar - 1;
        $('#timer').text(timerVar);
        if (timerVar == 0) {
            showResultsPage();
            tallyResults();

        }
    }, 1000);
}



function tallyResults() {

        $.each($["input:checked"], function() {
            for (i = 0; i < 10; i++) {
                console.log($.each($["input:checked"]));
            if ($(this).val() === correctAnswer[i].value) {
                game.correct++
                break;
            } else {
                game.incorrect++
                break;
            }
            }
        })


    $('#correct').append(game.correct);
    $('#incorrect').append(game.incorrect);
    $('#unanswered').append(unansweredQuestions.length);
    }

    	

    	
    
    	

