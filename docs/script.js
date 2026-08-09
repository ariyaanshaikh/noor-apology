const envelope = document.querySelector('#envelope');
envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  envelope.setAttribute('aria-expanded', 'true');
  setTimeout(() => document.querySelector('#letter').scrollIntoView({ behavior: 'smooth' }), 350);
});
