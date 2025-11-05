const reverseString = function(string) {
    let arr = [];
    let reverse = "";
    for (let i=0; i < string.length; i++) {
        arr[i] = string.charAt(string.length - 1 - i);
        reverse+=arr[i];
    }
    return reverse;
};
// Do not edit below this line
module.exports = reverseString;
