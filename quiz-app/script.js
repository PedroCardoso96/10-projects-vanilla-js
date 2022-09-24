const quizData = [
    {
        question: "Quantos anos Pedro tem?",
        a: '10',
        b: '14',
        c: '26',
        d: '45',
        correct: 'c'
        
    },
    {
        question: "Qual a linguagem mais usada em 2022?",
        a: 'Java',
        b: 'Python',
        c: 'C',
        d: 'JavaScript',
        correct: 'b'
        
    },
    {
        question: "Quem é o presidente do Brasil em 2022?",
        a: 'Bolsonaro',
        b: 'Lula',
        c: 'Ciro',
        d: 'Pablo Marsal',
        correct: 'a'
        
    },
    {
        question: "O que significa HTML?",
        a: 'Helicoptero Tunado Marrom Lavado',
        b: 'Hypertext Markup Language',
        c: 'Hotel da Malasia',
        d: 'Java Script',
        correct: 'b'
        
    },
    {
        question: "Quando JavaScript foi lançado?",
        a: '1996',
        b: '1993',
        c: '2010',
        d: 'Nenhuma das Alternativas',
        correct: 'd'
        
    }
    

];
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

submitBtn.addEventListener('click', () => {
    currentQuiz++;

    if(currentQuiz < quizData.length){
        loadQuiz();
    } else {
        alert("Você terminou o Quiz! Beba agua, hidrate-se.")
    }


    loadQuiz();

})
