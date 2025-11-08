const fibonacci = function(term) {
    let values = [0, 1];
    let num;
    if (term == 1 || term == 0){
        return values[term];
    }
    else if (term < 0) {
        return "OOPS";
    }
    else{
        for (let i = 2; i <= term; i++){
            num = values[i-1] + values[i-2];
            values.push(num);
        }
        return values[term];
    }
};

// Do not edit below this line
module.exports = fibonacci;
