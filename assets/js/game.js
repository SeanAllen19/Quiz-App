// DOM Selectors
var question = document.getElementById('question');
var choices =Array.from(document.getElementsByClassName('choice')); //making an array of all my choices, so its easier to use  array methods.
// var choice1 =document.getElementById('choice1');
// var choice2 =document.getElementById('choice2');
// var choice3 =document.getElementById('choice3');
// var choice4 =document.getElementById('choice4');
// var _button = document.getElementsByClassName('button');
// console.log(choices);

//////////////////////////////////////// Timer Section
var timeHeader = document.querySelector('h3')
var timeSecond = 60;
displayTime(timeSecond);

var countDown = setInterval( () => {
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond < 0){
        endTime()
        clearInterval(countDown)
        
    }
}, 1000)

function displayTime(second) {
    var min = Math.floor(second / 60);
    var sec = Math.floor(second % 60);
    timeHeader.innerHTML = `${min<10 ? '0': ''}${min}:${sec<10? '0' : ''}${sec}`;
}

function endTime() {
    timeHeader.innerHTML = '00:00 uncomment return str';
    // return window.location.assign("./highscores.html");
}

/////////////////////////////////////////// Questions
var questions =  [
    {
        question: "Who is the main character in Pokemon?" ,
        choice1: "Ash",
        choice2: "Misty",
        choice3: "Brock",
        choice4: "Mewtwo",
        answer: 1

    },

    {
        question: "Which of these Pokemon types don't exist?" ,
        choice1: "Rock",
        choice2: "Poison",
        choice3: "Glass",
        choice4: "Metal",
        answer: 3

    }, 

    {
        question: "How many Eevee evolutions are there?" ,
        choice1: "4",
        choice2: "6",
        choice3: "8",
        choice4: "10",
        answer: 3

    },
    {
        question: "Who is Pokemon number 1 in the Pokedex?",
        choice1: "Charmander",
        choice2: "Bulbasaur",
        choice3: "Squirtle",
        choice4: "Pikachu",
        answer: 2

    },
    {
        question: "How many Pokemon are there?" ,
        choice1: "151",
        choice2: "913",
        choice3: "989",
        choice4: "1000+, Who cares?",
        answer: 2
    },
    {
        question: "How many Pokeballs are there?" ,
        choice1: "2",
        choice2: "7",
        choice3: "13",
        choice4: "27",
        answer: 4

    },
    {
        question: "Where does Pokemon originate from?" ,
        choice1: "Japan",
        choice2: "China",
        choice3: "America",
        choice4: "A Computer",
        answer: 1

    },
    {
        question: "What's Ash's last name?" ,
        choice1: "Ketchup",
        choice2: "Kaughthem",
        choice3: "Ketchum",
        choice4: "Kepchup",
        answer: 3

    },
    {
        question: "What type of Pokemon does Misty use?" ,
        choice1: "Psychic",
        choice2: "Rock",
        choice3: "Dark",
        choice4: "Water",
        answer: 4

    },
    {
        question: "Which of these Pokemon is not a starter Pokemon(Gen 1)?" ,
        choice1: "Charmander",
        choice2: "Pikachu",
        choice3: "Bulbasaur",
        choice4: "Squirtle",
        answer: 2

    },
    {
        question: "Fill in the blank: I want to be: _______" ,
        choice1: "Stronger",
        choice2: "The very best",
        choice3: "The ultimate Pokemon catcher",
        choice4: "Drunk",
        answer: 2

    },
] //11 total questions
var adjustableQuestion = questions.slice();
// separate array to splice out of.
// console.log(adjustableQuestion)
// GamePlay
var questionCounter = 0;
var acceptingAnswers = false;


function startGame() {
    adjustableQuestion;
    questionCounter = 0;
    // console.log(adjustableQuestion[0]['answer']); targeting first answer in the adjustableQuestion array
    getNewQuestion();
}

function getNewQuestion() {
    if (adjustableQuestion.length === 0) {
        return window.location.assign("./highscores.html")
    }
    questionCounter++;
    var randomQuestion = Math.floor(Math.random() * adjustableQuestion.length); //console.log(randomQuestion)
    currentQuestion = adjustableQuestion[randomQuestion]; // number console.log(currentQuestion)
    question.innerText = currentQuestion['question']; //populates the question on page. // console.log(question.innerText)

    // choice1.innerText = currentQuestion['choice1']; //populates the answer onto the page.
    // choice2.innerText = currentQuestion['choice2']; //populates the answer onto the page.
    // choice3.innerText = currentQuestion['choice3']; //populates the answer onto the page.
    // choice4.innerText = currentQuestion['choice4']; //populates the answer onto the page.
    
    choices.forEach(choice => {
        var _num = choice.dataset.number;
        choice.innerText = currentQuestion["choice" + _num];
    })

    adjustableQuestion.splice(randomQuestion,1);
    acceptingAnswers = true;

};

// select choice from list 
    // choices.forEach(chosen => {
    //     chosen.addEventListener("click", e => {
    //         console.log(e.target)
    //         if(!acceptingAnswers) return
    //     })
    // });
    

   
 /////////////////////////// choices section   
choices.forEach(choices => {
    choices.addEventListener("click", e =>{
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedAnswer == currentQuestion.answer);
       
        var classToApply = 'incorrect';
            if(selectedAnswer == currentQuestion.answer) {
                classToApply = 'correct';
            selectedChoice.parentElement.classList.add(classToApply);
            selectedChoice.parentElement.classList.remove(classToApply)
            }
            console.log(classToApply)

            ;
        getNewQuestion();
    })
});
// ///
    

    



startGame()
