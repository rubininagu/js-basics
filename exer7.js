const prompt = require('prompt-sync')();

const choice = prompt('What do you want to convert? Enter 1 for Pound to Kilogram conversion Enter 2 for Kilogram to Pound conversion');
if (choice==1){
    const pound = prompt('Enter mass in pounds:');
    console.log(pound + "lb in Kilogram is :"+(pound/2.2)+"Kg");
}
else if (choice==2) {
    const kg = prompt('Enter mass in kilos:');
    console.log(kg + "kg in Pounds is :"+(kg*2.2)+"lb");
}
else {
    console.log('Incorrect choice');
}
