// ─── Single Page Application Navigation Router ───
function go(name) {
  // If user is on an independent page split, route to target HTML page file cleanly
  window.location.href = name === 'home' ? 'home.html' : name + '.html';
}

// ─── Reveal on scroll ───
function triggerReveal(){
  document.querySelectorAll('.reveal:not(.on)').forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 60) el.classList.add('on');
  });
}
window.addEventListener('scroll', triggerReveal, {passive:true});
window.addEventListener('load', ()=>{setTimeout(triggerReveal, 100)});
triggerReveal();

// ─── Mobile menu ───
let menuOpen = false;
function toggleMenu(){
  menuOpen = !menuOpen;
  const ul = document.querySelector('.nav-links');
  if(menuOpen){
    ul.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:56px;left:0;right:0;background:rgba(6,6,14,0.97);backdrop-filter:blur(24px);padding:24px 20px;gap:20px;border-bottom:1px solid rgba(255,255,255,0.08);z-index:800';
  } else {
    ul.style.cssText = '';
  }
}

// ─── Newsletter ───
function subscribe(){
  const input = document.getElementById('nlInput');
  if(input && input.value) {
    alert('Thank you for subscribing!');
    input.value = '';
  }
}