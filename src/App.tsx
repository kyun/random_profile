
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CardList from './components/CardList';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "./actions";

class App extends Component<any> {
  componentDidMount() {
    //this.props.requestApiData();
  }

  render() {

    return (
      <main>
        <h1>App</h1>
        <CardList />
      </main>
    );
  }
}

const mapStateToProps = (state: any) => ({ data: state.data });

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
