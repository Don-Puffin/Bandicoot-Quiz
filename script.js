const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const playAgainButton = document.getElementById('playagain-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionBox = document.getElementById('question-box')
const cortexCard = document.getElementById('cortex')
const nGinCard = document.getElementById('ngin')
const tinyCard = document.getElementById('tiny')
const oxideCard = document.getElementById('oxide')
const ntropyCard = document.getElementById('ntropy')
const dingodileCard = document.getElementById('dingodile')
const nbrioCard = document.getElementById('nbrio')
const pinstripeCard = document.getElementById('pinstripe')
const ukaukaCard = document.getElementById('ukauka')
const ripperrooCard = document.getElementById('ripperroo')
// 0 - the original value of all of these counts:
let cortexCount = 0
let nGinCount = 0
let tinyCount = 0
let oxideCount = 0





let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
playAgainButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})





function startGame(){
    console.log('Started')
    startButton.classList.add('hidden')
    shuffledQuestions = question.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hidden')
     setNextQuestion()
    }

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
   
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        button.classList.add('bg-blue-500')
        button.classList.add('p-4')
        button.classList.add('rounded-lg')
        button.classList.add('border')
        button.classList.add('border-black')
        button.classList.add('border-4')
        button.classList.add('font-bold')
        button.classList.add('items-center')
        button.classList.add('shadow-2xl')
        button.classList.add('md:h-20')
        button.classList.add('md:w-60')
        button.classList.add('sm:w-40')
        button.classList.add('sm:text-sm')
        button.classList.add('bg-gradient-to-b')
        button.classList.add('from-yellow-500')
        button.classList.add('to-red-500')
        button.classList.add('text-center')
        questionElement.classList.add('font-bold')
        questionElement.classList.add('md:text-lg')
        





        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        button.name = index
        answerButtonsElement.appendChild(button)
        
    })
}
 
 

function resetState() {
    // clearStatusClass(document.body)
    nextButton.classList.add('hidden')
    while (answerButtonsElement.firstChild) 
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
}

function selectAnswer(e) { console.log(e)
    
    switch (e.target.name) {
        case '0':
            cortexCount++
            break;
        case '1':
            nGinCount++
            break;
        case '2':
            tinyCount++
            break;
        case '3':
            oxideCount++
            break;
    } 

    // let Math.max(cortexCount, nGinCount, tinyCount, oxideCount)
    // console.log(Math.max)
    // // cortexCard.classList.remove('hidden')

    console.log(Math.max(cortexCount, nGinCount, tinyCount, oxideCount))

    function displayPersonality() {
        if (cortexCount >= 2) {
            cortexCard.classList.remove('hidden')
        }
        if (nGinCount >=2) {
            nGinCard.classList.remove('hidden')
        }
        if (tinyCount >=2) {
            tinyCard.classList.remove('hidden')
        }
        if (oxideCount >=2) {
            oxideCard.classList.remove('hidden')
        }
        if (cortexCount >=2 && oxideCount >=2) {
            ntropyCard.classList.remove('hidden')
            cortexCard.classList.add('hidden')
            oxideCard.classList.add('hidden')
        }
        if (nGinCount >=2 && tinyCount >=2) {
            dingodileCard.classList.remove('hidden')
            nGinCard.classList.add('hidden')
            tinyCard.classList.add('hidden')
        }
        if (nGinCount >= 2 && oxideCount >=2) {
            nbrioCard.classList.remove('hidden')
            nGinCard.classList.add('hidden')
            oxideCard.classList.add('hidden')
        }
        if (cortexCount >=2 && tinyCount >=2) {
            ukaukaCard.classList.remove('hidden')
            cortexCard.classList.add('hidden')
            tinyCard.classList.add('hidden')
        }
        if (tinyCount >=2 && oxideCount >=2) {
            ripperrooCard.classList.remove('hidden')
            tinyCard.classList.add('hidden')
            oxideCard.classList.add('hidden')
        }
        if (nGinCount >=2 && cortexCount >=2) {
            pinstripeCard.classList.remove('hidden')
            cortexCard.classList.add('hidden')
            nGinCard.classList.add('hidden')
        }
    }



    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++
    setNextQuestion()
    } else {
        startButton.innerText ="Restart"
        startButton.classList.remove('hidden')
        questionBox.classList.add('hidden')
        displayPersonality()
        // nGinCard.classList.remove('hidden')
        
    } 
    
}



const question = [
    {
        question: 'What is your favourite type of weapon?',
        answers: [
            {text: 'Guns'},
            {text: 'Explosives'},
            {text: 'Melee'},
            {text: 'Vehicles'}
        ]
    },
    {
        question: 'When your opponent gets the better of you, how do you react?',
        answers: [
            {text: 'Scream and shout!'},
            {text: 'Improve myself to win next time!'},
            {text: 'Physically assault them!'},
            {text: 'Cheat!'}
        ]
    },
    {
        question: 'How do you deal with your anger?',
        answers: [
            {text: 'Cry'},
            {text: 'Be creative'},
            {text: 'Break things'},
            {text: 'Spend time alone'}
        ]
    },
    {
        question: "If I discovered something new, I'd...",
        answers: [
            {text: 'Name it after myself!'},
            {text: 'Share it with my peers!'},
            {text: 'Eat it!'},
            {text: 'Use it for my own benefit!'}
        ]
    },
    
    {
        question: "My idea of a good time is...",
        answers: [
            {text: 'People praising how great I am!'},
            {text: 'Working on a project'},
            {text: 'Working out'},
            {text: 'Driving on the open road'}
        ]
    }
]

