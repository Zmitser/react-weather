var React = require('react');
var WeatherMessage = ({location, temp}) => {
    return(
        <h1>It's it {temp} in {location}</h1>
    )
};

module.exports = WeatherMessage;