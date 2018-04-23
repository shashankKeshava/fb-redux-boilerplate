import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppDuc from '../../duc'
import './index.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => bindActionCreators({AppDuc.creators.fetchData}, dispatch);

const appVisibility = connect(mapStateToProps, mapDispatchToProps);
export default appVisibility;
