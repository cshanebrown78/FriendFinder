var  friendArray = require('../data/friends.js');

module.exports = function (app) {
    
    app.get('/api/survey', function(req, res) {
        res.json(friendArray);
    });

    app.post("/api/survey", function(req, res) {
        
        var newFriend = req.body

        var friendScores = newFriend.scores;

        var bestMatchName = "";
        var bestMatchPic = "";
        var difference = 100;

        for (var i = 0; i < friendArray.length; i++) {

            var diff = 0
            
            for (var j = 0; j < friendScores.length; j++) {
                diff += Math.abs(friendsArray[i].scores[j]-friendScores[j]);
                if (diff < difference) {
                    difference = diff
                    bestMatchName = friendsArray[i].name;
                    bestMatchPic = friendsArray[i].photo;
                }
            }
        }

        friendArray.push(newFriend);

        res.json({bestMatchName: bestMatchName, bestMatchPic: BestMatchPic})
    });

}

