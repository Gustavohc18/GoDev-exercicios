var input = require('fs').readFileSync('./entrada.txt', 'utf8');
var lines = input.split('\n');



for (var a = 1; a <= lines[0]; a++) {
    console.log(lines[a])
    if (lines[a] === 0) {
        console.log("NULL")
    } else if (lines[a] % 2 === 0) {
        if (lines[a] > 0) {
            console.log("EVEN POSITIVE")
        } else {
            console.log("EVEN NEGATIVE")
        }
    } else if (lines[a] % 2 !== 0) {
        if (lines[a] > 0) {
            console.log("ODD POSITIVE")
        } else {
            console.log("ODD NEGATIVE")
        }
    }

}