import { keys, map, range, sum, head } from 'ramda';
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

const letterToNum = fromJS({
    s: 0, c: 0, z: 0, x: 0,
    t: 1, d: 1,
    n: 2,
    m: 3,
    r: 4,
    l: 5,
    ch: 6, j: 6, g: 6, sh: 6,
    cz: 6, sc: 6, sch: 6, tsch: 6,
    k: 7, q: 7,
    f: 8, ph: 8, v: 8, gh: 8
});

const answersAndHints = {
    0: 'Answer is 0. Hint: zero vertical strokes',
    1: 'Answer is 1. Hint: one vertical stroke',
    2: 'Answer is 2. Hint: two vertical strokes',
    3: 'Answer is 3. Hint: three vertical strokes',
    4: 'Answer is 4. Hint: four ends with r',
    5: 'Answer is 5. Hint: L is the Roman numeral for 50',
    6: 'Answer is 6. Hint: looks like flipped g',
    7: 'Answer is 7. Hint: k look like two small 7s on their sides',
    8: 'Answer is 8. Hint: script f looks like a figure-8',
    9: 'Answer is 9. Hint: p looks like 9 flipped horizontally, b looks like the 9 turned 180°'
};

const lettersAndSoundsToNums = {
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
            text: `What is an associated letter (or sound) with ${num}?`,
            answer: numToLettersAndSounds[num]
        };
    }

    const letters = keys(lettersAndSoundsToNums);
    const randomInteger = getRandomInteger(letters.length);
    const letter = letters[randomInteger];

    return {
        text: `What number is associated with ${letter}?`,
        answer: lettersAndSoundsToNums[letter]
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

function getHint (answer) {
    if (typeof answer === 'string') {
        return answersAndHints[answer];
    }

    const first = head(answer);
    const num = letterToNum.get(first);
    return answersAndHints[num];
}

export {
    generateStep,
    generateChallengeNumber,
    generateLevels,
    verifyAnswer,
    getHint
};
