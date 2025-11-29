"use strict";
(function() {
    window.addEventListener("load", init);

    function init() {
        // Bootstrap tabs handle the functionality
        console.log("Fasilitas page loaded");
    }

    // Simple facility status check
    function checkFacility(facility) {
        const status = {
            'parkir': 'Tersedia',
            'wifi': 'Tersedia',
            'restoran': 'Tersedia di sebagian destinasi'
        };
        return status[facility] || 'Tidak diketahui';
    }

})();