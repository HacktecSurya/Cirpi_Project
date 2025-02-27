
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    const blurOverlay = document.getElementById('blur-overlay');

    if (popup && blurOverlay) {
        popup.classList.add("open-popup");
        document.body.classList.add("fixed");
        blurOverlay.style.display = 'block';
    } else {
        console.error("Popup or blur-overlay element not found.");
    }
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    const blurOverlay = document.getElementById('blur-overlay');

    if (popup && blurOverlay) {
        popup.classList.remove("open-popup");
        document.body.classList.remove("fixed");
        blurOverlay.style.display = 'none';
    }
}

const menuIcon = document.querySelector('.navbar-toggler'); // Select your hamburger menu icon
const navbarNav = document.querySelector('.navbar-nav'); // Select the navbar links

menuIcon.addEventListener('click', () => {
    navbarNav.classList.toggle('show'); // Toggle the 'show' class on the navbar links
});

// const sections = document.querySelectorAll('.section');

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     const animationType = entry.target.getAttribute('data-animation');
//                     entry.target.classList.add(animationType);
//                 } else {
//                     entry.target.classList.remove(entry.target.getAttribute('data-animation')); // Remove to re-trigger
//                 }
//             });
//         }, { threshold: 0.5 });

//         sections.forEach(section => {
//             observer.observe(section);
//         });