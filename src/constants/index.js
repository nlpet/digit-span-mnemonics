import { Set as set } from 'immutable';

import { generateLevels } from '../utils';

const initialState = {

    navigation: {
        mode: 'learn'
    },

    learn: {
        inProgress: false,
        numQuestion: 1,
        questionsInSession: 10,
        correctAnswers: 0,
        wrongAnswers: 0,
        help: false,
        currentQuestion: {},
        lastAnswer: {},
        ended: false
    },

    challenge: {
        inProgress: false,
        time: 60,
        correctAnswers: 0,
        wrongAnswers: 0,
        intervalId: null,
        answers: [],
        uniqueAnswers: set(),
        paused: false,
        difficulty: 3,
        challengeNumber: null,
        ended: false,
        levels: generateLevels(2, 11)
    },

    testing: {
        roundNum: 0,
        rounds: 10,
        intervalId: null,
        inProgress: false,
        numberOfDigits: 5,
        difficulty: 'easy',
        time: 5,
        challengeNumber: null,
        range: generateLevels(3, 46),
        difficulties: [
            { key: 'easy', value: 'easy', text: 'easy' },
            { key: 'medium', value: 'medium', text: 'medium' },
            { key: 'hard', value: 'hard', text: 'hard' },
            { key: 'impossible', value: 'impossible', text: 'impossible' }
        ],
        ended: false,
        correctAnswers: 0,
        wrongAnswers: 0
    },

    games: {
        modes: ['learn', 'challenge', 'test'],
        learn: 'Learn placeholder',
        challenge: 'Challenge placeholder',
        test: 'Test placeholder'
    }
};

export {
    initialState
};
