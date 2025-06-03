// Gallery

function openLightbox(imageSrc, captionText) {
  document.getElementById('lightbox-img').src = imageSrc;
  document.getElementById('lightbox-caption').textContent = captionText;
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}
