// @flow

import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Accordion, Header} from "semantic-ui-react";

import * as actions from "../actions";
import Practice from "../containers/Practice";
import Reference from "../components/Reference";
import Cards from "../components/Cards";

const Learn = () => {
  const panels = [
    {
      title: "Reference",
      content: <Reference />,
    },
    {
      title: "Cards",
      content: <Cards />,
    },
    {
      title: "Practice",
      content: <Practice />,
    },
  ];

  return (
    <div>
      <Header as="h2">
        Learning Mode
        <Header.Subheader>
          Familiarise yourself with the Mnemonic Major System by reading the
          wikipedia article, having a look at the study cards and practicing.
        </Header.Subheader>
      </Header>
      <Accordion
        style={{
          width: "100%",
        }}
        panels={panels}
        defaultActiveIndex={-1}
        styled
      />
    </div>
  );
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Learn);
