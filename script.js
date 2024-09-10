function sum() {
    var i;
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] + sum) {
            sum += arguments[i];
        }
    }
    return sum;
}
document.getElementById("demo").innerHTML = sum(1, 2, 3, 4, 5);

