'use strict';

var quiz = {
    questions: ['What does DOM stand for?', 'What array property tells us how many items it has?', 'What color is JS?'],
    correctAnswers: ['Document Object Model', 'length', 'yellow'],
    userAnswers: []
};


for ( var i = 0; i < quiz.questions.length; i ++ ) {
    var ans = prompt( quiz.questions[i] );
    quiz.userAnswers.push( ans );
}

console.table( quiz );




// TODO prompt each question to the user
// TODO check if the user gets the answer correctly
// TODO add a new array property "userAnswers" to our quiz object

// TODO add the questions as <h1>'s to the DOM 
// TODO add the answers as <h2>'s to the DOM