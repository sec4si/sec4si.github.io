(() => {
  const path = document.currentScript?.dataset.articlePath;
  if (location.origin !== 'https://sec4.si' || !path ||
      (location.pathname !== path && location.pathname !== path + 'index.html')) return;
  if (navigator.globalPrivacyControl === true || navigator.doNotTrack === '1') return;

  function countWhenVisible() {
    if (document.visibilityState !== 'visible') return;
    document.removeEventListener('visibilitychange', countWhenVisible);
    fetch('https://metric.sec4.si/api/views', {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path }),
      keepalive: true,
    }).catch(() => {});
  }

  document.addEventListener('visibilitychange', countWhenVisible);
  countWhenVisible();
})();
