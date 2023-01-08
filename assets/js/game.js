// DOM Selectors
var question = document.getElementById('question');
var choice =Array.from(document.getElementsByClassName('choice'));

// Timer Section
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
    timeHeader.innerHTML = 'Redirect to highscore.html'
}


// Questions
var questions = [
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
]
var adjustableQuestion = questions.slice();

console.log(adjustableQuestion)
// GamePlay

var incorrectAnswer = -15;
var acceptingAnswers = true;
var availQuestion = [];

function startGame() {
    
    console.log(question);
    getNewQuestion();
}

function getNewQuestion() {


    var randomQuestion = Math.floor(Math.random() * adjustableQuestion.length);
    currentQuestion = adjustableQuestion[randomQuestion]; // number
    question.innerText = currentQuestion['question']; //populates the question on page.

    choice.forEach(chosen => {
        var num = chosen.dataset['number'];
        chosen.innerText = currentQuestion["chosen"+num];
    })
    
    // currentChoice = currentQuestion['choice1'];
    // choice.innerText = currentQuestion['choice1'];
    // console.log(currentChoice)


//    for (var i = 0 ; i < questions.length; i++) {
//     currentChoices = currentQuestion.number;
//     choice.innerHTML = currentChoices + [i];
//     console.log(choice.innerHTML);
   
// }
    // choice(chozen => {
    //     var number = chozen.dataset["number"];
    //     console.log(number);
    //     chozen.innerText = currentQuestion[chozen + number];
        console.log(choice)
    // })    

    console.log(randomQuestion)
    console.log(currentQuestion)
    console.log(question.innerText)


/// select choice from list 
    choice.forEach(chosen => {
        chosen.addEventListener("click", e => {
            console.log(e.target)
        })
    });
console.log(currentQuestion.dataset)

choice.forEach(choices => {
    choices.addEventListener("click", e =>{
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedAnswer);
        getNewQuestion();
    })
})
///
    

    
}


startGame()
