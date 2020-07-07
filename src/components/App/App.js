import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { getBreeds, getImages } from 'actions/dogs';
import { Chart, Loading } from 'components';
import AppContainer from './App.styles';

export class App extends React.Component {
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
    const { dogs, loading } = this.props;

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <AppContainer>
            <Chart dogs={dogs} />
          </AppContainer>
        )}
      </div>
    );
  }
}

App.propTypes = {
  getBreeds: PropTypes.func.isRequired,
  getImages: PropTypes.func.isRequired,
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  dogs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  breeds: state.breeds,
  dogs: state.dogs,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  getBreeds,
  getImages,
};

const connectedApp = hot(connect(mapStateToProps, mapDispatchToProps)(App));

export default connectedApp;
