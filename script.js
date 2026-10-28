const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));

const modal = document.getElementById('storyModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalDescription = document.getElementById('modalDescription');
const closeModalButton = document.getElementById('modalClose');
const modalDone = document.getElementById('modalDone');

function openStory(card) {
  modalImage.src = card.dataset.image;
  modalImage.alt = card.dataset.title + ' cover';
  modalTitle.textContent = card.dataset.title;
  modalSubtitle.textContent = card.dataset.subtitle;
  modalDescription.textContent = card.dataset.description;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  closeModalButton.focus();
}
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.querySelectorAll('.story-card').forEach(card => card.addEventListener('click', () => openStory(card)));
closeModalButton.addEventListener('click', closeModal);
modalDone.addEventListener('click', closeModal);
modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
});
