$(document).ready(function() {
    
    // declare all our trivia questions in an array
    
    var myQuestions = [
        {
            question: "When did the Cold War end?",
            answers: ['1978','1984','1992','1989'],
            correct: '1989',
        },
        {
            question: "How many colonies was the US originally?",
            answers: ['11','12','13','14'],
            correct: '13',
        },

        {
            question: "Who was the 16th president of the US?",
            answers: ['Abraham Lincoln','Ulysses S. Grant','James Buchanan','Andrew Johnosn'],
            correct: 'Abraham',
        },
        {
            question: "How many Senatros in the US congress",
            answers: ['50','100','150','167'],
            correct: '100',
            
        },
        {
            question: "Who is credited with discovering America?",
            answers: ['John F. Kennedy','John McHenry','Christopher Columbs','Rudolph Frances'],
            correct: 'Christopher',
        },
        {
            question: "America won independence from this country.",
            answers: ['Brazil','Germany','France','Great Britan'],
            correct: 'Great',
        },
        {
            question: "Who invented the electric light bulb?",
            answers: ['Shirley Temple','Harry Ford','Thomas Edison','Andrew Jackson'],
            correct: 'Thomas',
        }
    ];

    // correct answered
    var right=0;
    // wrong answered
    var wrong=0;

    // timer
    var timer = 300;
    var time;
    var isTimeRunning = false;

 // set up coundown for he trivia
    function startTimer(){
        if(!isTimeRunning) {
            time = setInterval(countDown, 1000);
            isTimeRunning = true;
        }
    }

    // when countdown reaches 0, stop timer, display results.
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


    // our function to start the game
    function startGame(){

        // hiding the submit button
        $("#submit").hide();


        // once button Start clicked, run the displayQ function, that displays question and runs the timer
        $("#start").on("click", function(){
            $("#start").fadeOut(1000,displayQ);
        
        });

        // function that displays our questions through for loop:
        function displayQ(){

            startTimer();

            // runnning loop through questions to display them all
            for (i=0; i < myQuestions.length; i++) {
                var  questionDiv = $("<div>").addClass("qContainer");
                var question = $("<h4>").addClass("question").text(myQuestions[i].question);
                questionDiv.append(question);
            
                // same for answers, and adding type radio button, to allow user to check them
                var answers = myQuestions[i].answers;
                for (j=0; j < answers.length; j++){
                    
                    var answer = $(`<input type="radio" id="radioAnswers" value=${myQuestions[i].answers[j]} name="question${i}">${myQuestions[i].answers[j]}</input>`)
                    questionDiv.append(answer);
                }

                $("#questionArea").append(questionDiv);
                $("#submit").show();
                
            }
        }        
    }
    
    
    //once user clicks submit button, all checked buttons will check right answer and push the results  to right/wrong var.
    $("#submit").on("click", function(){
        checkCorrect();
        displayResults();
        $("#timer").hide();
    });


    // creating function to check if answers are correct and push it to right variable,
    function checkCorrect(){
        //we are looping through each question in array
        for (i=0; i < myQuestions.length; i++) {
            // in each question we are looping through each answer
            // for (j=0; j < myQuestions[i].answers.length; j++) { 
                // if checked box equals right answer , then add score to right var, if not  - to wrong var.
                if ($("input:checked")[i].value === myQuestions[i].correct) {
                    right++;
                } else {
                    wrong++;
                }
            // }
        }
    }
  

    // for( j=0; j<myQuestions[i].answers.length; j++) { debugger
    //     if($("input:checked")[j].value === myQuestions[i].answers[ myQuestions[i].correct ]
    // ){
    //         right++;
    //     } else {
    //         wrong++;
    //     }
    // }


    // when user clicks submit, or time is up, display results
    function displayResults(){
        $("#questionArea").hide();
        $("#submit").hide();
        $("#rightAnswer").html("<h3>" +  'Correct answers: ' + right);
        $("#wrongAnswer").html("<h3>" +  'Wrong answers: ' + wrong);
        $("#refresh").html("<h2>" + 'Refresh the page to play again!');
    }


    startGame();


});