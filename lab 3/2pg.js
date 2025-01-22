
function multiplyByTwo(num, cb) { cb(num * 2); }
function subtractThree(num, cb) { cb(num - 3); }
function addTen(num, cb) { cb(num + 10); }

function processNumber(num) {
    multiplyByTwo(num, (res1) => 
        subtractThree(res1, (res2) => 
            addTen(res2, (final) => console.log(`Result: ${final}`))));
}

processNumber(5); 
