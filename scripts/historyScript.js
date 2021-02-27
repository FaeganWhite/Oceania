// Passes information to google analytics
function dataLayerPush(pageName) {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		'event': 'Pageview',
		'pagePath': window.location.href,
		'pageTitle': pageName,
	});
}

// Save the current state of the site to history
function pushToHistory(pageNum, popup) {
	// Get the address of the page using the name of the page's button, replacing spaces with _ and capitalising each word
	address = capitalise(pages[pageNum].buttonName.replace(/[^A-Za-z0-9\s]/g,"").replace(/\s{2,}/g, " ").replace(/ /g, "_").toLowerCase());
	// Create a variable to store the current popup's Id
	var saveId;
	// If there is a popup to save
	if (popup != null) {
		// If the popup doesn't have an ID
		if (!popup.hasAttribute('id')) {
			// Generate a random Id
			saveId = "id" + Math.random().toString(16).slice(2);
			// Set the popup's id to the random ID
			popup.id = saveId;
		} else {
			// Otherwise, get the popup's Id
			saveId = popup.id;
		}
	}
	// Create an object to represent the site's state
	let stateObj = {
		pageNo: pageNum, 						// The page number
		pageName: address, 	// The page's name for the address
		popupId: saveId, 						// The Id of the popup
	}
	// If the user has no popup open
	if (popup == null) {
		// Save the state object to the history stack and add the pages button name to the URL
		history.pushState(stateObj, "", address);
	// Otherwise if there is a popup open
	} else {
		// Save the state object to the history stack and add the popup name to the URL
		history.pushState(stateObj, "", address+"#popup");
	}
	// Pass the information to google analytics
	dataLayerPush(pages[pageNum].address);
}

// Add event listener to revert to a previous state when the history stack is popped (back button pressed)
window.addEventListener('popstate', function(event) {
	// Get the page number from the stack
	var pageNum = event.state.pageNo;
	// Move to the page from the stack
	showPage(pageNum, false);
	// If the popup in state is not null
	if (event.state.popupId != null) {
		// Show the popup with the saved id, not saving this event to the history stack
		showPopup(event.state.popupId, false);
	} else {
		// Otherwise hide all popups
		hidePopups();
	}
});

// Funciton to capitalise the first letter of every word
function capitalise(str) {
	// Split the string by underscores
	splitStr = str.toLowerCase().split('_');
	// For each substring
	for (var i = 0; i < splitStr.length; i++) {
		// Capitalise the first letter
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
	}
	// Return the string, replacing in the underscores
	return splitStr.join('_'); 
 }