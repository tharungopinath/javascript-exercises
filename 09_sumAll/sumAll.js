const sumAll = function(a, b) {
    let max;
    let arr = [];
    let index = 0;
    let ans = [];
    while (Number.isInteger(a) && Number.isInteger(b) && a>0 && b>0){
        max = (a>b) ? a : b;
        min = (a>b) ? b : a;    
        for (let i = min; i <= max; i++) {
            arr[index] = i;
            index++;
        }
        ans = arr.reduce((total, cur) => {
            return total + cur;
        }, 0)
        return ans;
    }
    return 'ERROR';
};


// Do not edit below this line
module.exports = sumAll;
