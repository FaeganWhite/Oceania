// Set the page changing variables
var unselectedColor = "white";
var selectedColor = "#f1ede1";
var unselectedFontColor = "black";
var selectedFontColor = "black";

// Inititialise the header & footer elements
var footerButtons;
var headerButtons;

// Set the page button elements
function setPageButtons() {
	// Get all of the buttons in the document
	footerButtons = document.getElementById("buttonsFooter").children;
	headerButtons = document.getElementsByClassName("headerMenu")[0].children;
	// For every footer button
	for (a = 0; a < footerButtons.length; a++) {
		// When the mouse enters, set the background color to selected
		footerButtons[a].addEventListener("mouseover", function(){
			this.style.backgroundColor = selectedColor;
		});
		// When the mouse leaves
		footerButtons[a].addEventListener("mouseleave", function(){
			// Get all the pages
			pageList = document.getElementsByClassName("page");
			// For every page in the document
			for (b = 0; b < pageList.length; b++) {
				// If the id matches that of the button and it's vissible
				if (pageList[b].id+"button" == this.id && pageList[b].style.display == "block") {
					// Keep the color as the selected color
					this.style.backgroundColor = selectedColor;
					// Break the loop
					break;
				}
				// Otherwise return the color to the unselected color
				this.style.backgroundColor = unselectedColor;
			}
		});
	}
}

// Hide all the pages
function hideAllPages(pagesArray) {
	// Make all the pages hidden
	for (a = 0; a < pagesArray.length; a++) {
		pages[a].div.style.display = 'none';
	}
	
	// For each button
	for (b = 0; b < footerButtons.length; b++) {
		// Set the background and text to the unselected colours
		footerButtons[b].style.backgroundColor = unselectedColor;
		headerButtons[b].style.backgroundColor = unselectedColor;
		footerButtons[b].style.color = unselectedFontColor;
		headerButtons[b].style.color = unselectedFontColor;
	}
}

// Function to switch page
function showPage(pageNum, push = true) {
	// Close all vimeo videos
	closeAllVideos();
	// Hide all the pages
	hideAllPages(pages);
	// Select the correct page
	var pageObject = pages[pageNum].div;
	// Show the clicked page
	pageObject.style.display = "block";
	
	// Color the page's button to the selected color
	footerButtons[pageNum].style.backgroundColor = selectedColor;
	headerButtons[pageNum].style.backgroundColor = selectedColor;
	footerButtons[pageNum].style.color = selectedFontColor;
	headerButtons[pageNum].style.color = selectedFontColor;
	
	// Load the vimeo videos for the page
	loadVimeoVideos(pageNum);
	
	// If push is true
	if (push == true) {
		// Save the new page to the history
		pushToHistory(pageNum, null);
	}
	// Update the mobile display
	updateMobileDisplay();
}

function runPageScripts() {
	$.ajax({
		url:"/Oceania/pages/page4/pageEnter.js",
		type:'HEAD',
		error: function() {
			//file not exists
		},
		success: function() {
			$.getScript("/Oceania/pages/page4/pageEnter.js", function(){
				//Stuff to do after someScript has loaded
			});
		}
	});
}