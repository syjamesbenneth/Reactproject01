import React from 'react';
import ReactDOM from 'react-dom';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'Summer' : 'Winter';        
    } else {
        return lat > 0 ? 'Winter': 'Summer';
    }
};

const SeasonDisplay = (props) => {
    const Season = getSeason(props.lat, new Date().getMonth());
    return <div>Season Display</div>
};

export default SeasonDisplay;