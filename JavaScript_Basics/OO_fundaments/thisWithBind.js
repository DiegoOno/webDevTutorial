const person = {
    greeting: 'Good Morning!!',
    speak() {
        console.log(this.greeting);
    },
}

person.speak();
const speak = person.speak;
speak();                      // Paradigms conflict: functional programming and OO

const speakOfPesron = person.speak.bind(person);
speakOfPesron();