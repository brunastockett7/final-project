export function openModal(name, description) {
  document.querySelector('#modal-name').textContent = name;
  document.querySelector('#modal-description').textContent = description;
  document.querySelector('#workout-modal').style.display = 'block';
}

export function closeModal() {
  document.querySelector('#workout-modal').style.display = 'none';
}

export function setupModalEvents() {
  document.querySelector('#close-modal').addEventListener('click', closeModal);
  window.addEventListener('click', (e) => {
    const modal = document.querySelector('#workout-modal');
    if (e.target === modal) {
      closeModal();
    }
  });
}
