document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  document.getElementById('themeToggle').textContent = isDark ? '🌙' : '🌞';
});
