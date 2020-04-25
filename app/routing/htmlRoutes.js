var path = require('path');

module.exports = function(app) {
    
    // Displays the survey.html page based on url
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'))
    });

    // Displays the home page as the default 
    app.use( function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'))
    })
}