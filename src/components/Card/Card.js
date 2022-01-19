// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @styles
import './Card.scss';

const Card = (props) => {
    const { item } = props;
    const displayIcon = '?';
    return (
        <div className="location__card" aria-label={item.description} tabIndex="0" role="button">
            <div className="card__city">
                {item.name}
                {' '}
                { item.airport_code ? `(${item.airport_code})` : ''}
            </div>
            <div className="card__icon">
                <span className="card__icon-icon">{displayIcon}</span>
                <span className="card__icon-description">{item.description}</span>
            </div>
        </div>
    );
};

Card.propTypes = {
    item: PropTypes.object.isRequired
};


export default Card;
