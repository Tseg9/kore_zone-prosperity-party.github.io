document.addEventListener('DOMContentLoaded', () => {

    // ======================= Hero Slider Logic =======================
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(slideIndex) {
        // Reset all slides and dots
        slides.forEach(slide => slide.classList.remove('active-slide'));
        dots.forEach(dot => dot.classList.remove('active-dot'));

        // Handle index wrapping
        if (slideIndex >= totalSlides) {
            currentSlide = 0;
        } else if (slideIndex < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = slideIndex;
        }

        // Activate the current slide and dot
        if (slides[currentSlide]) {
            slides[currentSlide].classList.add('active-slide');
        }
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active-dot');
        }
    }

    // Arrow navigation
    if (nextArrow) {
        nextArrow.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
    }

    if (prevArrow) {
        prevArrow.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Auto-play the slider (optional)
    // setInterval(() => {
    //     showSlide(currentSlide + 1);
    // }, 5000); // Change slide every 5 seconds


    // ======================= FAQ Accordion Logic =======================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Check if the item is already active
            const isActive = item.classList.contains('active');

            // Optional: Close all other active items for a true accordion effect
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle the current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

});