(function(){
  const el = (id)=>document.getElementById(id);
  function apply(){
    try{
      const cfg = JSON.parse(document.getElementById('ig-profile-config').textContent.trim());
      const username = (cfg.username||'').replace(/^@/, '');
      const url = `https://www.instagram.com/${username}/`;

      el('ig-avatar').src = cfg.avatarUrl || '';
      el('ig-name').textContent = cfg.displayName || username;
      el('ig-username').textContent = '@' + username;
      el('ig-bio').textContent = cfg.bio || '';

      const badgesWrap = el('ig-badges');
      badgesWrap.innerHTML = '';
      (cfg.badges||[]).forEach(b=>{
        const span = document.createElement('span');
        span.className = 'ig-badge';
        span.textContent = b;
        badgesWrap.appendChild(span);
      });

      el('ig-open').href = url;
      el('ig-handle').textContent = username;
      el('ig-handle-link').href = url;
    }catch(err){ 
      console.error('Tidak valid', err); 
    }
  }
  document.addEventListener('DOMContentLoaded', apply);
})();
