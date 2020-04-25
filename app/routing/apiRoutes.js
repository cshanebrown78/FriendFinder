// Sets up required modules to use
var path = require('path'); 
var friendArray = require('../data/friends.js');

module.exports = function (app) {
    
    // Gets the information from the friends api
    app.get('/api/friends', function(req, res) {
        res.json(friendArray);
    });

    // Posts the information once it pulled
    app.post('/api/friends', function(req, res) {
        // Sets the information from the survey to the variable newPerson
        var newPerson = req.body
       
        // Sets the scores array for the user to the variable friendScores
        var friendScores = newPerson.scores;
        
        // Setting up variables for the match
        var bestMatchName = "";
        var bestMatchPic = "";
        var difference = 100;

        // Loops through all the friends in the friendArray
        for (var i = 0; i < friendArray.length; i++) {
            // var that will be used on finding best match
            var diff = 0
            // Loops through the friendArray scores and subtracts the newPerson scores and returns and sums all the absolute values
            for (var j = 0; j < friendScores.length; j++) {
                diff += Math.abs(friendArray[i].scores[j]-friendScores[j]);
                
            }  
            // checks to see if the friendArray score is lower than the current and if true stores the information and sets difference to the new score
            if (diff < difference) {
                difference = diff
                bestMatchName = friendArray[i].name;
                bestMatchPic = friendArray[i].photo;
            }
            
        }

        // Pushes the newPerson information into the friendArray
        friendArray.push(newPerson);

        // Object response for best match
        res.json({matchName: bestMatchName, matchPic: bestMatchPic })
    });

}

