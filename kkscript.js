const quizData = [
    {
        question: "What year was the very first model of the iPhone released?",
        a:"2004",
        b:"2007",
        c:"2006",
        d:"2005",
       Answer : "b"
    },
    {
        question: "What’s the shortcut for the “copy” function on most computers?",
        a:"crtl + A",
        b:"ctrl + B",
        c:"ctrl + C",
        d:"crtl + Z",
       Answer : "c"
    },{
        question: "Who is often called the father of the computer?",
        a:"Charles Babbage",
        b:"Sarah ",
        c:"Pierre",
        d:"Elon Musk",
       Answer : "a"
    },{
        question: "How many molecules of oxygen does ozone have?",
        a:"7",
        b:"5 ",
        c:"3",
        d:"2",
       Answer : "c"
    },{
        question: "Which original Avenger was not in the first few movies?",
        a:"Iron Man",
        b:"Hulk ",
        c:"Captian America",
        d:"Wasp",
       Answer : "d"
    },{
        question: "Which infinity stone was located on Vormir?",
        a:"Soul Stone",
        b:"Reality Stone ",
        c:"Time Stone",
        d:"Mind Stone",
       Answer : "a"
    },{
        question: "Which Avenger is the only one who could calm the Hulk down?",
        a:"Captain Marvel",
        b:"Black Widow",
        c:"Gamora",
        d:"Okoye",
       Answer : "b"
    },{
        question: "How many times had Rafael Nadal won the French Open by March 2020?",
        a:"12",
        b:"10",
        c:"8",
        d:"11",
       Answer : "a",
    },{
        question:"Which watch company has a pointed crown as its logo?",
        a:"Titan",
        b:"Beetle",
        c:"Rolex",
        d:"Apple",
       Answer : "c"
    },{
        question:"What country has the highest life expectancy?",
        a:"India",
        b:"Hong Kong",
        c:"China",
        d:"Sri Lanka",
       Answer : "b",
    },{
        question:"What type of doctor is Doctor Strange?",
        a:"A neurosurgeon",
        b:"A Otolaryngology",
        c:"A Cardiothoracic",
        d:"A Obstetrician",
       Answer : "a",
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
          


