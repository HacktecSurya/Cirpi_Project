function openPopup(popupId) {
    document.getElementById("donationForm").style.display = "block";
    const popup = document.getElementById(popupId);
    const blurOverlay = document.getElementById('blur-overlay');
    // document.body.style.position = "fixed";
    event.preventDefault();

    if (popup && blurOverlay) {
        popup.classList.add("open-popup");
        blurOverlay.style.display = 'block';
    } else {
        console.error("Popup or blur-overlay element not found.");
    }
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    const blurOverlay = document.getElementById('blur-overlay');
    // document.body.style.position = "static";
    event.preventDefault();

    if (popup && blurOverlay) {
        popup.classList.remove("open-popup");
        blurOverlay.style.display = 'none';
        document.getElementById("qrSection").style.display = "none";
    }
}



document.getElementById("donationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const donorName = document.getElementById("donorName").value.trim();
    const donorEmail = document.getElementById("donorEmail").value.trim();
    const donorMobile = document.getElementById("donorMobile").value.trim();

    if (!donorName || !donorEmail || !donorMobile ) {
        alert("Please fill in all fields before proceeding.");
        return;
    }
    if(donorMobile.length != 10){
        alert("Please enter a valid mobile number.");
        return;
    }

    storeDataInGoogleSheets(donorName, donorEmail, donorMobile);
});

function storeDataInGoogleSheets(name, email, mobile) {
    const scriptURL = "https://script.google.com/macros/s/AKfycbzQ1tNA59sm15P6bjjN6d5xhVsZeUsWuN46hOyym4pBLARzYlWKp2W5ML76DTyZmX5e8g/exec";

    fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, mobile }),
        mode: "no-cors"  // <--- This avoids CORS errors but you won't get a response
    })
    .then(() => {
        alert("Donation details submitted successfully!");
        document.getElementById("donationForm").style.display = "none";
        showQRCode();
        resetForm();
    })
    .catch(error => console.error("Error:", error));
    
}



function showQRCode() {
    const qrSection = document.getElementById("qrSection");
    if (qrSection.style.display === "block") return; 

    qrSection.style.display = "block";
    let timeLeft = 300; 
    const countdownElement = document.getElementById("countdown");

    if (!countdownElement) {
        console.error("Countdown element not found!");
        return;
    }

    const timer = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        countdownElement.innerHTML = `QR Code will expire in ${minutes}m ${seconds}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            qrSection.style.display = "none";
        }
        timeLeft--;
    }, 1000);
}



function resetForm() {
    setTimeout(() => {
        document.getElementById("donationForm").reset();
    }, 3000);
}



// document.addEventListener("DOMContentLoaded", function () {
//     let items = document.querySelectorAll(".carousel .carousel-item");

//     items.forEach((el) => {
//         let minPerSlide = window.innerWidth <= 425 ? 2 : 4; // 2 items for mobile, 4 for larger screens
//         let next = el.nextElementSibling;
//         for (var i = 1; i < minPerSlide; i++) {
//             if (!next) {
//                 next = items[0];
//             }
//             let cloneChild = next.firstElementChild.cloneNode(true);
//             el.appendChild(cloneChild.children[0]);
//             next = next.nextElementSibling;
//         }
//     });
// });

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         loop: true,
//         margin: 10,
//         nav: true,
//         center: true, 
//         dots: true,
//         autoplay: true,
//         autoplayTimeout: 3000,
//         smartSpeed: 600,
//         responsive:{
//             0:{
//                 items: 1
//             },
//             600:{
//                 items: 3
//             },
//             1000:{
//                 items: 5
//             }
//         },
//         onTranslated: function () {
//             $(".owl-item .card").css("width", "260px");
//             $(".owl-item.active.center .card").css("width", "320px"); 
//         }
//     });
// });


// volunteer form
// Handle volunteer form submission
document.querySelector(".volunteer-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("volunteer-name").value.trim();
    const email = document.getElementById("volunteer-email").value.trim();
    const phone = document.getElementById("volunteer-phone").value.trim();

    if (!name || !email || !phone) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    storeVolunteerData(name, email, phone); 
});

function storeVolunteerData(name, email, phone) {
    const scriptURL = "https://script.google.com/macros/s/AKfycbzKE0Z_-AV_jsNhEGHo_6AGTDwWCeYNfVer4FRhX--DTnaOzB6aRnBYtQwhGZBJWh88/exec";
    
    fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, mobile: phone }),
        mode: "no-cors"
    })
    .then(() => {
        alert("Volunteer details submitted successfully!");
        resetVolunteerForm();
    })
    .catch(error => console.error("Error:", error));
}

function resetVolunteerForm() {
    setTimeout(() => {
        document.querySelector(".volunteer-form").reset();
    }, 3000);
}
