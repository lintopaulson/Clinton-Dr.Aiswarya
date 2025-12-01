//toggle background active
const slideNavigator = name => {
  let slides = document.querySelectorAll('.bg-slide');
  slides.forEach(slide => {
    slide.classList.remove('active');
  if(slide.classList.contains(name)) {
    slide.classList.add('active');
   }
 });
}

//switch background
window.addEventListener('load', () => {
 document.querySelectorAll('.slide-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('data-target');
        document.querySelectorAll('.bg-slide').forEach(slide => {
            slide.classList.remove('active');
            // Reset animation by removing and re-adding the image
          const img = slide.querySelector('.slide-img');
                if (img) {
                    img.style.animation = 'none';
                    img.offsetHeight; // trigger reflow
                    img.style.animation = null;
                }
        });
        document.querySelectorAll('.slide-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const activeSlide = document.querySelector(`.${target}`);
        if (activeSlide) {
            activeSlide.classList.add('active');
        }
    });
  });
});

//activate sections
const sectionNavigator = name => {
    let sections = document.querySelectorAll('section');
  let header = document.querySelector('header');
    sections.forEach(section => {
        section.classList.remove('section-show');
      if(section.classList.contains(name)) {
        section.classList.add('section-show');
        header.classList.add('active');
       }  
     });
};

//navigation to sections
window.addEventListener('load', () => {
    const navList = document.querySelectorAll('.nav-btn');
  navList.forEach(nav => {
    nav.addEventListener('click', function(e) {
        e.preventDefault();
        navList.forEach(el => {
            el.classList.remove('active');
        });
        this.classList.add('active');
        sectionNavigator(this.getAttribute('data-target'));
        screen.width <768 && toggleMenu();
     });
   });
});

//reset header to initial state
const resetHeader = () => {
    let header = document.querySelector('header');
    header.classList.remove('active');
};

//initial navigation
const initNavigation = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');

        if(el.getAttribute('data-target') === 'about') {
            el.classList.add('active');
        
        }
    });
    sectionNavigator('about');
};


//hamburger toggle menu
const toggleMenu = () => {
  const menu = document.querySelector('.menu');
  const navMobile = document.querySelector('.nav-mobile');
  menu.classList.toggle('active');
  navMobile.classList.toggle('active');
};


// COUNTDOWN with flip animation
const eventDate = new Date("2025-12-26T17:30:00").getTime();
function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById("flip-countdown").innerHTML = "The Wedding is Live!";
    return;
  }

  const days = String(Math.floor(distance / (1000*60*60*24))).padStart(2,'0');
  const hours = String(Math.floor((distance % (1000*60*60*24))/(1000*60*60))).padStart(2,'0');
  const minutes = String(Math.floor((distance % (1000*60*60))/(1000*60))).padStart(2,'0');
  const seconds = String(Math.floor((distance % (1000*60))/1000)).padStart(2,'0');

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // trigger flip animation
  document.querySelectorAll('#flip-countdown span').forEach(span => {
    span.style.animation = "none";
    span.offsetHeight; // reset animation
    span.style.animation = null;
  });
}
setInterval(updateCountdown, 1000);
updateCountdown();



//initialising image gallery for venue page






