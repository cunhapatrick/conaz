import React, { Component } from 'react';
import { Container } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../components/header';
import Body from '../../components/body';
import Footer from '../../components/footer';
import { Creators as CityActions } from '../../store/ducks/cities';

// import { Container } from './styles';

class Main extends Component {
  static propTypes = {
    addCityRequest: PropTypes.func.isRequired,
    // loading: PropTypes.bool,
    // error: PropTypes.oneOfType([null, PropTypes.string]),
  };

  state = {
    cities: [
      {
        coords: [-27.5935, -48.55854],
        data: {},
      },
    ],
    cursor: 0,
  };

  handleNextCity = () => {
    const { cursor, cities } = this.state;
    if (cursor < 2 && cursor >= 0) {
      this.setState({ cursor: cursor + 1 }, () => {
        if (cities[this.state.cursor].data.name) {
          this.props.addCityRequest(cities[this.state.cursor]);
        }
      });
    }
  };

  handlePreviousCity = () => {
    const { cursor } = this.state;
    if (cursor >= 2 && cursor < 0) {
      this.setState({ cursor: cursor - 1 });
    }
  };

  render() {
    const { data } = this.state.cities[this.state.cursor];
    return (
      <Container>
        <Header name={data.name} datetime={data.datetime} />
        <Body temp={data.temp} />
        <Footer temp_max={data.temp_max} temp_min={data.temp_min} humidity={data.humidity} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.cities,
});

const mapDispatchToProps = dispatch => bindActionCreators(CityActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
