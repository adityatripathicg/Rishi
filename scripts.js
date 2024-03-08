document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery-container");

    // Replace these image URLs with your own
    const imageUrls = [
        "./1.jpg",
        "./2.jpg",
        "./3.jpg",
        "./4.jpg",
        "./5.jpg",
        "./6.jpg",
        "./7.jpg",
        "./8.jpg",
        "./9.jpg",
        "./10.jpg",
        "./11.jpg",
        "./12.jpg",
        "./13.jpg",
    
    ];

    // Create and append image elements to the gallery container
    imageUrls.forEach((imageUrl, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = `Image ${index + 1}`;
        galleryContainer.appendChild(imgElement);
    });
});
