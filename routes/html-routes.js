const router = require("express").Router();
let path = require("path");

router.get("/", function (req,res) {
    console.log("/ route is FIRING!");

    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", function (req, res) {
    console.log("/exercise route is FIRING!");

    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function (req, res) {
    console.log("/stats route is FIRING!");

    res.sendFile(path.join(__dirname, "../public/stats.html"));
})


module.exports = router