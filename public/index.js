init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    console.log("location.search equaled undefined so getLastWorkout route was called")
    const workout = await API.getLastWorkout();
    if (workout) {
      console.log("location.search was NOT undefined so ?id= + workout_id route was called")
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

