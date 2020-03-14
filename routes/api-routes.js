const router = require("express").Router();
const db = require("../models")



// Route to call workouts and send back to client //////////////////////////////////////
router.get("/api/workouts", (req, res) => {
    console.log("/api/workouts route - get last workout - is FIRING")
    db.Workout.find({})
        .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


// Route to add a new exercise to an existing workout //////////////
router.put("/api/workouts/:id", (req, res) => {
    console.log("/api/workouts/:id route is FIRING!");
    let newExercise = req.body;
    console.log(newExercise);
    let id = req.params.id;
    console.log(id);

    db.Workout.findOneAndUpdate({ _id: id }, { $push: { exercises: newExercise }})
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// Route to create a new workout by creating a workout without exercises. ///
router.post("/api/workouts", ( {body}, res) => {
    console.log("route to create new workout called here");
    let newWorkout = new db.Workout(body.body);
    try {
        let dbWorkout =  db.Workout.create(newWorkout);
        res.status(200).send(dbWorkout);
    } catch (err) {
        res.status(200).send(err.message);
    }
    
    });

router.get("/api/workouts/range", (req, res) => {

})




module.exports = router;