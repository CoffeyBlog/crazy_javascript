// Spread Syntax does the opposite of the the Rest parameter

function introduceBeatles(john, paul, ringo, george, ...rest) {
    console.log(rest);
}



let beatlesMembers = [1, 2, 3, 4, 5];
introduceBeatles(...beatlesMembers)


