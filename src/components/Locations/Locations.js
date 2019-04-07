// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @components
import Card from '../Card/Card';

// @styles
import './Locations.scss';

export const Locations = (props) => {
    const { locations } = props;
    return (
        <div className="locations__selection">
            <div className="locations">
                <div className="locations__list">
                    { locations.map(item => <Card key={item.id} item={item} />) }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    locations: state.locations
});

Locations.propTypes = {
    locations: PropTypes.array.isRequired
};

export default connect(mapStateToProps, null)(Locations);
