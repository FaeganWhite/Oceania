// Create an array to store the pages
var pages = [];
// Create a variable to save if the page is a partner site (from config file)
var partnersite = 0;

// Hide the page load matte if 5 seconds are reached
setTimeout(function(){document.getElementById("pageLoadMatte").style.display = "none";}, 10000);

// Function to create a page object
function createPage(name, div, button, links, butRef) {
	// Create page object
	const obj = {};
	// Assign the variables to the page object
	obj.name = name;
	obj.div = div;
	obj.button = button;
	obj.videoLinks = [];
	obj.id = "#"+name;
	obj.vidLinks = links;
	obj.buttonName = butRef;
	// Return the page object
	return obj;
}

// When the skeleton page has loaded
function onLoad() {
	// Find the elements in the page
	var mainElement = document.getElementsByTagName("main");
	var footerElement = document.getElementById("buttonsFooter");
	var headerMenu = document.getElementsByClassName("headerMenu");
	
	// Load the config text file
	var textIn = new Array;
	$.get('config.txt', function(data){
		// Split the data by new lines
		textIn = data.split('\n');
		// For every line in the text file
		for (i=0; i<textIn.length; i++) {
			// If there is text on the line
			if (textIn.length > 0) {
				// If the line is a page line (not a config line)
				if (textIn[i].charAt(0) != '.') {
					// Return the vimeo link counter to 0
					var vimCounter = 0;
					// Split the data line into folder name and name of the page
					var pageData = textIn[i].split('-');
					// Create a main div using the name information
					var pageDiv = document.createElement("DIV");
					// Add it to the main element
					mainElement[0].appendChild(pageDiv);
					// Add its ID from the config file
					pageDiv.id = String(pageData[1]);
					// Add its class
					pageDiv.className = "page";
					// If the config file contains vimeo links
					if (pageData.length > 2) {
						// Get the vimeo links from the config file
						var links = pageData[2].split(',');
					} else {
						// Store that there are no links
						var links = null;	
					}
					// Get its button reference name from the config file
					var butRef = pageData[0];

					// Create a button using the name information
					var pageButton = document.createElement("BUTTON");
					// Add it to the main element
					footerElement.appendChild(pageButton);
					// Add its ID from the config file
					pageButton.id = String(pageData[1])+"button";
					// Add its class
					pageButton.className = "navButton";
					// Add the name from the config file
					pageButton.innerHTML = butRef;

					// Create a mobile menu button using the name information
					var mobileButton = document.createElement("BUTTON");
					// Add it to the main element
					headerMenu[0].appendChild(mobileButton);
					// Add its ID from the config file
					mobileButton.id = String(pageData[1])+"mobileButton";
					// Add its class
					mobileButton.className = "headerButton";
					// Add the name from the config file
					mobileButton.innerHTML = butRef;

					// Create a page object
					pages[i] = createPage(String(pageData[1]), pageDiv, pageButton, links, butRef);

					// Add the page's css to the header element once the html is loaded
					$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', "/pages/"+pageDiv.id+"/pageStylesheet.css"));

					// When the page button is clicked
					pageButton.addEventListener("click",function(){
						// Search the list of pages
						for (b = 0; b < pages.length; b++) {
							// If the page object's name matches the clicked DOM element's ID
							if (pages[b].name+"button" == this.id) {
								// Show the page
								showPage(b, true);
							}
						}
					});

					// When the mobile button is clicked
					mobileButton.addEventListener("click",function(){
						// Search the list of pages
						for (b = 0; b < pages.length; b++) {
							// If the page object's name matches the clicked DOM element's ID
							if (pages[b].name+"mobileButton" == this.id) {
								// Show the page
								showPage(b, true);
								// Get the burger menu check box element
								var burgerMenu = document.getElementById("topBurgerMenu");
								// Uncheck the burger menu
								burgerMenu.checked = false;
								// Reformat the burger menu icon
								burgerIconFormat(2);
							}
						}
					});
					// Otherwise if the line is a partner config line
				} else if (textIn[i].includes("=")) {
					// Split apart the line from the config file
					var data = textIn[i].split('=');
					// If it is defining partner site
					if (data[0] == ".PARTNER") {
						// set the partner variable to the value from the config file
						partnersite = parseInt(data[1]);
					}
				}
			}
		}	
		
		// Set the page buttons
		setPageButtons();
		// Hide all the pages in the page array
		hideAllPages(pages);
		// load the page content (and show the first page)
		loadPageContent(0);
	});
}

// Recursive function to load the page html content into the page divs in order
function loadPageContent(pageCounter) {
	// If the end of the pages array hasn't been reached
	if (pageCounter < pages.length) {
		// Load the corresponding page HTML and CSS in to the page div and call the next page to be loaded in		
		$(function(){
			$(pages[pageCounter].div).load("/pages/"+pages[pageCounter].name+"/index.html", function() {
				// If this was the first page to be loaded
				if (pageCounter == 0) {
					// Load any partner content for the first site
					loadPartnerContent();
					// Hide the screen and reveal the front page
					revealFirstPage();
				}
				// Load the following page 
				loadPageContent(pageCounter+1);
			});
		});
	} else {
		// Once all the pages have been loaded, load in the partner content for all the other pages
		loadPartnerContent();
	}
}

// Function to hide the loading matte and reveal the content
function revealFirstPage() {
	// Unhide all of the content
	document.getElementsByTagName("main")[0].style.display = "block";
	// If the device isn't mobile
	if (!checkMobile()) {
		// Show the footer
		document.getElementsByTagName("footer")[0].style.display = "flex";
	}
	// Make the first page visible
	showPage(0, true);
	// Counter for the number of images loaded
	var loaded = 0
	// When an image has loaded
	$("img").one("load", function() {
		// If 10 images has loaded
		if (loaded > 10) {
			// Fade the cover away after half a second
			$("#pageLoadMatte").delay(700).fadeOut("slow", function() {
				// The hide the pageLoadMatte
				document.getElementById("pageLoadMatte").style.display = "none";
			});
		}
		// Add 1 to the number of images loaded
		loaded += 1;
	  	}).each(function() {
			if(this.complete) {
				$(this).trigger('load');
			}
	});
}

// Load partner content into the Bubl if it exists
function loadPartnerContent() {
	// If the site is a partner site according to the config file
	if (partnersite == 1) {
		// Load the corresponding page HTML and CSS in to the page div and call the next page to be loaded in	
		$(function() {
			// Load the partner content in to the partnerContent divs
			$('.partnerContent').load("partner/partnerContent.html", function() {
				// Add the rollover ability to the partner content
				setupRollover();
				// Load the stylesheet
				$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', "partner/partnerStylesheet.css"));
			});
		});
	} else {
		// If mobile and not landscape
		if (checkMobile() && !checkMobileLandscape()) {
			// Hide the partner content
			$(".partnerContent").hide();
			// Hide the video play buttons
			$(".vidPlayButton").show();
		}
	}
}
