'use strict';

function Show ( title, time, location ) {
    this.title = title;
    this.time = time;
    this.location = location;
}

Show.prototype.reschedule = function ( newTime ) {
    this.time = newTime;
}

Show.prototype.announce = function () {
    alert( this.title + ' is starting at ' + this.time + '! Come to ' + this.location );
}

Show.prototype.render = function () {
    // TODO write a function to add a show to the DOM
}

var lionShow = new Show ( 'Lion and Friends', '1:30', 'Massai Ave.' );
var redShow = new Show ( 'Red Panda! Red Panda!', '2:30', 'Bamboo St.' );
var zebraShow = new Show ( 'What color is a zebra?', '4:30', 'Massai Ave.' );
var penguinShow = new Show ( 'Penguin Swim', '4:30', 'Artic Circle' );