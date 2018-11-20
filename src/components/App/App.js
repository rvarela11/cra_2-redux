// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @actions
import { getAllData } from '../../actions/index';

// @styles
import './App.scss';

class App extends Component {
    componentDidMount() {
        const { getAllData } = this.props;
        fetch('locations.json')
            .then(res => res.json())
            .then(data => getAllData(data))
            .catch(error => console.log(error));
    }

    render() {
        const { apiDataAllFiltered } = this.props;
        return (
            <div className="locations__list">
                { apiDataAllFiltered.map(item => <p key={item.id}>{item.name}</p>)}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getAllData: apiData => dispatch(getAllData(apiData))
});

const mapStateToProps = state => ({
    apiDataAllFiltered: state.apiDataAllFiltered
});

App.propTypes = {
    apiDataAllFiltered: PropTypes.array.isRequired,
    getAllData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
