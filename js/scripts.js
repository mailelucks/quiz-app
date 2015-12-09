$(document).ready(function() {
  
    
/*--- Hide quiz and result section on load ---*/
$('.quiz').hide();
$('.outro').hide();
    
/*--- Questions ---*/
var questions = [
    //Question 1
    {
        question: 'This flower is indigenous to Turkey and the Middle East. Both Homer and Virgil noted its sweet fragrance',
        background: hyacinths,
        options: ['Lavender', 'Hyacinth', 'Fuchsia'],
        answer: 1
    },
    
    //Question 2
    {
        question: 'Named for its scent, this rare flower from Mexico is highly attractive to butterflies.', 
        background: Chocolate-Cosmos,
        options: ['Chocolate Cosmos', 'Hollyhock', 'Wine Mini Calla Lilies'],
        answer: 0
    },
     //Question 3
    {
        question: 'The flowers close at night, and reopen in the morning. The genus name honors Captain William Clark of the Lewis and Clark expedition to the Northwest in 1806.',
        background: clarkia,
        options: ['Pink Petticoats', 'Evening Primrose', 'Farewell to Spring'],
        answer: 2
    },
    //Question 4
    {
        question: 'A summertime favorite, you can eat the nectar of this flower without regrets.',
        background: honeysuckle,
        options: ['Marigold', 'Honeysuckle', 'Yucca Petals'],
        answer: 1
    },
    //Question 5
    {
        question: 'Often used as the symbol for rebirth, you can find this flower in lakes and ponds.',
        background: pink-lotus,
        options: ['Water Lily', 'Hibiscus', 'Lotus'],
        answer: 2
    },
];
    
$('.startQuiz').on('click', function(){
		$('.intro').hide();
		$('.outro').hide();
		$('.quiz').show();
		displayQuestion();
});
    
});
