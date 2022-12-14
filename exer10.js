const prompt = require('prompt-sync')();

const str1 = prompt('Enter the first string:');
const str2 = prompt('Enter the second string:');
if (str1.length>str2.length){
    console.log(str1);
}
else if (str1.length<str2.length) {
    console.log(str2);
}
else if (str1.length=str2.length){
    console.log('Both strings are equal in length')
};