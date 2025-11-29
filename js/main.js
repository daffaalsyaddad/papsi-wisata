"use strict";
(function() {
    window.addEventListener("load", init);

    function init() {
        visitorCounter();
        initHeroSlider();
        initNavbarScroll();
        console.log("Website loaded!");
    }

    // Hero Slider Functionality
    function initHeroSlider() {
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.slider-dot');
        let currentSlide = 0;
        const slideInterval = 5000;

        function showSlide(n) {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
            slides[n].classList.add('active');
            dots[n].classList.add('active');
            currentSlide = n;
        }

        function nextSlide() {
            let next = currentSlide + 1;
            if (next >= slides.length) next = 0;
            showSlide(next);
        }

        let slideTimer = setInterval(nextSlide, slideInterval);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                clearInterval(slideTimer);
                showSlide(index);
                slideTimer = setInterval(nextSlide, slideInterval);
            });
        });

        const slider = document.querySelector('.hero-slider');
        slider.addEventListener('mouseenter', () => clearInterval(slideTimer));
        slider.addEventListener('mouseleave', () => slideTimer = setInterval(nextSlide, slideInterval));
    }

    // Navbar Scroll Effect - Fixed
    function initNavbarScroll() {
        const navbar = document.querySelector('.navbar-transparent');
        const heroHeight = document.querySelector('.hero-slider').offsetHeight;
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > heroHeight - 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    function visitorCounter() {
        const counter = document.getElementById('visitorCount');
        if (!counter) return;
        
        let count = 0;
        const target = 150;
        const timer = setInterval(() => {
            count++;
            counter.textContent = count;
            if (count >= target) clearInterval(timer);
        }, 10);
    }

})();