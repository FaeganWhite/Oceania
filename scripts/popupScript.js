// When the window is resized, make imagePopupContentBoxes the same height as their sibling popupContentBoxes
window.addEventListener('resize', resizeImagePopupContentBox);

// Closes the all the popup and saves the state to the history stack
function closePopup() {
	// Hide all the popups
	hidePopups()
	// Push the state to the history
	// For every page in the document
	for (b = 0; b < pageList.length; b++) {
		// If the page is visible
		if (pageList[b].style.display == "block") {
			// Add the information to the stack
			pushToHistory(b, null)
			// Break the loop
			break;
		}
	}
}

// hide all of the popups in the site
function hidePopups() {
	// Get all of the popups in the document
	var popups = document.getElementsByClassName("popup");
	// For every popup
	for (var a = 0; a < popups.length; a++){
		// If the user isn't on mobile or the popup isn't in the sidebar
		if (!checkMobile() || popups[a].parentElement.className != "sidebar") {
			// Hide the popup
        	popups[a].style.display = "none";
		}
	}
	// Close all vimeo videos
	closeAllVideos()
}

// Show all popups
function showAllPopups() {
	// Show all the popups in the document
	$(".popup").show();
}

// Show the popup in the next div if blank, otherwise show popup by id
function showPopup(popupId = null, push = true) {
	// Close all vimeo videos
	closeAllVideos()
	// Establish the popup
	var popup;
	// If no id has been entered
	if (popupId == null) {
		// Get the following sibling div of the parent div
		popup = event.target.nextElementSibling;
	} else if (popupId == 1) {
		// Get the following sibling div of the parent div
		popup = event.target.parentElement.nextElementSibling;
	} else if (popupId == 2) {
		// Get the following sibling div of the parent div
		popup = event.target.parentElement.parentElement.nextElementSibling;
	} else if (popupId == 3) {
		// Get the following sibling div of the parent div
		popup = event.target.parentElement.parentElement.parentElement.nextElementSibling;
	} else {
		// Otherwise get the popup  y it's Id
		popup = document.getElementById(popupId);
	}
	// Hide any open popups
	hidePopups();
	// Show the designated opop
	popup.style.display = "flex";
	// Make imagePopupContentBoxes the same height as their sibling popupContentBoxes
	resizeImagePopupContentBox();
	// If push is true, oush the popup to history
	if (push == true) {
		// Get all the pages
		pageList = document.getElementsByClassName("page");
		// For every page in the document
		for (a = 0; a < pageList.length; a++) {
			// If the page is visible
			if (pageList[a].style.display == "block") {
				// Add the information to the stack
				pushToHistory(a, popup)
				// Break the loop
				break;
			}
		}
	}
}

// Make sure all of the imagePopupContentBox's remain the same height as the sibling popup content Boxes
function resizeImagePopupContentBox() {
	// Get the image popup content boxes in the document
	var imagePopupContentBoxes = document.getElementsByClassName("imagePopupContentBox");
	// For every image popup content box
	for (i=0; i < imagePopupContentBoxes.length; i++) {
		// Get the sibling element
		var sibling = imagePopupContentBoxes[i].nextElementSibling
		// Get the sibling's height
		var sibHeight = $(sibling).height();
		// Set the imagePopupContentBox's hight to the sibling's height
		$(imagePopupContentBoxes[i]).height(sibHeight);
	}
}