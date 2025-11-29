"use strict";
(function() {
    window.addEventListener("load", init);

    function init() {
        setupFAQ();
    }

    function setupFAQ() {
        const questions = document.querySelectorAll('.faq-question');
        
        questions.forEach(question => {
            question.addEventListener('click', function() {
                // Simple toggle - Bootstrap handles the collapse
                const answer = this.nextElementSibling;
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                } else {
                    answer.style.display = 'block';
                }
            });
        });
    }

})();