
const primaryNav = document.querySelector('.primary-navigation');
const btnToggle = document.querySelector('.mobile-toggle');

btnToggle.addEventListener('click', function () {
    const viewToggle = primaryNav.getAttribute('data-visible')
    if (viewToggle === 'false') {
        primaryNav.setAttribute('data-visible', true);
        btnToggle.setAttribute('aria-expanded', true);
    } else if (viewToggle === 'true') {
        primaryNav.setAttribute('data-visible', false)
        btnToggle.setAttribute('aria-expanded', false);
    }
});


























// const navLinks = document.querySelectorAll('.nav-link');

// navLinks.forEach(link => {
//     link.addEventListener('click', function (event) {
//         event.preventDefault();
//         const target = this.dataset.link;

//         // Remove active class from all links
//         navLinks.forEach(link => {
//             link.classList.remove('active');
//         });

//         // Add active class to the clicked link
//         this.classList.add('active');

//         // Perform any additional actions based on the clicked link
//         // For example, update the content based on the target
//         console.log('Clicked link:', target);
//     });
// });

// $(document).ready(function () {
//     // Add click event listener to each link
//     $('.moon-header a').click(function () {
//         // Remove "active" class from all links
//         $('.moon-header a').removeClass('active');
//         // Add "active" class to the clicked link
//         $(this).addClass('active');
//     });
// });
