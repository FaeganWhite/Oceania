function initiateHover() {
    // Get all the bomImages in the document
    boxImages = document.getElementsByClassName("boxImage");
    // For each image in the page
    for (a = 0; a < boxImages.length; a++) {
        // Whent the mouse enters
        boxImages[a].addEventListener("mouseenter", e => {
            // Get the position of the . in the image src address
            index = event.target.src.lastIndexOf(".");
            // Add "HOVER" in to the src to link to the hovering images
            event.target.src = event.target.src.substring(0, index) + "-hover" + event.target.src.substring(index);
        });
        // When the mouse leaves the image
        boxImages[a].addEventListener("mouseleave", e => {
            // Get the position of HOVER in the string
            index = event.target.src.indexOf("-hover");
            // Return the image to its usual link by removing hover
            event.target.src = event.target.src.substring(0, index) + event.target.src.substring(index+6);
        });
    }
}