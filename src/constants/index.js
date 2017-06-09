

const initialState = {

    navigation: {
        mode: 'learn'
    },

    learn: {
        inProgress: false,
        numQuestion: 0,
        questionsInSession: 5,
        correctAnswers: 0,
        wrongAnswers: 0
    },

    challenge: {
        inProgress: false,
        time: 60,
        correctAnswers: 0,
        wrongAnswers: 0,
        intervalId: null,
        answers: [],
        paused: false
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
