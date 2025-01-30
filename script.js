const close = document.querySelector('.close');
const letov = document.querySelector('.yegor-letov');
const bio = document.querySelector('.bio');

function toggleBio() {
  bio.classList.toggle('show-bio');
}

letov.addEventListener('click', toggleBio);
close.addEventListener('click', toggleBio);