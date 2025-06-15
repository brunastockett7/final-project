import { openModal, closeModal, setupModalEvents } from './modal.js';

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
    workoutList.innerHTML = `<p>Error loading workouts: ${error.message}</p>`;
  }
}

function displayWorkouts(workouts) {
  workouts.forEach(workout => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <h3>${workout.name}</h3>
      <img src="${workout.image}" alt="${workout.name}" loading="lazy">
      <p><strong>Type:</strong> ${workout.type}</p>
      <p><strong>Equipment:</strong> ${workout.equipment}</p>
      <p><strong>Sets:</strong> ${workout.sets}</p>
      <button data-name="${workout.name}" data-description="${workout.description}">More Info</button>
    `;

    // Add button event listener
    card.querySelector('button').addEventListener('click', (e) => {
      const { name, description } = e.target.dataset;
      openModal(name, description);
    });

    workoutList.appendChild(card);
  });
}

setupModalEvents();
loadWorkouts();
