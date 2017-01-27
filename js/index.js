
var number = Number(prompt('Enter a number'));
if (isNaN(number)) {
    document.write('<br>Please, enter a number');
} 
else {
var tNumber = squareRoot(number);
document.write('<br>The square root is ' + tNumber);
}

function squareRoot(userNumber) {
    var result = (Math.sqrt(userNumber));
    return result;
}
