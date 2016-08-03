var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;
        that.setState({isLoading: true});
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, function (err) {
            console.log((err));
            that.setState({isLoading: false});
        });
    },

    render: function () {
        var {isLoading, location, temp} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>
            } else if(temp && location) {
                return <WeatherMessage location={location} temp={temp}/>
            }
        }

        return (
            <div>
                <div>
                    <h1 className="text-center">Get Weather</h1>
                    <WeatherForm onSearch={this.handleSearch}/>
                    {renderMessage()}
                </div>
            </div>

        )
    }
});

module.exports = Weather;