let preguntas = document.querySelector(".quiz");
let boton = document.querySelector(".submit");
let resultados = document.querySelector(".results");

let mispreguntitas = [
    {
      question: '¿A quién le pertenece la canción "Treasure"?',
      answers: {
        a: "Ed Sheeran",
        b: "Marshmello",
        c: "Bruno Mars"
      },
      correctAnswer: "c"
    },
    {
      question: '¿Qué canción NO pertenece al album "Music to be Murdered by", de Eminem?',
      answers: {
        a: "Godzilla",
        b: "Darkness",
        c: "No Regrets",
        d: "The Real Slim Shady"
      },
      correctAnswer: "d"
    },
    {
      question: "¿A qué género muscical pertenecen Luke Combs y Jason Aldeans?",
      answers: {
        a: "Country",
        b: "Jazz",
        c: "Reggae",
        d: "R&B"
      },
      correctAnswer: "a"
    },
    {
        question: '¿En qué año salio el album "Chinese Democracy" de Guns N´ Roses?',
        answers:{
        a: "2008",
        b: "2009",
        c: "2010",
        d: "2011"
    },
    correctAnswer: "a"
    },
    {
        question: 'La canción "Blinding Lights",de The Weekend dura exactamente 200 segundos.',
        answers:{
        a: "Verdadero",
        b: "Falso",
    },
    correctAnswer: "a"
    }, 

  ];

function buildQuiz(){
    let output = [];
    console.log(output);
    

    mispreguntitas.forEach(function(currentQuestion, questionNumber){
        let answers=[];
        for(letter in currentQuestion.answers){
            answers.push(
                `<label class="alternativas">
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                <br></label>`
              );
        }

    
    output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    
      preguntas.innerHTML = output.join('');
    })
}
    

function showResults(){
    let answerContainers = preguntas.querySelectorAll('.answers');
    console.log(answerContainers);
    let numCorrect = 0;

    mispreguntitas.forEach(function(currentQuestion, questionNumber){
        let answerContainer = answerContainers[questionNumber];
        let selector = `input[name=question${questionNumber}]:checked`;
        let userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
          } else{
            answerContainers[questionNumber].style.color = 'red';
          }

    });
    resultados.innerHTML = "<h2> Pegaste "+ numCorrect+ " de "+mispreguntitas.length+"</h2>";
    
}

buildQuiz();

boton.addEventListener('click', showResults);

