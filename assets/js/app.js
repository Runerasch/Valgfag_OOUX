// Food Story 


// Vi laver et array som indeholder vores forskellige medier, og hvert objekt beskriver ét medie med type, source, title og location.
const gallery = [

    {
        type: "video",
        src: "./assets/img/Monaco.mp4",
        title: "France",
        location: "Monaco"
    },


    {
        type: "image",
        src: "./assets/img/marked_2.jpg",
        title: "Barcelona",
        location: "The market"
    },

    {
        type: "image",
        src: "./assets/img/Pizza_chef.jpg",
        title: "Italy",
        location: "Pizza chef"
    },

    {
        type: "image",
        src: "./assets/img/cph_kitchen.jpg",
        title: "Michelin star kitchen",
        location: "Copenhagen"
    }
];


// Vi laver en variabel
let currentGallery = 0;

// Vi bruger querySelector til at finde vores HTML-elementer.
// Finder venstre-pilen.
const previousButton = document.querySelector("#fsPrevious");
// Finder højre-pilen.
const nextButton = document.querySelector("#fsNext");
const galleryCounter = document.querySelector("#fsGalleryCounter");
nextButton.addEventListener("click", function () {
    currentGallery++;
    if (currentGallery >= gallery.length) {
        currentGallery = 0;
    }
    galleryCounter.textContent = (currentGallery + 1) + "/" + gallery.length;

});

previousButton.addEventListener("click", function () {
    currentGallery--;
    if (currentGallery < 0) {
        currentGallery = gallery.length - 1;
    }
    galleryCounter.textContent = (currentGallery + 1) + "/" + gallery.length;

});