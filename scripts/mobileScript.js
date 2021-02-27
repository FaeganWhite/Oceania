// When the window is resized, readjust the mobile display
window.addEventListener('resize', updateMobileDisplay);

// Variable to save whether the display is currently mobile
var currentMobile = checkMobile();

// Add an event listener to reformat the burger icon every time it's pressed
// Get the burger meu icon element
var icon = document.getElementById('burgerIcon');
// When the page button is clicked
icon.addEventListener("click",function(){
	burgerIconFormat();
});

// Hide the footer if the viewport is mobile portrait
function updateMobileDisplay() {
	// If the viewport is mobile and has changed from not mobile
	if (checkMobile() && currentMobile != checkMobile()) {
		// Hide the footer
		document.getElementsByTagName("footer")[0].style.display = "none";
		// Show all the popups
		showAllPopups();
		// Hide all popups that aren't intergrated in to the page
		hidePopups()
		// Hide the video play buttons
		$(".vidPlayButton").show();
		// Hide the partner content
		$(".partnerContent").hide();
		// Update the current display
		currentMobile = checkMobile();
	// Otherwise if the display has changed from mobile to not mobile
	} else if (currentMobile != checkMobile()) {
		// Show the footer
		document.getElementsByTagName("footer")[0].style.display = "flex";
		// Close all the popups
		hidePopups();
		// Hide the video play buttons
		$(".vidPlayButton").hide();
		// show the partner content
		$(".partnerContent").show();
		// Update the current display
		currentMobile = checkMobile();
	}
}

// Check if the device is in mobile portrait
function checkMobile() {
	// If the media queries are fullfilled
	if (window.matchMedia("(min-device-width: 320px)").matches && window.matchMedia("(max-device-width: 480px)").matches && window.matchMedia("(-webkit-min-device-pixel-ratio: 2)").matches && window.matchMedia("(orientation: portrait)").matches) {
		// Return true
		return true;
	} else {
		// Otherwise return false
		return false;
	}
}

// Check if the device is in mobile portrait
function checkMobileLandscape() {
	// If the media queries are fullfilled
	if (window.matchMedia("(-webkit-min-device-pixel-ratio: 2)").matches && window.innerHeight < window.innerWidth) {
		// Return true
		return true;
	} else {
		// Otherwise return false
		return false;
	}
}

// Reformat burger menu icon when pressed (mode 0 means to automatically determine, mode 1 means make cross and mode 2 means make a burger symbol)
function burgerIconFormat(mode = 0) {
	// Get the burger menu checkbox element
	var burgerMenu = document.getElementById("topBurgerMenu");
	// If it is unchecked
	if (burgerMenu.checked == false && mode == 0 || mode == 1) {
		// Change the text content to burger icon
		icon.textContent = '\u2A2F';
		// Adjust the font size appropriately
		icon.style.fontSize = "11vw";
		// Chnage the color of the icon
		icon.style.color = "#white";
	} else if (mode == 2 || mode == 0) {
		// Otherwise, if the checkbox is checked
		// Set the content to a cross
		icon.textContent = '\u2630';
		// Change the font size appropriately
		icon.style.fontSize = "10vw";
		// CHnage the color of the icon
		icon.style.color = "white";
	}
};