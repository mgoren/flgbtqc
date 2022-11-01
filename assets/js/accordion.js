// this file is loaded only on pages using minutes layout

document.addEventListener('DOMContentLoaded', setupAccordion);

function setupAccordion() {
  document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', function handleClick(event) {
      this.classList.toggle('active');
      let content = this.nextElementSibling;
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
  });

  document.querySelector('#view-all').addEventListener('click', function handleClick(event) {
    document.querySelectorAll('.accordion').forEach(accordion => {
      let content = accordion.nextElementSibling;
      if (this.textContent == 'View all') {
        accordion.classList.add('active')
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        accordion.classList.remove('active')
        content.style.maxHeight = null;
      }
    });
    this.textContent = this.textContent == 'View all' ? 'Hide all' : 'View all';
  });
}
