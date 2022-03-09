console.log("loop loop");

//while loops
let index = 0;
const max = 10;
while( index < max ){
    console.log( 'index during the while loop. index:', index);
    index++;
}
console.log( 'index after the while loop. index:', index);
//end of while loop

//for loops
for( let i=0; i<max; i++){
    console.log( 'in for loop. i:', i);
} //end of for loop

//console.log( 'i after the for loop, i:', i);
//this console log statement will result in undefined i.
//this is because i was defined and exists within the code block that ran the loop.
//this console log is outside that loop, where i is not defined.
//this is unlike the while loop where index is defined outside the loop block.

let hand = [ 'Q', '3', 'J', '9', '6', 'K', 'A'];

for( let i=0; i<hand.length; i++ ){
    console.log('for loop', hand[ i ] );
    if ( hand[ i ] === '9' ){
        console.log( 'yes i do right here!!!. ');
    }
} //end of for loop

//for in loop
for( i in hand ){
    console.log( 'for in loop', hand[ i ] );
}

//for of loop
for( card of hand){
    console.log( 'for of loop', card );
}