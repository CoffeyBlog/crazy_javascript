// Rest parameters - allows a single function to store multiple objects in an array

function sendCars(...allCarIds){
    allCarIds.forEach(id => console.log(id));
}

sendCars(231,345,765);

// list the rest parameter last


// You can mix types when using rest parameters:
function variousStuff(...stuffNames){
    stuffNames.forEach(id => console.log(id));
}

variousStuff("dog", 45, true, 4.3, null, (3+3));
