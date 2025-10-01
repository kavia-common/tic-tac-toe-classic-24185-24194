// Enhance focus visibility and basic keyboard interactions (non-functional demo)
(function () {
  const root = document.getElementById('regular-7-1482');
  if (!root) return;

  // Focus ring for keyboard users
  let usingKeyboard = false;
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      usingKeyboard = true;
      document.documentElement.classList.add('using-keyboard');
    }
  });
  window.addEventListener('mousedown', () => {
    usingKeyboard = false;
    document.documentElement.classList.remove('using-keyboard');
  });

  // Add focusability to day cells for demonstration
  root.querySelectorAll('.day').forEach((el) => {
    el.setAttribute('tabindex', el.classList.contains('disabled') ? '-1' : '0');
    el.addEventListener('focus', () => {
      if (usingKeyboard && !el.classList.contains('today')) {
        el.style.boxShadow = '0 0 0 2px rgba(37,99,235,0.35)';
      }
    });
    el.addEventListener('blur', () => {
      if (!el.classList.contains('today')) {
        el.style.boxShadow = '';
      }
    });
  });
})();
