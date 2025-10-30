(function(){
  const yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      const visible = nav.style.display === 'flex';
      nav.style.display = visible ? 'none' : 'flex';
      toggle.setAttribute('aria-expanded', String(!visible));
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      const id = this.getAttribute('href');
      if(id && id.length > 1){
        const target = document.querySelector(id);
        if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
      }
    });
  });
})();
