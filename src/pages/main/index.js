import React, { Component, Fragment } from "react";
import Header from "../../components/header";
import Body from "../../components/body";
import Footer from "../../components/footer";
// import { Container } from './styles';

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Body />
        <Footer />
      </Fragment>
    );
  }
}
