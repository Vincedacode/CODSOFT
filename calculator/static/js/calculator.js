
function clearScreen() {
    document.getElementById("answer").value = "";
}
 

function display(value) {
    document.getElementById("answer").value += value;
}
 

function calculate() {
    var p = document.getElementById("answer").value;
    var q = eval(p);
    document.getElementById("answer").value = q;
}