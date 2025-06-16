/* eslint-env browser */
/* eslint-disable no-undef */

const workoutList = document.querySelector('#workout-list');

async function loadWorkouts() {
  try {
    const response = await fetch('data/workouts.json');
    if (!response.ok) {
      throw new Error('Failed to load workouts');
    }

    const workouts = await response.json();
    displayWorkouts(workouts);
  } catch (error) {
    console.error(error);  // Log the error to the console for more details
    if (workoutList) {
      workoutList.innerHTML = `<p>Error loading workouts: ${error.message || error}</p>`;
    } else {
      console.error('Element #workout-list not found in the DOM.');
    }
  }
}

function displayWorkouts(workouts) {
  workouts.forEach(workout => {
    const card = document.createElement('div');
    card.classList.add('card');

    console.log(`Image path for ${workout.name}: images/${workout.image}`); // Check image paths in the console

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
