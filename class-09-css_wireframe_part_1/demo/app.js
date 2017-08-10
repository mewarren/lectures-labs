'use strict';

function Question ( question, answer, required ) {
    this.question = question;
    this.answer = answer;
    this.required = required;

    this.render();
}

Question.prototype.render = function () {
    var questionsList = document.getElementById( 'questions' );
    var questionLi = document.createElement( 'li' );
    questionLi.innerText = this.question;
    if ( this.required ) {
        questionLi.innerText += '*';
    }
    questionsList.appendChild( questionLi );
}

var question = new Question( 'What color is JavaScript?', 'yellow', true );
var question0 = new Question( 'What color is HTML?', 'red', true );
var question1 = new Question( 'What color is CSS?', 'blue' );


// TODO add event listeners and handlers to menu
var form = document.getElementById( 'new-question' );
form.addEventListener( 'submit' , formHandler );

function formHandler () {
    event.preventDefault();
    new Question( this.question.value, this.answer.value, this.required.value === 'required');
}