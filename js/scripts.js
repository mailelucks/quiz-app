$(document).ready(function() {
  
    
/*--- Hide quiz and result section on load ---*/
$('.quiz').hide();
$('.outro').hide();
    
/*--- Questions ---*/
var questions = [
    //Question 1
    {
        question: 'This flower is indigenous to Turkey and the Middle East. Both Homer and Virgil noted its sweet fragrance',
        background: 'hyacinths',
        options: ['Lavender', 'Hyacinth', 'Fuchsia'],
        answer: 1
    },
    
    //Question 2
    {
        question: 'Named for its scent, this rare flower from Mexico is highly attractive to butterflies.', 
        background: 'Chocolate-Cosmos',
        options: ['Chocolate Cosmos', 'Hollyhock', 'Wine Mini Calla Lilies'],
        answer: 0
    },
     //Question 3
    {
        question: 'The flowers close at night, and reopen in the morning. The genus name honors Captain William Clark of the Lewis and Clark expedition to the Northwest in 1806.',
        background: 'clarkia',
        options: ['Pink Petticoats', 'Evening Primrose', 'Farewell to Spring'],
        answer: 2
    },
    //Question 4
    {
        question: 'A summertime favorite, you can eat the nectar of this flower without regrets.',
        background: 'honeysuckle',
        options: ['Marigold', 'Honeysuckle', 'Yucca Petals'],
        answer: 1
    },
    //Question 5
    {
        question: 'Often used as the symbol for rebirth, you can find this flower in lakes and ponds.',
        background: 'pink-lotus',
        options: ['Water Lily', 'Hibiscus', 'Lotus'],
        answer: 2
    },
];

// Variables
	var questionNum = 0;
	var questionTotal = questions.length;
	var correctTotal = 0;
    var feedback = [
	"You are a true greenthumb!", "Let's take a stroll through the garden, you almost got them all right!", "Were you paying attention at the nursery? Try again!" , "Uh oh...don't quit your day job!"
];

//Start Quiz Click
$('.startQuiz').on('click', function(){
		$('.intro').hide();
		$('.outro').hide();
		$('.quiz').show();
		displayQuestion();
});
    
//Quiz Functionality
$('.quiz').on('click', '#option', function(){

    var userGuess = $("input[id='option']:checked").val();
	var correctAnswer = questions[questionNum].answer;
    if (userGuess == correctAnswer) {  
    	//if correct answer was selected    
      	correctTotal++;
    } 
});
    
 $('.quiz').on('click', '#option', function(){
    //quiz is finished, show result-section
    if ((questionNum+1) == questionTotal) { 
      	$('.outro').show();
    	$('.score').text('Completed! You have scored ' + correctTotal + ' out of ' + questionTotal + '!');
    	//load correct feedback based on correctTotal 
    	if (correctTotal === questionTotal) {
    		$('.results').append(feedback[0]);
    	}
    	else if (correctTotal === 0) {
    		$('.results').append(feedback[3]);
    	}
        else if ((correctTotal <= 2) && (correctTotal > 1)){
    		$('.results').append(feedback[2]);
    	}
    	else {
    		$('.results').append(feedback[1]);
    	}  
    	$('.startQuiz').show();
  		//hide other "screens"
    	$('.quiz').hide();
    	$('.intro').hide();
      
    } else {
   		//continue to next question
    	questionNum++;
    	displayQuestion();
    }
  });

//New Game
$('.outro').on('click', '.startQuiz', function(){
    $('.intro').show();
    $('.quiz').hide();
    $('.outro').hide();
        //reset variables to start quiz again
        questionNum = 0;             
        correctTotal = 0;	
});

//Display Question
function displayQuestion() {
    $('.quiz').css('background-image' , 'url(images/'+questions[questionNum].background+'.jpg');
    $('.question p').text(questions[questionNum].question);
    $('.options').empty();
    var optionsTotal = questions[questionNum].options.length;
    for (var i = 0; i < optionsTotal; i++) {
        $('.options').append('<input type="radio" id="option" class="option" name="option" value=' + i + '>' + questions[questionNum].options[i] + '<br>')
    }
    
}

    
});
