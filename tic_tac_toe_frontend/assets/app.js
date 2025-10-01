// Shared lightweight script for static assets in this folder.
// Provides a simple Ocean Professional theme toggle between light and dark surfaces on cards.

(function () {
  const btnCreate = () => {
    const btn = document.createElement('button');
    btn.textContent = 'Toggle Theme';
    btn.setAttribute('aria-label', 'Toggle theme');
    btn.style.position = 'fixed';
    btn.style.right = '16px';
    btn.style.bottom = '16px';
    btn.style.zIndex = '999';
    btn.style.padding = '10px 14px';
    btn.style.borderRadius = '10px';
    btn.style.border = '1px solid rgba(0,0,0,0.08)';
    btn.style.background = '#2563EB';
    btn.style.color = '#fff';
    btn.style.boxShadow = '0 4px 10px rgba(37,99,235,0.25)';
    btn.style.cursor = 'pointer';
    btn.style.font = '600 14px system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif';
    btn.style.transition = 'all .2s ease';
    btn.onmouseenter = () => btn.style.transform = 'translateY(-1px)';
    btn.onmouseleave = () => btn.style.transform = 'translateY(0)';
    return btn;
  };

  const btn = btnCreate();
  document.body.appendChild(btn);

  let dark = false;
  btn.addEventListener('click', () => {
    dark = !dark;
    document.querySelectorAll('.card').forEach(card => {
      if (dark) {
        card.style.backgroundColor = '#1d1d1f';
        card.style.color = '#fff';
      } else {
        card.style.backgroundColor = card.classList.contains('dark-mode') ? '#1d1d1f' : '#ffffff';
        card.style.color = '';
      }
    });
  });
})();
