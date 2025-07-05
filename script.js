
//    // Wait for DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//     // Header scroll effect
//     const header = document.querySelector('.header');
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 100) {
//             header.classList.add('scrolled');
//         } else {
//             header.classList.remove('scrolled');
//         }
//     });

//     // Mobile menu toggle
//     const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
//     const nav = document.querySelector('.nav');
    
//     mobileMenuToggle.addEventListener('click', function() {
//         nav.classList.toggle('active');
//         this.classList.toggle('active');
//     });

//     // Smooth scrolling for navigation links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             const target = document.querySelector(this.getAttribute('href'));
//             if (target) {
//                 target.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
//             }
//         });
//     });

//     // Statistics counter animation
//     function animateCounter(element, target, duration = 2000) {
//         const start = 0;
//         const increment = target / (duration / 16);
//         let current = start;
        
//         const updateCounter = () => {
//             current += increment;
//             if (current >= target) {
//                 element.textContent = target.toLocaleString();
//                 return;
//             }
//             element.textContent = Math.floor(current).toLocaleString();
//             requestAnimationFrame(updateCounter);
//         };
        
//         updateCounter();
//     }

//     // Intersection Observer for animations
//     const observerOptions = {
//         threshold: 0.1,
//         rootMargin: '0px 0px -100px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 // Stats animation
//                 if (entry.target.classList.contains('hero-stats')) {
//                     const statNumbers = entry.target.querySelectorAll('.stat-number');
//                     statNumbers.forEach(stat => {
//                         const target = parseInt(stat.getAttribute('data-target'));
//                         animateCounter(stat, target);
//                     });
//                 }
                
//                 // Step items animation
//                 if (entry.target.classList.contains('step-item')) {
//                     entry.target.style.opacity = '1';
//                     entry.target.style.transform = 'translateY(0)';
//                 }
//             }
//         });
//     }, observerOptions);

//     // Observe elements
//     document.querySelectorAll('.hero-stats, .step-item').forEach(el => {
//         observer.observe(el);
//     });

//     // Feature cards swipe functionality
//     let currentCard = 0;
//     const cards = document.querySelectorAll('.feature-card');
//     const indicators = document.querySelectorAll('.indicator');
//     const cardContainer = document.querySelector('.card-container');
//     const prevBtn = document.querySelector('.prev-btn');
//     const nextBtn = document.querySelector('.next-btn');

//     function updateCards() {
//         cardContainer.style.transform = `translateX(-${currentCard * 100}%)`;
        
//         indicators.forEach((indicator, index) => {
//             indicator.classList.toggle('active', index === currentCard);
//         });
//     }

//     function nextCard() {
//         currentCard = (currentCard + 1) % cards.length;
//         updateCards();
//     }

//     function prevCard() {
//         currentCard = (currentCard - 1 + cards.length) % cards.length;
//         updateCards();
//     }

//     // Navigation buttons
//     nextBtn.addEventListener('click', nextCard);
//     prevBtn.addEventListener('click', prevCard);

//     // Indicator navigation
//     indicators.forEach((indicator, index) => {
//         indicator.addEventListener('click', () => {
//             currentCard = index;
//             updateCards();
//         });
//     });

//     // Auto-play feature cards
//     let autoPlayInterval = setInterval(nextCard, 5000);

//     // Pause auto-play on hover
//     const featuresSection = document.querySelector('.features-cards');
//     featuresSection.addEventListener('mouseenter', () => {
//         clearInterval(autoPlayInterval);
//     });

//     featuresSection.addEventListener('mouseleave', () => {
//         autoPlayInterval = setInterval(nextCard, 5000);
//     });

//     // Touch/swipe support for feature cards
//     let startX = 0;
//     let currentX = 0;
//     let isDragging = false;

//     cardContainer.addEventListener('touchstart', (e) => {
//         startX = e.touches[0].clientX;
//         isDragging = true;
//         clearInterval(autoPlayInterval);
//     });

//     cardContainer.addEventListener('touchmove', (e) => {
//         if (!isDragging) return;
//         currentX = e.touches[0].clientX;
//         const diffX = startX - currentX;
        
//         if (Math.abs(diffX) > 50) {
//             if (diffX > 0) {
//                 nextCard();
//             } else {
//                 prevCard();
//             }
//             isDragging = false;
//         }
//     });

//     cardContainer.addEventListener('touchend', () => {
//         isDragging = false;
//         autoPlayInterval = setInterval(nextCard, 5000);
//     });

//     // Testimonials slider
//     let currentTestimonial = 0;
//     const testimonials = document.querySelectorAll('.testimonial-card');

//     function updateTestimonials() {
//         testimonials.forEach((testimonial, index) => {
//             testimonial.classList.toggle('active', index === currentTestimonial);
//         });
//     }

//     function nextTestimonial() {
//         currentTestimonial = (currentTestimonial + 1) % testimonials.length;
//         updateTestimonials();
//     }

//     // Auto-play testimonials
//     setInterval(nextTestimonial, 4000);

//     // Pricing cards hover effects
//     const pricingCards = document.querySelectorAll('.pricing-card');
//     pricingCards.forEach(card => {
//         card.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-10px)';
//             if (this.classList.contains('featured')) {
//                 this.style.transform = 'scale(1.05) translateY(-10px)';
//             }
//         });
        
//         card.addEventListener('mouseleave', function() {
//             this.style.transform = '';
//             if (this.classList.contains('featured')) {
//                 this.style.transform = 'scale(1.05)';
//             }
//         });
//     });

//     // Parallax effect for hero section
//     window.addEventListener('scroll', function() {
//         const scrolled = window.pageYOffset;
//         const heroVideo = document.querySelector('.hero-video');
//         const heroContent = document.querySelector('.hero-content');
        
//         if (heroVideo) {
//             heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
//         }
        
//         if (heroContent) {
//             heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
//         }
//     });

//     // Add loading animation
//     window.addEventListener('load', function() {
//         document.body.classList.add('loaded');
//     });

//     // Button click animations
//     const buttons = document.querySelectorAll('.btn, .cta-button, .pricing-button');
//     buttons.forEach(button => {
//         button.addEventListener('click', function(e) {
//             let ripple = document.createElement('span');
//             ripple.classList.add('ripple');
            
//             let rect = this.getBoundingClientRect();
//             let size = Math.max(rect.width, rect.height);
//             let x = e.clientX - rect.left - size / 2;
//             let y = e.clientY - rect.top - size / 2;
            
//             ripple.style.width = ripple.style.height = size + 'px';
//             ripple.style.left = x + 'px';
//             ripple.style.top = y + 'px';
            
//             this.appendChild(ripple);
            
//             setTimeout(() => {
//                 ripple.remove();
//             }, 600);
//         });
//     });

//     // Scroll-triggered animations
//     const animatedElements = document.querySelectorAll('.feature-card, .step-item, .pricing-card');
    
//     const animationObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = '1';
//                 entry.target.style.transform = 'translateY(0)';
//             }
//         });
//     }, {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     });

//     animatedElements.forEach(el => {
//         el.style.opacity = '0';
//         el.style.transform = 'translateY(30px)';
//         el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//         animationObserver.observe(el);
//     });

//     // Form validation (if needed)
//     const forms = document.querySelectorAll('form');
//     forms.forEach(form => {
//         form.addEventListener('submit', function(e) {
//             e.preventDefault();
//             // Add your form submission logic here
//             console.log('Form submitted!');
//         });
//     });
// });

// // Add CSS for ripple effect
// const style = document.createElement('style');
// style.textContent = `
//     .ripple {
//         position: absolute;
//         border-radius: 50%;
//         background: rgba(255, 255, 255, 0.3);
//         transform: scale(0);
//         animation: ripple-animation 0.6s ease-out;
//         pointer-events: none;
//     }
    
//     @keyframes ripple-animation {
//         to {
//             transform: scale(2);
//             opacity: 0;
//         }
//     }
    
//     .loaded {
//         animation: fadeIn 0.5s ease-out;
//     }
    
//     @media (max-width: 768px) {
//         .nav.active {
//             display: flex;
//             flex-direction: column;
//             position: absolute;
//             top: 100%;
//             left: 0;
//             right: 0;
//             background: white;
//             box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
//             padding: 1rem;
//             border-radius: 0 0 10px 10px;
//         }
        
//         .mobile-menu-toggle.active span:nth-child(1) {
//             transform: rotate(45deg) translate(5px, 5px);
//         }
        
//         .mobile-menu-toggle.active span:nth-child(2) {
//             opacity: 0;
//         }
        
//         .mobile-menu-toggle.active span:nth-child(3) {
//             transform: rotate(-45deg) translate(7px, -6px);
//         }
//     }
// `;
// document.head.appendChild(style);


 
  const slider = document.getElementById('testimonialSlider');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  const totalSlides = slider.children.length;
  let currentSlide = 0;

  function updateSlidePosition() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
  });

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  });
 


document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    navToggle.addEventListener('change', () => {
        navMenu.classList.toggle('open');
    });
});


document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const navToggle = document.getElementById('nav-toggle');
    if (navToggle.checked) {
      navToggle.checked = false;
    }
  });
});