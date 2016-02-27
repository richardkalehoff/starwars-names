var uniqueRandomArray = require( 'unique-random-array' );
var starWarsNames = require( './starwars-names.json' );
var getRandomItem = uniqueRandomArray( starWarsNames );

module.exports = {
    all: starWarsNames,
    random: random
};

function random( num ) {
    var list = [];

    if ( typeof num !== 'number' ) {
        return getRandomItem();
    }

    for ( var i = 0; i < num; i++ ) {
        list.push( getRandomItem() );
    }

    return list;
}
