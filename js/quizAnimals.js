



var questionNumber=0;
var questionBank=new Array();
var stage="#game1";
var stage2=new Object;
var questionLock=false;
var numberOfQuestions;
var score=0;

    $.getJSON('/json/animals.json', function(data) {

    for(i=0;i<data.quizlist.length;i++){ 
      questionBank[i]=new Array;

      questionBank[i][0]=data.quizlist[i].option1;//first option is always right answer!
      questionBank[i][1]=data.quizlist[i].option2;
      questionBank[i][2]=data.quizlist[i].option3;
      questionBank[i][3]=data.quizlist[i].option4;
      questionBank[i][4]=data.quizlist[i].question;//question
      questionBank[i][5]=data.quizlist[i].option1;// Take Rigrht answer to check if user choose right or wrong
    }
    numberOfQuestions=questionBank.length; 
    
      
    displayQuestion();
    })//gtjson
 

// function randomInteger(min, max) {
//   var rand = min + Math.random() * (max - min)
//   rand = Math.round(rand);
//   return rand;
// }

function displayQuestion(){
 // var rnd = randomInteger(1, 4)
 // console.log(rnd);

 var q1,  q2,  q3,  q4, question, rightAnswer;
 // Shaffle my aray for random output in html
 function shuffle(a) {
    var j, x, i;
    for (i = a.length-2; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
shuffle(questionBank[questionNumber]);
q1=questionBank[questionNumber][0];
q2=questionBank[questionNumber][1];
q3=questionBank[questionNumber][2];
q4=questionBank[questionNumber][3];
question  = questionBank[questionNumber][4];
rightAnswer = questionBank[questionNumber][5];

 $(stage).append('<div  class="questionText">'+question+
  '</div><div id="1" class="pix"><img class="img-responsive" src="'+q1+'"></div><div id="2" class="pix"><img class="img-responsive" src="'+q2+'"></div><div id="3" class="pix"><img class="img-responsive" src="'+q3+'"></div><div id="4" class="pix"><img class="img-responsive" src="'+q4+'"></div>');

 $('.pix img').click(function(){
  if(questionLock==false){questionLock=true;
  console.log(questionBank[questionNumber][5]+' rigthanswer')
  console.log($(this).attr('src'))  
  //correct answer
  if($(this).attr('src')==rightAnswer){
    var yes = new Audio("audio/yes.mp3");
      yes.play();
   $(stage).append('<div class="feedback1">CORRECT</div>');
  
   $(stage).append('<div class="feedback1Bottom">CORRECT</div>');
   score++;
   }
  //wrong answer  
  if($(this).attr("src")!==rightAnswer){
    var no = new Audio("audio/no.mp3");
      no.play();
   $(stage).append('<div class="feedback2">WRONG</div>');
   $(stage).append('<div class="feedback2Bottom">WRONG</div>');
  }
  setTimeout(function(){changeQuestion()},1000);
 }})
}//display question


  function changeQuestion(){
    
    questionNumber++;
  
  if(stage=="#game1"){stage2="#game1";stage="#game2";}
    else{stage2="#game2";stage="#game1";}
  
  if(questionNumber<numberOfQuestions){displayQuestion();}else{
 clearTimer();}
  
   $(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
   $(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
  }//change question
  

  
  function displayFinalSlide(){
    
     var missedQuestions ="";
    var noMistakes =" No Mistakes! It's amazing!";
    var mistakeORmistake='';
    if(missedQuestions<=1){
  mistakeORmistake='mistake';

    }else{
      mistakeORmistake='mistakes';
    }
    // if no mistakes answers
    if(numberOfQuestions == score){
      $('.nextSectionButton').html("NEXT STEP");
       $('.nextSectionButton').fadeIn();

       $('.spacer').append('You have finished the quiz!<br><br>Total questions: '
      +numberOfQuestions+'<br>Correct answers: '
      +score+'<br>'+' <div class="btn restart link" data-hash="home">'
      +'Restart'+'</div>'+"<br>"+'<div class="great">'+noMistakes+'</div>');

     
    // if there are some mistakes 
  } else{
      $('.nextSectionButton').fadeOut();
       missedQuestions = numberOfQuestions - score;
$('.spacer').append('You have finished the quiz!<br><br>Total questions: '
      +numberOfQuestions+'<br>Correct answers: '
      +score+'<br>'+' <div class="btn restart link" data-hash="home">'
            +'Restart'+'</div>'+"<br>"+'<div class="great">'+"You have made "+missedQuestions+' '+mistakeORmistake+'!'+'</div>');
    }

     
  $('.btn').click(function(){
      location.reload();
    })
  }//display final slide
var logo = function (){
   $('.logo').css('width', 200);
        $('.slogon h1, h2').fadeOut(50);
};
logo();
 var start= 0;
  var timerINT = setInterval(function(){timer()},1000);


function timer(){
    ++start
  $('.timeLive').html(start); 
    console.log(start);
    
  }
function clearTimer () {
  
      clearInterval(timerINT)
      displayFinalSlide();
      $("#navContent").css('display', 'none');
       $("footer").css({
        marginTop :'10%',

        
       });
    }   
      timer();
  
