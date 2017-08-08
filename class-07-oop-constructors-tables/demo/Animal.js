'use strict';

// let's make a constructor function for these objects
// animals as object literals

var zebra1 = {
    name: 'Zeus',
    species: 'zebra',
    food: 'grass',
    askForFood: function () {
        alert( 'Give me some ' + this.food ); // this.food 'grass'
    },
    addToDom: function () {
        var zebraList = document.getElementById( 'zebra' );
        var newZebra = document.createElement( 'li' );
        newZebra.innerHTML = this.name;
        zebraList.appendChild( newZebra );
    }
};

var lion1 = {
    name: 'Fred',
    species: 'lion',
    food: 'deer',
    askForFood: function () {
        alert( 'Give me some ' + this.food );
    },
    addToDom: function () {
        var lionList = document.getElementById( 'lion' );
        var newLion = document.createElement( 'li' );
        newLion.innerHTML = this.name;
        lionList.appendChild( newLion );
    }
};

var lion2 = {
    name: 'Nancy',
    species: 'lion',
    food: 'deer',
    askForFood: function () {
        alert( 'Give me some ' + this.food );
    },
    addToDom: function () {
        var lionList = document.getElementById( 'lion' );
        var newLion = document.createElement( 'li' );
        newLion.innerHTML = this.name;
        lionList.appendChild( newLion );
    }
};

var penguin1 = {
    name: 'Lisa',
    species: 'penguin',
    food: 'deer',
    askForFood: function () {
        alert( 'Give me some ' + this.food );
    },
    addToDom: function () {
        var penguinList = document.getElementById( 'penguin' );
        var newPenguin = document.createElement( 'li' );
        newPenguin.innerHTML = this.name;
        penguinList.appendChild( newPenguin );
    }
};

var penguin2 = {
    name: 'Moose',
    species: 'penguin',
    food: 'deer',
    askForFood: function () {
        alert( 'Give me some ' + this.food );
    },
    addToDom: function () {
        var penguinList = document.getElementById( 'penguin' );
        var newPenguin = document.createElement( 'li' );
        newPenguin.innerHTML = this.name;
        penguinList.appendChild( newPenguin );
    }
};

var penguin3 = {
    name: 'Susan',
    species: 'penguin',
    food: 'deer',
    askForFood: function () {
        alert( 'Give me some ' + this.food );
    },
    addToDom: function () {
        var penguinList = document.getElementById( 'penguin' );
        var newPenguin = document.createElement( 'li' );
        newPenguin.innerHTML = this.name;
        penguinList.appendChild( newPenguin );
    }
};

var redPanda1 = {
    name: 'Scarlet',
    species: 'red-panda',
    food: 'bamboo',
    askForFood: function () {
        alert( 'Give me some ' + this.food );
    },
    addToDom: function () {
        var redPandaList = document.getElementById( 'red-panda' );
        var newRedPanda = document.createElement( 'li' );
        newRedPanda.innerHTML = this.name;
        redPandaList.appendChild( newRedPanda );
    }
};

var redPanda2 = {
    name: 'Moshi',
    species: 'red-panda',
    food: 'bamboo',
    askForFood: function () {
        alert( 'Give me some ' + this.food );
    },
    addToDom: function () {
        var redPandaList = document.getElementById( 'red-panda' );
        var newRedPanda = document.createElement( 'li' );
        newRedPanda.innerHTML = this.name;
        redPandaList.appendChild( newRedPanda );
    }
};

var animals = [ zebra1, lion1, lion2, penguin1, penguin2, penguin3, redPanda1, redPanda2 ];
for ( var i = 0; i < animals.length; i ++ ) {
    animals[i].addToDom();
}