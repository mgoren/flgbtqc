function randomImage() {
  let image = images[Math.floor(Math.random() * images.length)];
  document.write('<img src="' + image + '" alt="A few faces of FLGBTQC">');
}