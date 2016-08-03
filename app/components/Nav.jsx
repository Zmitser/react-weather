var React = require('react');
var {Link, IndexLink} = require('react-router');
var Nav = () => {
    return (
        <div>
            <h1>Nav Component</h1>
            <IndexLink activeStyle={{fontWeight: 'bold', color: 'red'}} activeClassName="active" to="/">Get
                Weather</IndexLink>
            <Link activeStyle={{fontWeight: 'bold', color: 'red'}} activeClassName="active" to="/about">About Me</Link>
            <Link activeStyle={{fontWeight: 'bold', color: 'red'}} activeClassName="active" to="/examples">Examples</Link>
        </div>

    )
};
module.exports = Nav;