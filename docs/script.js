const openWish = document.querySelector('#open-wish');
openWish.addEventListener('click', () => {
  document.querySelector('#wish').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#celebrate').addEventListener('click', () => {
  const finale = document.querySelector('.finale');
  const message = document.querySelector('#wish-message');
  finale.classList.remove('celebrating');
  void finale.offsetWidth;
  finale.classList.add('celebrating');
  message.textContent = 'Your wish has been sent to the stars, Princess Noor ✦';
});
