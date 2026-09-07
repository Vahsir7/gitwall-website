// GitWall — website interactions

const copyBtn = document.getElementById('copyBtn');
const cloneCmd = document.getElementById('cloneCmd');

copyBtn?.addEventListener('click', async () => {
  const text = cloneCmd.textContent.trim();
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const range = document.createRange();
    range.selectNode(cloneCmd);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);
    document.execCommand('copy');
    window.getSelection()?.removeAllRanges();
  }

  const original = copyBtn.innerHTML;
  copyBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
  copyBtn.disabled = true;
  setTimeout(() => {
    copyBtn.innerHTML = original;
    copyBtn.disabled = false;
  }, 1500);
});

// Highlight the nav link matching the section in view.
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links .link');

if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
  const linkFor = id => document.querySelector(`.nav-links .link[href="#${id}"]`);

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const link = linkFor(entry.target.id);
        if (!link) return;
        link.style.color = entry.isIntersecting ? 'var(--text)' : '';
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  sections.forEach(section => observer.observe(section));
}
