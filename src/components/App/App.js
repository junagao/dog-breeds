import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { getBreeds, getImages } from 'actions/dogs';
import { Chart } from 'components';

class App extends React.Component {
  componentDidMount() {
    const { getBreeds } = this.props;
    getBreeds();
  }

  componentDidUpdate(prevProps) {
    const { getImages, breeds } = this.props;
    if (breeds !== prevProps.breeds) {
      getImages();
    }
  }

  render() {
    const { dogs } = this.props;

    return <Chart dogs={dogs} />;
  }
}

App.propTypes = {
  getBreeds: PropTypes.func.isRequired,
  getImages: PropTypes.func.isRequired,
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  dogs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  breeds: state.breeds,
  dogs: state.dogs,
  error: state.error,
});

const mapDispatchToProps = {
  getBreeds,
  getImages,
};

export default hot(connect(mapStateToProps, mapDispatchToProps)(App));
