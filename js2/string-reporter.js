var someWord = prompt('Hey, man. Enter any word you want.');
alert(
    'You entered: ' + someWord + '/n' +
    'There are ' + someWord.length + 'characters in the word.\n' +
    'The third character is ' + someWord.charAt(2) + '.\n' +
    someWord + 'written in lowercase is: ' + someWord.toLowerCase() + '\n' +
    someWord + 'written in uppercase is: ' + someWord.toUpperCase() + '\n' +
    '\"' + someWord + ' is a really awesome word. Good choice.\n' +
    '\"' + someWord + '\"' + ' includes: ' + someWord.substring(1,4)
);