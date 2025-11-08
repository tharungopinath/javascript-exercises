const palindromes = function (string) {
    const str = string.replace(/[" '!,."]/g, "").toLowerCase();
    const mid = Math.trunc(str.length / 2);
    for (let i = 0; i < mid; i++){
         if (str[i] !== str[str.length - 1 - i]) {
             return false;
         }
    }
    return true;
};
// Do not edit below this line
module.exports = palindromes;
