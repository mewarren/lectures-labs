//****DATA****//

var allRestaurants = [];

//****CONSTRUCTOR & INSTANCES****//

function Restaurant ( name, id ) {
    this.name = name;
    this.id = id;
    this.votes = 0;

    allRestaurants.push( this );
}

function instantiateRestaurants() {
    var hand = new Restaurant( 'Hansel and Gretel\'s Dessert Shoppe', 'hansel-and-gretel' );
    var bob = new Restaurant( 'Bob\'s Burgers', 'bobs-burgers' );
    var sun = new Restaurant( 'Sunstrings', 'sunstrings' );
    var spa = new Restaurant( 'Spaghetti and Ice Cream', 'spaghetti-ice-cream' );
    var itis = new Restaurant( 'The Itis', 'itis' );
    var hippo = new Restaurant( 'Hungry Hippos', 'hippos' );
    var canary = new Restaurant( 'The Canary', 'canary' );
    var taco = new Restaurant( 'Taco Shell', 'taco-shell' );
}

//****DISPLAY & VOTING FUNCTIONS****//

var tracker = {
    option1: document.getElementById( 'option1' ),
    option2: document.getElementById( 'option2' ),
    option3: document.getElementById( 'option3' ),
    displaySection: document.getElementById( 'display' ),
    votes: 0,

    randomIndex: function ( arr ) {
        return Math.floor( Math.random() * arr.length );
    },

    getIndices: function ( arr ) {
        var selectedIndices = [];
        // REVIEW do while loop will fill selectedIndices with random numbers until it has 3 numbers
        do {
            var item = this.randomIndex( arr );

            if ( !selectedIndices.includes( item ) ) {
                selectedIndices.push( item );
            }
        } while ( selectedIndices.length < 3 );

        return selectedIndices;
    },

    displayOptions: function () {
        // get 3 random restaurants
        var randomRestaurants = this.getIndices( allRestaurants );

        // TODO refactor this repetitive code into a for loop
        var index1 = randomRestaurants[0];
        var index2 = randomRestaurants[1];
        var index3 = randomRestaurants[2];
        
        var restaurant1 = allRestaurants[index1];
        var restaurant2 = allRestaurants[index2];
        var restaurant3 = allRestaurants[index3];

        this.option1.innerText = restaurant1.name;
        this.option2.innerText = restaurant2.name;
        this.option3.innerText = restaurant3.name;

        this.option1.id = restaurant1.id;
        this.option2.id = restaurant2.id;
        this.option3.id = restaurant3.id;

        // NEW data attribute on html tag is versatile attribute for saving data
        this.option1.setAttribute( 'data-index', index1 );
        this.option2.setAttribute( 'data-index', index2 );
        this.option3.setAttribute( 'data-index', index3 );
    },

    tallyVote: function ( target ) {
        this.votes += 1;

        // TODO track vote on selected restaurant
        var selectRest = allRestaurants[target.getAttribute( 'data-index') ];
        selectRest.votes++;

        if ( this.votes > 4 ) {
            this.showResults();
        }
    },

    showResults: function () {
        // NEW we can remove an eventListener using the method removeEventListener()
        this.displaySection.removeEventListener( 'click', voteHandler );
        console.table( allRestaurants );
    }
};


//****EVENT LISTENERS****//
// TODO on click: increase tracker.vote and selected restuarants .vote and add different restaurants


//****INITIALIZE APP****//

instantiateRestaurants();
tracker.displayOptions();