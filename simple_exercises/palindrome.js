/* function myPalindrome(input) {
    
    var splitWord = input.split('');
    var reversedWord = splitWord.reverse().join('');
    if (input === reversedWord) {
        console.log("The given word is a palindrome");
    } else{
        console.log("The given word is not a palindrome");
    }  
}

var word = "refer";
myPalindrome(word); */

/*function myPalindrome(input) {
    var reversedInput = [],
        splitInput = [];
    for (var i = 0; i < input.length; i++) {
        splitInput.push(input[i]);
    }
    for (var i = input.length - 1; i >= 0; i -= 1) {
        reversedInput.push(input[i]);
    }
    if (JSON.stringify(reversedInput) == JSON.stringify(splitInput)) {
        console.log("The given string is a palindrome");
        return;
    }
    console.log("The given string is not a palindrome");
}

var word = "refer";
var word1 = "apple";
var num1 = "1001";
var num2 = "1000";

myPalindrome(word);
myPalindrome(word1);
myPalindrome(num1);
myPalindrome(num2);*/

function checkPalindrome(str) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = "apple";

// call the function
const value = checkPalindrome(string);

console.log(value);