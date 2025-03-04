
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



$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        center: true, // Enables center mode
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 600,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 3
            },
            1000:{
                items: 5
            }
        },
        onTranslated: function () {
            $(".owl-item .card").css("width", "260px"); // Default size
            $(".owl-item.active.center .card").css("width", "320px"); // Bigger center card
        }
    });
});



// function submitForm() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;

//     if (name === "" || email === "") {
//         alert("Please enter both name and email.");
//         return;
//     }

//     fetch("https://docs.google.com/spreadsheets/d/1bXwSrfZHvpi_6zKFuaFE0PQZRQZAraDAG-8334vnWWc/edit?gid=0#gid=0", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name: name, email: email }),
//     })
//     .then(response => response.text())
//     .then(data => {
//         alert("Submitted Successfully!");
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//     })
//     .catch(error => alert("Error submitting!"));
// }

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