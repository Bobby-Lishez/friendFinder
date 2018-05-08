//load data
var friends = require("../data/friends");

//routing
module.exports = function(app) {
    //api GET requests
    app.get("/api/survey", function(req, res) {
        res.json(friends);
    });

    app.post("/api/survey", function(req, res) {
        friends.push(req.body);
        res.json(true);
    });
}