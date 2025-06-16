document.addEventListener("DOMContentLoaded", () => {
  const workoutList = document.querySelector('#workout-list');
  if (!workoutList) return;

  async function loadWorkouts() {
    try {
      const response = await fetch('data/workouts.json');
      if (!response.ok) {
        throw new Error('Failed to load workouts');
      }

      const workouts = await response.json();
      displayWorkouts(workouts);
    } catch (error) {
      console.error(error);
      workoutList.innerHTML = `<p>Error loading workouts: ${error.message || error}</p>`;
    }
  }

  function displayWorkouts(workouts) {
    workouts.forEach(workout => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <h3>${workout.name}</h3>
        <img src="images/${workout.image}" alt="${workout.name}" loading="lazy">
        <p><strong>Type:</strong> ${workout.type}</p>
        <p><strong>Equipment:</strong> ${workout.equipment}</p>
        <p><strong>Sets:</strong> ${workout.sets}</p>
      `;

      workoutList.appendChild(card);
    });
  }

  loadWorkouts();
});