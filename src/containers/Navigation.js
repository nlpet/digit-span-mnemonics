// @flow

import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";

import * as actions from "../actions";

const Navigation = ({navigation, actions}) => {
  const tabs = [];
  const tabsClass = `ui three item stackable tabs menu`;
  const tabNames = {
    learn: (
      <h3>
        Learn &nbsp;<i className="fa fa-book" aria-hidden="true" />
      </h3>
    ),
    challenge: (
      <h3>
        Challenge &nbsp;<i className="fa fa-gamepad" aria-hidden="true" />
      </h3>
    ),
    test: (
      <h3>
        Test &nbsp;<i className="fa fa-check" aria-hidden="true" />
      </h3>
    ),
  };

  Object.keys(tabNames).forEach((tabName, i) => {
    tabs.push(
      <Link
        to={tabName}
        key={i}
        data-tab={tabName}
        className={navigation.mode === tabName ? "active item" : "item"}
        onClick={() => actions.changeMode({mode: tabName})}
      >
        {tabNames[tabName]}
      </Link>,
    );
  });

  return <div className={tabsClass}>{tabs}</div>;
};

Navigation.propTypes = {
  navigation: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  navigation: state.navigation,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
