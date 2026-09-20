const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('.faq-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const sign = item.querySelector('.faq-sign');
    const isOpen = item.classList.contains('is-open');

    document.querySelectorAll('.faq-item').forEach((other) => {
      other.classList.remove('is-open');
      const otherButton = other.querySelector('button');
      const otherAnswer = other.querySelector('.faq-answer');
      const otherSign = other.querySelector('.faq-sign');
      otherButton.setAttribute('aria-expanded', 'false');
      otherAnswer.hidden = true;
      otherSign.textContent = '+';
    });

    if (!isOpen) {
      item.classList.add('is-open');
      button.setAttribute('aria-expanded', 'true');
      answer.hidden = false;
      sign.textContent = '−';
    }
  });
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
