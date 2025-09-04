// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Simple contact form handler (demo)
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Thanks — message simulated (replace with real endpoint or email service).');
    form.reset();
  });
}

// Set copyright year
document.getElementById('year').textContent = new Date().getFullYear();
