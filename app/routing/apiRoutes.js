var path = require('path'); 
var friendArray = require('../data/friends.js');

module.exports = function (app) {
    
    app.get('/api/friends', function(req, res) {
        res.json(friendArray);
    });

    app.post('/api/friends', function(req, res) {
        
        var newPerson = req.body
        // console.log(newPerson);
        // console.log('newFriend = ' + JSON.stringify(newPerson))
        

        var friendScores = newPerson.scores;
        console.log(friendScores);

        var bestMatchName = "";
        var bestMatchPic = "";
        var difference = 100;

        for (var i = 0; i < friendArray.length; i++) {

            var diff = 0
            
            for (var j = 0; j < friendScores.length; j++) {
                diff += Math.abs(friendArray[i].scores[j]-friendScores[j]);
                console.log(friendArray[i].name + "---" + diff + "----" + j )
                console.log("Diff = " + diff);
                console.log("Difference = " + difference);
                if (diff < difference) {
                    difference = diff
                    console.log("New Difference =" + difference)
                    bestMatchName = friendArray[i].name;
                    bestMatchPic = friendArray[i].photo;
                }
            }
        }

        // console.log("---------Match------------")
        // console.log(bestMatchName);
        // console.log(bestMatchPic);

        friendArray.push(newPerson);

        // res.json({bestMatchName: bestMatchName, bestMatchPic: BestMatchPic})
        res.json({matchName: bestMatchName, matchPic: bestMatchPic })
    });

}

