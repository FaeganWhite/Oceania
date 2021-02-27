// Establish the variables for the vimeo videos
var suffix = "api=1&loop=0&autopause=1"; // The suffix to add on to the vimeo links
var showPlayButtons = false; // Variable to show/hide the mobile play buttons

// Load the vimeo videos on a specific page from the config file
function loadVimeoVideos(pageNumber) {
	// Get the pageid from the page number
	var page = pages[pageNumber].div;
	// Get the iframes in the page
	var iframes = page.getElementsByTagName("IFRAME");
	// For every iframe
	for (var i=0; i < iframes.length; i++) {
		// If the src is 'empty'
		if (iframes[i].src == "about:blank") {
			// Set the iframes src from the config file data stored in the page object plus the suffix
			iframes[i].src = pages[pageNumber].vidLinks[i] + suffix;
			// Make sure the iframe fills its iframeRelative container
			iframes[i].style.width = '100%';
			iframes[i].style.height = '100%';
			// Check for an error
			try {
				// Create a player from the iframe element
				let player = new Vimeo.Player(iframes[i]);
				// Set the player's iframe to the corresponding iframe
				player['iframe'] = iframes[i]
				// Add an event listener to when the player is played
				player.on('play', function(data) {
					// Hide the play button
					player['iframe'].previousElementSibling.style.display = 'None';
				});
				// Add an event listener to when the player is paused
				player.on('pause', function(data) {
					if (checkMobile()) {
						// Show the play button
						player['iframe'].previousElementSibling.style.display = 'Block';
					}
				});
				// Otherwise if there's an error, print it
			} catch(x) {
				//console.log(x.message);
			}

		}
	}
};

// A function to close all open videos
function closeAllVideos() {
	// Get every iframe
	all = document.getElementsByTagName("IFRAME");
	// For every iframe
	for (var i=0, max=all.length; i < max; i++) {
		var iframe = all[i];
		// If the iframe has been loaded
		if (iframe.src != "about:blank" && iframe.src.includes('vimeo')) {
			// Pause the video
			var player = new Vimeo.Player(iframe);
			player.unload();
		}
	}
}