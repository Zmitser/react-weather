var express = require('express');
var app = express();
app.use(function (req, res, next) {
    if (req.headers['x-forward-proto'] === 'http') {
        next();
    } else {
        res.redirect('http://' + req.hostname + req.URL)
    }
});
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Express server is up on port " + PORT)
});