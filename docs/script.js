const envelope = document.querySelector('#envelope');
envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  envelope.setAttribute('aria-expanded', 'true');
  setTimeout(() => document.querySelector('#letter').scrollIntoView({ behavior: 'smooth' }), 350);
});

document.querySelector('#forgive').addEventListener('click', () => {
  const card = document.querySelector('#question-card');
  card.innerHTML = '<span>♥</span><h2 class="reply">Thank you, my love.</h2><p>I&apos;ll cherish this chance and prove it with the way I love you from here.</p>';
});

document.querySelector('#time').addEventListener('click', () => {
  const card = document.querySelector('#question-card');
  card.innerHTML = '<span>♥</span><h2 class="reply">I understand, Noor.</h2><p>Take the time you need. I&apos;ll respect your space and keep doing the work to be better, because you matter deeply to me.</p>';
});
