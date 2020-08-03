var path = require("path");

module.exports = function(app) {
  // Brings you to the exercise page using Path module and specified directory
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  // Brings you to the stats page using Path module and specified directory
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};