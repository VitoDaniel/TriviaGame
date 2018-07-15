$(document).ready(function() {
    
    // declare all our trivia questions in an array
    
    var myQuestions = [
        {
            question: "When did the Cold War end?",
            answers: ['1978','1984','1992','1989'],
            correct: 3,
        },
        {
            question: "How many colonies was the US originally?",
            answers: ['11','12','13','14'],
            correct: 2,
        },

        {
            question: "Who was the 16th president of the US?",
            answers: ['Abraham Lincoln','Ulysses S. Grant','James Buchanan','Andrew Johnosn'],
            correct: 0,
        },
        {
            question: "How many Senatros in the US congress",
            answers: ['50','100','150','167'],
            correct: 1,
            
        },
        {
            question: "Who is credited with discovering America?",
            answers: ['John F. Kennedy','John McHenry','Christopher Columbs','Rudolph Frances'],
            correct: 2,
        },
        {
            question: "America won independence from this country.",
            answers: ['Brazil','Germany','France','Great Britan'],
            correct: 3,
        },
        {
            question: "Who invented the electric light bulb?",
            answers: ['Shirley Temple','Harry Ford','Thomas Edison','Andrew Jackson'],
            correct: 2,
        }
    ];

    // correct answered
    var right = 0;
    // wrong answered
    var wrong = 0;
    // unanswered
    var none = 0; 
    // user guess
    var userGuess = "";
  
    // timer
    var timer = 90;
    var time;
    var isTimeRunning = false;

    // hiding the submit and reset button
    $("#submit").hide();
    $("#reset").hide();
    
    

    // set up coundown for he trivia
    function startTimer(){
        if(!isTimeRunning) {
            time = setInterval(countDown, 1000);
            isTimeRunning = true;
        }
    }
    
    // when time is up,
    function countDown(){
            $("#timer").html("<h2>" + timer + ' seconds remainig.' + "</h2>");
            timer--;
    
            if(timer === 0) {
                stopCount();
                $("#timer").html("<h2>Your time is up.</h2>");
                setTimeout(displayResults, 2000);
            }
    }

    function stopCount(){
            isTimeRunning=false;
            timer = 10;
            clearInterval(time);
    }


    // start the game onse button start is pressed
    $("#start").on("click", function(){
        $("#start").fadeOut(500,displayQ);
        right = 0;
        wrong = 0;
        none = 0;
    });

    $("#reset").on("click", function(){
        $("#reset").fadeOut(500, displayQ);
        $("#rightAnswer").hide();
        $("#wrongAnswer").hide();
        $("#unAnswered").hide();
        right = 0;
        wrong = 0;
        none = 0;
    })

    // $("#radioAnswers").prop("checked", checkAnswer());


    // display trivia questions
    function displayQ(){

        startTimer();

        for (i=0; i < myQuestions.length; i++) {
            var  questionDiv = $("<div>").addClass("qContainer");
            var question = $("<h4>").addClass("question").text(myQuestions[i].question);
            questionDiv.append(question);
        
            var answers = myQuestions[i].answers;
            for (j=0; j < answers.length; j++){
                
                var answer = $(`<input type="radio" id="radioAnswers" name="question${i}">${myQuestions[i].answers[j]}</input>`)
              

                questionDiv.append(answer);
            }

            $("#questionArea").append(questionDiv);
            $("#submit").show();
            $("#submit").on("click", function(){
                displayResults();
                $("#timer").hide();
            });

            

        }
    }

    


    function checkAnswer(){
        if (userGuess === myQuestions[i].correct){
            right++;
        } else if(userGuess != myQuestions[i].correct){
            wrong++;
            userGuess = "";
        } else {
            none++;
        }
    }

    


    // when user clicks submit, or time is up, display results
    function displayResults(){
        $("#questionArea").remove();
        $("#submit").hide();
        $("#rightAnswer").html("<h3>" +  'Correct answers: ' + right);
        $("#wrongAnswer").html("<h3>" +  'Wrong answers: ' + wrong);
        $("#unAnswered").html("<h3>" +  'Unanswered: ' + none);
        $("#reset").show();

    }

  



    



    

});