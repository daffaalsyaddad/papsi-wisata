"use strict";
(function() {
    window.addEventListener("load", init);

    function init() {
        setupForm();
    }

    // Simple form validation
    function setupForm() {
        const form = document.getElementById('contactForm');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('firstName').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (name && email && message) {
                alert('Pesan terkirim! Terima kasih.');
                form.reset();
            } else {
                alert('Harap isi semua field yang wajib.');
            }
        });
    }

})();