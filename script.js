const quizData = [
{
    question: '¿Qué edad tiene Pablo?',
    a: '10',
    b: '17',
    c: '26',
    d: '20',
    correct: 'c' 
}, {
    question:  '¿Cuál es el lenguaje de programación más usado en 2022?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'Javascript',
    correct: 'd'
}, {
    question: '¿Quién es el presidente de los Estados Unidos?',
    a: 'Will Smith',
    b: 'Joe Biden',
    c: 'Donald Trump',
    d: 'Miguel saldano',
    correct: 'b'
}, {
    question: '¿Qué significa HTML?',
    a: 'Hypertext Markup Language',
    b: 'Casading Style Sheet',
    c: 'Json Object Notation',
    d: 'Application Programming Interface',
    correct: 'a' 
}, {
    question: '¿En qué año fue lanzado Javascript?',
    a: '1996',
    b: '1993',
    c: '1994',
    d: 'Ninguna de las anteriores',
    correct: 'd' 
}
];

const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question');


const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function  getSelected(){



    var answer = undefined;

    answersEls.forEach((answerE1) => {
        if(answerE1.checked) {
            answer = answerE1.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answersEls.forEach((answerE1) => {
        answerE1.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //check to see answer
    const answer = getSelected();


    console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;

    if(currentQuiz < quizData.length){
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length}</h2> <button onclick="location.reload()">Reload</button>`;
        } 
    }
});
  