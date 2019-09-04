function speakAfterOf(seconds, phrase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(phrase);
        }, seconds * 1000)
    })
}

speakAfterOf(3, 'So cool!')
    .then(phrase => phrase.concat('?!?'))
    .then(anotherPhrase => console.log(anotherPhrase))
    .catch(e => console.log(e));