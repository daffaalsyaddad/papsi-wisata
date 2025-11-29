"use strict";
(function() {
    window.addEventListener("load", init);

    function init() {
        setupGalleryFilter();
    }

    function setupGalleryFilter() {
        const buttons = document.querySelectorAll('.filter-btn');
        const items = document.querySelectorAll('.gallery-item');
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                items.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

})();