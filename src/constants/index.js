import { Set as set } from 'immutable';

import { generateChallengeNumber } from '../utils';

const initialState = {

    navigation: {
        mode: 'learn'
    },

    learn: {
        inProgress: false,
        numQuestion: 0,
        questionsInSession: 10,
        correctAnswers: 0,
        wrongAnswers: 0,
        help: false,
        currentQuestion: {},
        lastAnswer: {}
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
        challengeNumber: generateChallengeNumber(3),
        ended: false
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
