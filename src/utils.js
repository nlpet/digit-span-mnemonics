import { keys, map, range, sum } from 'ramda';
import { fromJS } from 'immutable';

const numToLettersAndSounds = {
    0: ['s', 'soft c', 'z', 'x'],
    1: ['t', 'd'],
    2: ['n'],
    3: ['m'],
    4: ['r', 'l'],
    5: ['l'],
    6: [
        'ch', 'j', 'soft g', 'sh',
        'c', 'cz', 's', 'sc', 'sch',
        't', 'tsch', 'z'
    ],
    7: ['k', 'hard c', 'q', 'ch', 'hard g'],
    8: ['f', 'ph', 'v', 'gh'],
    9: ['p', 'b', 'gh']
};

const numToLetter = fromJS({
    0: ['s', 'c', 'z', 'x'],
    1: ['t', 'd'],
    2: ['n'],
    3: ['m'],
    4: ['r', 'l'],
    5: ['l'],
    6: [
        'ch', 'j', 'g', 'sh',
        'c', 'cz', 's', 'sc', 'sch',
        't', 'tsch', 'z'
    ],
    7: ['k', 'c', 'q', 'ch', 'g'],
    8: ['f', 'ph', 'v', 'gh'],
    9: ['p', 'b', 'gh']
});

const lettersAndSoundsTonumerals = {
    's': '0',
    'soft c': '0',
    'z': '0',
    'x (in xylophone)': '0',
    't': '1',
    'd (th in thing and this)': '1',
    'n': '2',
    'm': '3',
    'r': '4',
    'l (in colonel)': '4',
    'l': '5',
    'ch (in cheese and chef)': '6',
    'j': '6',
    'soft g': '6',
    'sh': '6',
    'c (in cello and special)': '6',
    'cz (in Czech)': '6',
    's (in tissue and vision)': '6',
    'sc (in fascist)': '6',
    'sch (in schwa and eschew)': '6',
    't (in ration and equation)': '6',
    'tsch (in putsch)': '6',
    'z (in seizure)': '6',
    'k': '7',
    'hard c': '7',
    'q': '7',
    'ch (in loch)': '7',
    'hard g': '7',
    'f': '8',
    'ph (in phone)': '8',
    'v': '8',
    'gh (in laugh)': '8',
    'p': '9',
    'b': '9',
    'gh (in hiccough)': '9'
};

function getRandomInteger (n) {
    return Math.floor(Math.random() * n);
}

function generateChallengeNumber (n) {
    return map(getRandomInteger, Array(n).fill(10)).join(' ');
}

function generateStep () {
    const x = getRandomInteger(2);

    if (x === 1) {
        const num = getRandomInteger(keys(numToLettersAndSounds).length);

        return {
            question: `What is an associated letter (or sound) with ${num}?`,
            answer: numToLettersAndSounds[num]
        };
    }

    const letters = keys(lettersAndSoundsTonumerals);
    const randomInteger = getRandomInteger(letters.length);
    const letter = letters[randomInteger];

    return {
        question: `What number is associated with ${letter}?`,
        answer: lettersAndSoundsTonumerals[letter]
    };
}

function generateLevels () {
    return map(n => ({ key: n, value: n, text: n }), range(2, 10));
}

function verifyAnswer (answer, challengeNumber) {
    let flag = true;
    const answr = answer.replace(/[hywaeiou]/g, '');

    challengeNumber.split(' ').forEach(num => {
        const letters = numToLetter.get(num);
        const matches = sum(letters.map(l => answr.indexOf(l) >= 0 ? 1 : 0));

        if (matches === 0) flag = false;
    });

    return flag;
}

export {
    generateStep,
    generateChallengeNumber,
    generateLevels,
    verifyAnswer
};
