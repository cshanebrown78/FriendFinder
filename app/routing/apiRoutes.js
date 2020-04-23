var path = require('path'); 
var friendArray = require('../data/friends.js');

module.exports = function (app) {
    
    app.get('/api/friends', function(req, res) {
        res.json(friendArray);
    });

    app.post('/api/friends', function(req, res) {
        
        var newFriend = req.body
        console.log('newFriend = ' + JSON.stringify(newFriend))
        

        var friendScores = newFriend.scores;
        console.log(friendScores);

        var bestMatchName = "";
        var bestMatchPic = "";
        var difference = 100;

        for (var i = 0; i < friendArray.length; i++) {

            var diff = 0
            
            for (var j = 0; j < 10; j++) {
                diff += Math.abs(friendArray[i].scores[j]-friendScores[j]);
                if (diff < difference) {
                    difference = diff
                    bestMatchName = friendArray[i].name;
                    bestMatchPic = friendArray[i].photo;
                }
            }
        }

        console.log("---------Match------------")
        console.log(bestMatchName);
        console.log(bestMatchPic);

        friendArray.push(newFriend);

        res.json({bestMatchName: bestMatchName, bestMatchPic: BestMatchPic})
    });

}

