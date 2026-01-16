const tracker = document.querySelector('.mouse-tracker');

document.addEventListener('mousemove', (e) => {
  tracker.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});


////////rotate
 document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.auto-spin').forEach(icon => {
    icon.classList.add('spin360');
  });
});

////////////////////hero h1

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "SEO Executive",
    "Web Developer"
  ];

  const element = document.getElementById("typed-role");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 100;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      element.textContent = currentRole.substring(0, charIndex--);
    } else {
      element.textContent = currentRole.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      delay = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 500;
    } else {
      delay = isDeleting ? 60 : 100;
    }

    setTimeout(typeEffect, delay);
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
  });

/////////////////////navbar
 
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 10 
      ? '0 4px 20px rgba(56, 189, 248, 0.3)' 
      : '0 4px 30px rgba(0,0,0,0.3)';
  });

  /////////////////////change navbar color on scroll
 

  function handleReveal() {
    const reveals = document.querySelectorAll(".reveal-left, .reveal-right");

    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight - 100 && rect.bottom > 100;

      if (isInView) {
        el.classList.add("active");
      } else {
        el.classList.remove("active"); // 👈 this makes it repeat when scrolled again
      }
    });
  }

  window.addEventListener("scroll", handleReveal);
  window.addEventListener("load", handleReveal);
///////////////project section///////////////////////

 const track = document.querySelector('.marquee-track');
track.innerHTML += track.innerHTML; // Duplicate cards

/////////////////////////


 
  const cards = document.querySelectorAll('.flip-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 300); // Delay each card
      } else {
        entry.target.classList.remove('visible'); // Re-trigger on scroll
      }
    });
  }, {
    threshold: 0.3
  });

  cards.forEach(card => observer.observe(card));
//////////////////////f0oter year
  document.getElementById("year").textContent = new Date().getFullYear();


/////////////cursor effect?

