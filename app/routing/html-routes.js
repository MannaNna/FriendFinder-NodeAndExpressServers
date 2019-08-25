// Path package to get the correct file path
var path = require('path');

// Routing
module.exports = function(app) {
    // Basic route that sends the user to the home page
    app.get('/', function (req, res) {
        console.log(path.join(__dirname, '/../public/home.html'));
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
    // Route to display the survey page 
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });
    // If no matching route is founddefault to home
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};