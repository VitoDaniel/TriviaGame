$(document).ready(function() {
    
    // declare all our trivia questions in an array
    
    var myQuestions = [
        {
            question: "When did the Cold War end?",
            answers: ['1978','1984','1992','1989'],
            values: [false, false, false, true],
        },
        {
            question: "How many colonies was the US originally?",
            answers: ['11','12','13','14'],
            values: [false, false, true, false],
        },

        {
            question: "Who was the 16th president of the US?",
            answers: ['Abraham Lincoln','Ulysses S. Grant','James Buchanan','Andrew Johnosn'],
            values: [true, false, false, false],
        },
        {
            question: "How many Senatros in the US congress",
            answers: ['50','100','150','167'],
            values: [false, true, false, false],
            
        },
        {
            question: "Who is credited with discovering America?",
            answers: ['John F. Kennedy','John McHenry','Christopher Columbs','Rudolph Frances'],
            values: [false, false, true, false],
        },
        {
            question: "America won independence from this country.",
            answers: ['Brazil','Germany','France','Great Britan'],
            values: [false, false, false, true],
        },
        {
            question: "Who invented the electric light bulb?",
            answers: ['Shirley Temple','Harry Ford','Thomas Edison','Andrew Jackson'],
            values: [false, false, true, false],
        }
    ];

    // correct answered
    var correct = 0;
    // wrong answered
    var wrong = 0;
    // unanswered
    var none = 0; 
  

    // ============================================= functions:


    
    var timer = 90;
    var timer;
    var isTimeRunning = false;

    function startTimer(){
        if(!isTimeRunning) {
            time = setInterval(countDown, 1000);
            isTimeRunning = true;
        }
    }
        
    function countDown(){
            $("#timer").html(timer);
            timer--;
            console.log(timer);
            if(timer === 0) {
                none++;
                stopCount();
            }
    }

    function stopCount(){
            isTimeRunning=false;
            clearInterval(time);
    }


    // start the game onse button start is pressed
    $("#start").on("click", function(){
        $("#start").fadeOut(500,displayQ, startTimer());
    });

    function displayQ(){


        for (i=0; i < myQuestions.length; i++) {
            var  questionDiv = $("<div>").addClass("qContainer");
            var question = $("<h4>").addClass("question").text(myQuestions[i].question);
            questionDiv.append(question);
        

            for (j=0; j < myQuestions[i].answers.length; j++){
                var answer = $("<h4> <input type='radio' name = 'question - " + i + "' >").addClass("answer").text(myQuestions[i].answers[j]);
                questionDiv.append(answer);
            }
        $("#questionArea").append(questionDiv);
        
        

        }
    }

    


});