
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    const blurOverlay = document.getElementById('blur-overlay');

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

    if (popup && blurOverlay) {
        popup.classList.remove("open-popup");
        blurOverlay.style.display = 'none';
        document.getElementById("qrSection").style.display = "none";
    }
}

// Handle Form Submission
document.getElementById("donationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const donorName = document.getElementById("donorName").value;
    const donorMobile = document.getElementById("donorMobile").value;

    if (donorName && donorMobile) {
        storeDataInGoogleSheets(donorName, donorMobile);
        showQRCode();
    }
});

function showQRCode() {
    document.getElementById("qrSection").style.display = "block";

    let timeLeft = 300; 
    const countdownElement = document.getElementById("countdown");

    const timer = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        countdownElement.innerHTML = `QR Code will expire in ${minutes}m ${seconds}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("qrSection").style.display = "none";
        }
        timeLeft--;
    }, 1000);
}



function storeDataInGoogleSheets(name, mobile) {
    const scriptURL = "AKfycbxz7OYB7awUCTzQOTWLih5ciUUDXsnDSsoBiY23uzc-KoxsInycm-IUEHqzymDetJlW"; 

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ name: name, mobile: mobile }),
        headers: { "Content-Type": "application/json" },
    })
    .then(response => response.text())
    .then(data => console.log("Success:", data))
    .catch(error => console.error("Error:", error));
}




function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Find the last row and insert data
    var lastRow = sheet.getLastRow();
    sheet.appendRow([lastRow, data.name, data.mobile]);

    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}







// data adding to sheets/

function storeDataInGoogleSheets(name, mobile) {
    const scriptURL = "https://script.google.com/macros/s/AKfycbxz7OYB7awUCTzQOTWLih5ciUUDXsnDSsoBiY23uzc-KoxsInycm-IUEHqzymDetJlW/exec"; // Replace with actual Web App URL

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ name: name, mobile: mobile }),
        headers: { "Content-Type": "application/json" },
    })
    .then(response => response.text())
    .then(data => {
        console.log("Success:", data);
        showQRCode();
    })
    .catch(error => console.error("Error:", error));
}

// Handle Form Submission
document.getElementById("donationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const donorName = document.getElementById("donorName").value;
    const donorMobile = document.getElementById("donorMobile").value;

    if (donorName && donorMobile) {
        storeDataInGoogleSheets(donorName, donorMobile);
    }
});

function showQRCode() {
    document.getElementById("qrSection").style.display = "block";

    let timeLeft = 300; // 5 minutes countdown
    const countdownElement = document.getElementById("countdown");

    const timer = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        countdownElement.innerHTML = `QR Code will expire in ${minutes}m ${seconds}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("qrSection").style.display = "none";
        }
        timeLeft--;
    }, 1000);
}








const menuIcon = document.querySelector('.navbar-toggler'); 
const navbarNav = document.querySelector('.navbar-nav'); 

menuIcon.addEventListener('click', () => {
    navbarNav.classList.toggle('show'); 
});



$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        center: true, 
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
            $(".owl-item .card").css("width", "260px");
            $(".owl-item.active.center .card").css("width", "320px"); 
        }
    });
});

