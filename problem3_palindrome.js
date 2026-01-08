function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    
    if (str === reversedStr) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("madam"));  //output: true