/*
Create a function named pronoun that accepts a string parameter. 
This function returns an object that will have all the personal pronouns, 
present in the string, as keys. 
Each key will have a sub object with the first word after 
each of the personal pronouns found in the string.
You must also a count property to the sub object, 
with the amount of occurrences of the pronoun.
Pronouns:
i
you
he
she
it
they
we
*/
function pronoun(str) {
    let pronouns = ["i", "you", "he", 'she', "it", 'they', 'we'] //, "I", "You", "He", 'She', "It", 'They', 'We']
    let res = {};
    let words = str.toLowerCase().split(/\W/g).filter(x => x !== '');
    words.forEach((wordP, i) => {
        if (pronouns.includes(wordP)) {
            if (res[wordP] === undefined) {
                //Find the next word and check it isnt a pronoun
                let wordToAdd = words[words.indexOf(wordP) + 1]
                pronouns.includes(wordToAdd) ? wordToAdd = [] : wordToAdd = [wordToAdd];
                if (wordToAdd[0] === undefined) wordToAdd = [];
                res[wordP] = {
                    word: wordToAdd,
                    count: 1
                };
            } else {
                //Update the words value
                let nextWordToAdd = words[(words.indexOf(wordP, i ) + 1)]
                let currWord = res[wordP].word
                pronouns.includes(nextWordToAdd) ? nextWordToAdd = [] : nextWordToAdd = [nextWordToAdd];
                res[wordP].word = currWord.concat(nextWordToAdd)  
                let currCount = res[wordP].count + 1 
                res[wordP].count = currCount
            }
        }
    })
    return res
}