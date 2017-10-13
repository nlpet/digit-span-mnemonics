// @flow

import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {contains, toLower} from "ramda";
import PropTypes from "prop-types";
import {Segment, Button, Input, Divider, Message} from "semantic-ui-react";

import * as actions from "../actions";
import {getEmoji, safelyGetHtmlElementAndValue} from "../utils";

const helpers = {
  checkAnswer: (state, actions) => {
    let correct;
    let correctAnswer;
    const [answerString, answerElement] = safelyGetHtmlElementAndValue(
      "practiceAnswer",
    );
    const answer = toLower(answerString);

    if (typeof state.currentQuestion.answer === "string") {
      correct = answer === state.currentQuestion.answer ? 1 : 0;
      correctAnswer = {single: state.currentQuestion.answer};
    } else {
      correct = contains(answer, state.currentQuestion.answer) ? 1 : 0;
      correctAnswer = {multiple: state.currentQuestion.answer};
    }

    if (answerElement instanceof HTMLInputElement) {
      answerElement.value = "";
    }

    return actions.markPracticeAnswer({
      correct,
      answer,
      correctAnswer,
    });
  },
  handleKeyPress: (e, state, actions) => {
    if (e.key === "Enter") helpers.checkAnswer(state, actions);
  },
};

const Practice = ({learn, actions}) => {
  const {
    currentQuestion,
    correctAnswers,
    wrongAnswers,
    inProgress,
    ended,
  } = learn;
  const practiceGame = [];

  if (inProgress) {
    practiceGame.push(
      <Segment.Group horizontal key="practice">
        <Segment>
          <h3>{currentQuestion.text}</h3>
          <Input
            style={{marginRight: "10px"}}
            placeholder="Answer..."
            onKeyPress={e => helpers.handleKeyPress(e, learn, actions)}
            id="practiceAnswer"
          />
          <Button
            color="green"
            onClick={() => helpers.checkAnswer(learn, actions)}
          >
            Submit
          </Button>
        </Segment>
        <Segment>
          <p>
            <b>Correct: {correctAnswers}</b>
            <br />
            <b>Wrong: {wrongAnswers}</b>
          </p>
          {learn.feedback &&
          learn.inProgress &&
          learn.lastAnswer.correct === 0 ? (
            <div>
              <Divider />
              <Message positive size="tiny">
                <p>{learn.lastAnswer.hint}</p>
              </Message>
            </div>
          ) : null}
        </Segment>
      </Segment.Group>,
    );
  } else if (ended) {
    const p = Math.ceil(correctAnswers / (correctAnswers + wrongAnswers) * 100);
    const face = getEmoji(p);
    const msg = `You got ${correctAnswers} answers right! ${face}`;

    practiceGame.push(
      <div key="game-over">
        <Divider />
        <p>Game over! You got {msg}</p>
      </div>,
    );
  }

  return (
    <div>
      <Button color="violet" onClick={actions.startPractice}>
        New game
      </Button>
      <Button color="black" onClick={actions.endPractice}>
        End game
      </Button>
      <Button.Group>
        <Button positive={!learn.feedback} onClick={actions.toggleFeedback}>
          Feedback Off
        </Button>
        <Button.Or />
        <Button positive={learn.feedback} onClick={actions.toggleFeedback}>
          Feedback On
        </Button>
      </Button.Group>
      {practiceGame}
    </div>
  );
};

Practice.propTypes = {
  learn: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Practice);
