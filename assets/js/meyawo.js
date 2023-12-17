/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


document.querySelectorAll('.filter-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var filter = this.dataset.filter;
        document.querySelectorAll('.col-md-4').forEach(function(card) {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Get all 'portfolio-card' elements
var cards = document.querySelectorAll('.portfolio-card');

// Function to filter cards
function filterCards(category) {
    // Loop through all cards
    cards.forEach(function(card) {
        // If the card's category matches the selected category, show it
        if (card.dataset.category === category) {
            card.style.display = 'block';
        } 
        // Otherwise, remove it from the DOM
        else {
            card.parentNode.removeChild(card);
        }
    });
}