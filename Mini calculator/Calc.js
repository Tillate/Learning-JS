// Coder une calculette en JS

let total = 0;

function addition(x) {
    total += x;
    return total; 
}

function soustraction(x) {
    total -= x;
    return total;
}

function multiplier(x) {
    if (total===0) {
        return (total=x);
    }   else {
        total *= x;
        return total;
    }
}

function division(x) {
    if (total===0) {
        return (total=x);
    }   else {
        total /= x;
        return total;
    }
}

function reset(){
    total=0;
}