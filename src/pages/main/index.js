import React, { Component } from 'react';
import {
  Container, Loader, Columns, Box,
} from 'react-bulma-components/full';
import './styles.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../components/header';
import Body from '../../components/body';
import Footer from '../../components/footer';
import Button from '../../components/button';
import { Creators as CityActions } from '../../store/ducks/cities';

class Main extends Component {
  static propTypes = {
    addCityRequest: PropTypes.func.isRequired,
    cities: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          temp: PropTypes.number,
          humidity: PropTypes.number,
          tempMin: PropTypes.number,
          tempMax: PropTypes.number,
          name: PropTypes.string,
          datetime: PropTypes.string,
        }),
      ),
      error: PropTypes.oneOfType([null, PropTypes.string]),
    }),
  };

  state = {
    coords: [
      {
        lat: -27.5935,
        lon: -48.55854,
      },
      {
        lat: -27.5935,
        lon: -48.55854,
      },
      {
        lat: -27.5935,
        lon: -48.55854,
      },
    ],
    cursor: 0,
  };

  componentDidMount() {
    const { coords } = this.state;
    this.props.addCityRequest(coords[0]);
  }

  handleNextCity = () => {
    const { cursor, coords } = this.state;
    if (cursor < 3 && cursor >= 0) {
      this.setState({ cursor: cursor + 1 }, () => {
        if (!this.props.cities.data[this.state.cursor]) {
          this.props.addCityRequest(coords[this.state.cursor]);
        }
      });
    }
  };

  handlePreviousCity = () => {
    const { cursor } = this.state;
    if (cursor >= 3 && cursor < 0) {
      this.setState({ cursor: cursor - 1 });
    }
  };

  handleLoading = () => {
    const { cursor } = this.state;
    const { data, loading } = this.props.cities;

    return loading ? (
      <Loader />
    ) : (
      <Box>
        <Header name={data[cursor].name} datetime={data[cursor].datetime} />
        <Body temp={data[cursor].temp} />
        <Footer
          tempMax={data[cursor].tempMax}
          tempMin={data[cursor].tempMin}
          humidity={data[cursor].humidity}
        />
      </Box>
    );
  };

  handleButton = (value) => {
    const { cursor } = this.state;
    if (cursor === 0 && value === 'Próximo') {
      return <Button value={value} onclick={this.handleNextCity} />;
    }

    if (cursor === 2 && value === 'Anterior') {
      return <Button value={value} onclick={this.handlePreviousCity} />;
    }
    if (cursor === 1) {
      return (
        <Button
          value={value}
          onclick={value === 'Anterior' ? this.handlePreviousCity : this.handleNextCity}
        />
      );
    }

    return false;
  };

  render() {
    return (
      <Container className="main-container">
        <Columns className="main-row">
          <Columns.Column>{this.handleButton('Anterior')}</Columns.Column>
          <Columns.Column className="middle">{this.handleLoading()}</Columns.Column>
          <Columns.Column>{this.handleButton('Próximo')}</Columns.Column>
        </Columns>
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
