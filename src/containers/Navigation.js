import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

const Navigation = () => {
    const tabsClass = `ui two item stackable tabs menu`;

    return (
        <div className={tabsClass}>
            <a className="item" data-tab="add">New</a>
            <a className="item" data-tab="add">Reset</a>
        </div>
    );
};

Navigation.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);
