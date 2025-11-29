"use strict";
(function() {
    window.addEventListener("load", init);

    function init() {
        setupFilters();
    }

    // Simple filter function
    function setupFilters() {
        const buttons = document.querySelectorAll('.filter-btn');
        const items = document.querySelectorAll('.destination-item');
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                buttons.forEach(btn => btn.classList.remove('active'));
                // Add active to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                filterItems(filter, items);
            });
        });
    }

    function filterItems(filter, items) {
        items.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || category.includes(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

})();