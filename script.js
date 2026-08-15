const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 50));
navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const galleryButtons = [...document.querySelectorAll('.gallery-item')];
let currentIndex = 0;

function openImage(index){
  currentIndex = index;
  lightboxImage.src = galleryButtons[index].dataset.src;
  lightbox.showModal();
}
function moveImage(direction){
  currentIndex = (currentIndex + direction + galleryButtons.length) % galleryButtons.length;
  lightboxImage.src = galleryButtons[currentIndex].dataset.src;
}
galleryButtons.forEach((btn,i) => btn.addEventListener('click', () => openImage(i)));
document.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
document.querySelector('.lightbox-prev')?.addEventListener('click', () => moveImage(-1));
document.querySelector('.lightbox-next')?.addEventListener('click', () => moveImage(1));
lightbox?.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });
document.addEventListener('keydown', e => {
  if (!lightbox?.open) return;
  if (e.key === 'ArrowLeft') moveImage(-1);
  if (e.key === 'ArrowRight') moveImage(1);
});

const floorplanButton = document.querySelector('[data-floorplan]');
floorplanButton?.addEventListener('click', () => {
  lightboxImage.src = floorplanButton.dataset.floorplan;
  lightbox.showModal();
});
