import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { getBreeds } from '../../actions/dogs';

export class App extends React.Component {
  componentDidMount() {
    const { getBreeds } = this.props;
    getBreeds();
  }

  render() {
    const { breeds } = this.props;

    return (
      <pre>
        <code>{JSON.stringify(breeds, null, 4)}</code>
      </pre>
    );
  }
}

App.propTypes = {
  getBreeds: PropTypes.func.isRequired,
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  breeds: state.breeds,
  error: state.error,
});

const mapDispatchToProps = {
  getBreeds,
};

export const connectedApp = hot(
  connect(mapStateToProps, mapDispatchToProps)(App),
);
