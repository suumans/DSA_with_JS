function printNumber(min, max) {
    if (min > max) {
        return;
    }
    printNumber(min + 1, max);
    console.log(min);
}

printNumber(1, 5);


console.log("first one end here");
    
function printNumber(min, max) {
    if (min > max) {
        return;
    }
    console.log(min);
    printNumber(min + 1, max);
}

printNumber(1, 5);

// second one end here


function printNumber(min, max) {
    if (min > max) {
        return;
    }
    console.log(min);
    min = min + 1;
    
    logic(min, max);
}

function logic(min, max) {
    if (min > max) {
        return;
    }
    printNumber(min, max);
}

printNumber(1, 5);
    