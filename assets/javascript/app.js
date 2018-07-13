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
    // set our timer to 90
    var count = 90;

    // ============================================= functions:

    // start the game onse button start is pressed
    $("#start").on("click", function(){
        $("#start").fadeOut(500, displayQ);
    });

    function displayQ(){

    

        // var counter = setInterval(timer, 1000);
        // function timer(){
        //     count--;
        //     if (count<=0){
        //         clearInterval(counter);
        //         // return; will add later
        //     }
        // }

        // $("#questionArea").append(count);

        for (i=0; i < myQuestions.length; i++) {
            var  questionDiv = $("<div>").addClass("qContainer");
            var question = $("<h4>").addClass("question").text(myQuestions[i].question);
            questionDiv.append(question);
        

            for (j=0; j < myQuestions[i].answers.length; j++){
                var answer = $("<input type='radio' name ='question-" + i + "' >").addClass("answer").text(myQuestions[i].answers[j]);
                questionDiv.append(answer);
            }
        $("#questionArea").append(questionDiv);
        
        


        }
    }

    























//     // function to display question and remove previous content
//     function displayQ(){
//         $(".message-content").remove();
//         $("#start").remove();
//     }

//     // create variables for timer, quesiton and question and give it value of id in html
//    var timer =  $("#timer");
//    var question = $("#question");
//    var questionArea = $("#questionArea");

//     //    // append the elements so they display properly
//     //    timer.appendTo(questionArea);
//     //    question.appendTo(questionArea);


//     // set up countdown timer
//     var time = 30;
//     timer.html("#timer" + time + "seconds remaining.");

//     // countdown function that stops when time==0
//     var countDown = setInterval(function(){
//         time--;
//         timer.html("#timer" + time + "seconds remaining.");

//         if (time === 0){
//             clearInterval(countDown);
//             questionArea.fadeToggle("slow", timedOut);
//             none++;
//         }
//     }, 1000);



    // var triviaContainer = document.getElementById('trivia');
    // var resultsContainier = document.getElementById('results');
    // var submitButton = document.getElementById('submit');
    
    // generateTrivia (myQuestions, triviaContainer, resultsContainier, submitButton);
    
    
    
    // function generateTrivia (questions, triviaContainer, resultsContainier, submitButton){
        
    //     function showQuestion(questions, triviaContainer){
    //         // store output and answer choises
    //         var output = [];
    //         var answers;

    //         // for each question:
    //         for(var i = 0; i<questions.length; i++){

    //             // reset the list of answers
    //             answers = [];

    //             // for each available answer to this question add an html radio button
    //             for(letter in questions[i].answers){
    //                 answer.push(
    //                     '<label>'
    //                       +'<input type = "radio" name = "question '+i+'" value="'+letter+'">'
    //                       + letter + ':'
    //                       + questions[i].answers[letter]
    //                     + '</label>'
    //                 );
    //             }

    //             // add this questions and its anwers to the output
    //             output.push(
    //                 '<div class = "question">' + questions[i].question + '</div>'
    //                 + '<div class = "answers">' + answers.join('') + '</div>'
    //             );
    //         }

    //         // combine our output list into one string of html and siplay on a page
    //         triviaContainer.innerHTML = ouput.join('');
    //     }

    //     function showResults(questions, triviaContainer, resultsContainier){
    //          var answerContainers = triviaContainer.querySelectorAll('.answers');

    //          var userAnswer = '';
    //          var numCorrect = 0;

    //          for(var i=0; i<questions.length; i++){
    //              userAnswer = (answerContainers[i].querySelectorAll('input[name=question'+i+']:checked;')||{}).value;

    //              if(userAnswer === questions[i].correctAnswer){
    //                  numCorrect++;

    //                  answerContainers[i].style.color = 'lighgreen';
    //              } else {
    //                  answerContainers[i].style.color = 'red';
    //              }
    //          }

    //          resultsContainier.innerHTML = numCorrect + ' out of ' + questions.length;
    //     }
    //     // show the questions
    //     showQuestion(questions, triviaContainer);

    //     // when user clicks submit, show results
    //     submitButton.onclick = function(){
    //         showResults(questions, triviaContainer, resultsContainier);
    //     }
    // }

    

    


 



});