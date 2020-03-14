/// API call made on page load to call last workouts ///////////////
const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();
    console.log("Below should be a list of all workouts returned by the server");
    console.log(json);

    // return only last workout document from database //
    return json[json.length - 1];
  },

  // API call to add exercise to existing workout ///////////////////////////
  async addExercise(data) {
    console.log("Below is the data from addExercise function");
    console.log(data);

    const id = location.search.split("=")[1];
    console.log("addExercise function log of current id below");
    console.log(id);

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();
    console.log("below is the json returned from server for add new exercise")
    console.log(json);
    return json;
    
  },
  //Route to create new workout ////
  async createWorkout(data = {}) {
    console.log("hit the createWorkout function here.");
    console.log(data);
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();
    console.log(json);
    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
