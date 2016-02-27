var expect = require( 'chai' ).expect;
var starWars = require( './index' );

describe( 'starwars-names', function() {
    describe( 'the `all` property', function() {
        it( 'should be an array of strings', function() {
            expect( starWars.all ).to.satisfy( isArrayOfStrings );
        } );

        it( 'should have Luke Skywalker', function() {
            expect( starWars.all ).to.include( 'Luke Skywalker' );
        } );
    } );

    describe( 'the `random` property', function() {
        it( 'should return an item from `starWars.all`', function() {
            var random = starWars.random();

            expect( starWars.all ).to.include( random );
        } );

        it( 'should return a random item when called', function() {
            var random1 = starWars.random();
            var random2 = starWars.random();

            expect( random1 ).to.not.equal( random2 );
        } );
    } );
} );

function isArrayOfStrings( array ) {
    return array.every( function( item ) {
        return typeof item === 'string';
    } );
}
