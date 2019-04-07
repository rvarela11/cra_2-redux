// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @material-ui
import CircularProgress from '@material-ui/core/CircularProgress';

// @actions
import { fetchLocations } from '../../actions/index';

// @components
import Locations from '../Locations/Locations';

// @styles
import './App.scss';

class App extends Component {
    componentDidMount() {
        const { fetchLocations } = this.props;
        fetchLocations();
    }

    render() {
        const { fetchLocationsLoading } = this.props;
        if (fetchLocationsLoading) {
            return (
                <div className="circular-progress">
                    <CircularProgress />
                </div>
            );
        }
        return (
            <Locations />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchLocations: () => dispatch(fetchLocations())
});

const mapStateToProps = state => ({
    fetchLocationsLoading: state.fetchLocationsLoading
});

App.propTypes = {
    fetchLocations: PropTypes.func.isRequired,
    fetchLocationsLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
