var React = require('react');
var {Link, IndexLink} = require('react-router');
var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        alert("Not yet wired up!")
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                          React Weather App
                        </li>
                        <li>
                            <IndexLink activeStyle={{fontWeight: 'bold', color: 'red'}} activeClassName="active" to="/">Get
                                Weather</IndexLink>
                        </li>
                        <li>
                            <Link activeStyle={{fontWeight: 'bold', color: 'red'}} activeClassName="active" to="/about">About
                                Me</Link>
                        </li>
                        <li>
                            <Link activeStyle={{fontWeight: 'bold', color: 'red'}} activeClassName="active"
                                  to="/examples">Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="text" placeholder="Search Weather..."/></li>
                            <li><button type="submit" className="button">Get Weather</button></li>
                        </ul>
                    </form>
                </div>
            </div>

        )
    }
});
module.exports = Nav;

