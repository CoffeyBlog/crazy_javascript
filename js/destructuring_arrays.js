// Here is how we destructure and array


// this is regular array:
let beatles = ["john", "paul", "ringo", "george"]

// here is what a destructured array looks like, notice that the variable name is at the end of the array
let [guitar_john, bass_paul, drums_ringo, leadGuitar_george] = beatles;

console.log(guitar_john, bass_paul, leadGuitar_george, drums_ringo);
console.log(guitar_john);
console.log(bass_paul);
console.log(drums_ringo);
console.log(leadGuitar_george);

console.log(typeof beatles); // object

console.log(typeof leadGuitar_george);
console.log(typeof drums_ringo);
console.log(typeof bass_paul);
console.log(typeof guitar_john);


let team = ["fred", "bob", "john", "sarah"]

let [p1_john, p2_paul, ... theRest] = team;

console.log(p1_john, p2_paul, theRest);
