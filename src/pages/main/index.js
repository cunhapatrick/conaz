import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../components/header';
import Body from '../../components/body';
import Footer from '../../components/footer';
import * as citiesActions from '../../store/actions/cities';

// import { Container } from './styles';

class Main extends Component {
  static propTypes = {
    nextCityRequest: PropTypes.func.isRequired,
    previousCityRequest: PropTypes.func.isRequired,
  };

  state = {
    cities: [
      {
        coords: [-27.5935, -48.55854],
        name: 'Florianópolis',
        data: {},
      },
    ],
    cursor: 0,
  };

  handleNextCity = () => {
    const { cursor, cities } = this.state;
    if (cursor < 2 && cursor >= 0) {
      this.setState({ cursor: cursor + 1 }, () => {
        this.props.nextCityRequest(cities[this.state.cursor]);
      });
    }
  };

  handlePreviousCity = () => {
    const { cursor, cities } = this.state;
    if (cursor >= 2 && cursor < 0) {
      this.setState({ cursor: cursor - 1 }, () => {
        this.props.previousCityRequest(cities[this.state.cursor]);
      });
    }
  };

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

const mapStateToProps = state => ({
  cities: state.cities,
});

const mapDispatchToProps = dispatch => bindActionCreators(citiesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
