const router = require("express").Router();
let path = require("path");

router.get("/", function (req,res) {
    console.log("/ route is FIRING!");

    res.sendFile(path.join(__dirname, "../public/index.html"));
});
// when Create new Workout is clicked from index page ///
router.get("/exercise", function (req, res) {
    console.log("/exercise html route is FIRING! - Create new workout clicked from index page.");

    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function (req, res) {
    console.log("/stats route is FIRING!");

    res.sendFile(path.join(__dirname, "../public/stats.html"));
})


module.exports = router