hideContentElements();
var currentPage = 1;
var currentPageName="page1";
pageButton("page1",1, true);
hideVideos('page1SidebarVid');
var showPlayButtons = false;

currentPageName = "Welcome";

// Add the welcome page to the history
	let stateObj = {
		pageNo: currentPage,
		pageName: currentPageName,
		openPop: null,
		openVid: null,
	}

pushToHistory();
pageButton('page1',1, true);

// hide all of the content elements
function hideContentElements() {
	// Hide all the pages
	var y = document.getElementsByClassName("page");
	for (var i = 0; i < y.length; i++){
		y[i].style.display = "none";
    }
};

// Return the navigaton buttons to normal
function returnNavButtons() {
	var x = document.getElementsByClassName("navButton");
	for (var i = 0; i < x.length; i++){
        x[i].style.backgroundColor = '';
		x[i].style.color = '';
		x[i].style.borderColor = '';
    }
	
	var y = document.getElementsByClassName("headerButton");
	for (var i = 0; i < y.length; i++){
        y[i].style.backgroundColor = '';
		y[i].style.color = '';
    }
	// Return the gold button to gold
	var gold = document.getElementById("goldButton");
	gold.style.backgroundColor = "";
	
	/*
	// Hide the buger menu
	var burgerMenu = document.getElementsByClassName("hamburgerCheckbox");
	for (i=0; i<burgerMenu.size; i++) {
		burgerMenu[1].checked = "false";
	}
	
	// Reset the burger menu Icon
	icon = document.getElementById('burgerIcon');
	icon.textContent = '\u2630';
	icon.style.fontSize = "10vw";
	*/
};

// function for when a page button is pressed
function pageButton(pageName, buttonID, addHistory) {
	
	currentPage = buttonID;
	currentPageName = pageName;
	
	// hide all of the content elements
	hideContentElements();
	
	// Show the first page
	document.getElementById(pageName).style.display = "grid";
	
	// Hide any other popup that may be open
	hidePopups();
	
	// Make all the nav buttons gray
	returnNavButtons();
	
	// Color the current button white
	var button1;
	var button2;
	
	switch (buttonID) {
		case 1: var button1 = document.getElementById('navButton1');
					var button2 = document.getElementById('headerButton1');
					// Add the page change to the history
					if (addHistory != false) {
						let stateObj = {
							pageNo: currentPage,
							pageName: pageName,
							openPop: null,
							openVid: null,
						}
					history.pushState(stateObj, "", "Welcome");}
					currentPageName = "Welcome";
					
					dataLayerPush();
					break;
		case 2: var button1 = document.getElementById('navButton2');
					var button2 = document.getElementById('headerButton2');
					// Add the page change to the history
					if (addHistory != false) {
						let stateObj = {
							pageNo: currentPage,
							pageName: pageName,
							openPop: null,
							openVid: null,
						}
					history.pushState(stateObj, "", "Why_Regent");}
					currentPageName = "Why_Regent";
					dataLayerPush();
					break;
		case 3: var button1 = document.getElementById('navButton3');
					var button2 = document.getElementById('headerButton3');
					// Add the page change to the history
					if (addHistory != false) {
						let stateObj = {
							pageNo: currentPage,
							pageName: pageName,
							openPop: null,
							openVid: null,
						}
					history.pushState(stateObj, "", "Life_on_Board");}
					currentPageName = "Life_on_Board";
					dataLayerPush();
					break;
		case 4: var button1 = document.getElementById('navButton4');
					var button2 = document.getElementById('headerButton4');
					// Add the page change to the history
					if (addHistory != false) {
						let stateObj = {
							pageNo: currentPage,
							pageName: pageName,
							openPop: null,
							openVid: null,
						}
					history.pushState(stateObj, "", "Ready_to_Explore");}
					currentPageName = "Ready_to_Explore";
					dataLayerPush();
					break;
		case 5: var button1 = document.getElementById('navButton5');
					var button2 = document.getElementById('headerButton5');
					// Add the page change to the history
					if (addHistory != false) {
						let stateObj = {
							pageNo: currentPage,
							pageName: pageName,
							openPop: null,
							openVid: null,
						}
					history.pushState(stateObj, "", "Home_Away_From_Home");}
					currentPageName = "Home_Away_From_Home";
					dataLayerPush();
					break;
		case 6: var button1 = document.getElementById('navButton6');
					var button2 = document.getElementById('headerButton6');
					// Add the page change to the history
					if (addHistory != false) {
						let stateObj = {
							pageNo: currentPage,
							pageName: pageName,
							openPop: null,
							openVid: null,
						}
					history.pushState(stateObj, "", "Every_Luxury_Included");}
					currentPageName = "Every_Luxury_Included";
					dataLayerPush();
					break;
		case 6.5: var button1 = document.getElementById('navButton6');
					var button2 = document.getElementById('headerButton6');
					// Add the page change to the history
					if (addHistory != false) {
						let stateObj = {
							pageNo: currentPage, // Current page number
							pageName: pageName, // Current page name
							openPop: null, // Current open popup
							openVid: null, // Current open video
						}
						
					// Push the current state to history
					history.pushState(stateObj, "", "Dining_Experiences");}
					currentPageName = "Dining_Experiences";
					// Push the page information to the data layer
					dataLayerPush();
					break;
		case 7: var button1 = document.getElementById('navButton7');
					var button2 = document.getElementById('headerButton7');
					// Add the page change to the history
					if (addHistory != false) {
						let stateObj = {
							pageNo: currentPage,
							pageName: pageName,
							openPop: null,
							openVid: null,
						}
					history.pushState(stateObj, "", "Compare_Us");}
					currentPageName = "Compare_Us";
					dataLayerPush();
					break;
		case 8: var button1 = document.getElementById('goldButton');
					var button2 = document.getElementById('headerGoldButton');
					// Add the page change to the history
					if (addHistory != false) {
						let stateObj = {
							pageNo: currentPage,
							pageName: pageName,
							openPop: null,
							openVid: null,
						}
					history.pushState(stateObj, "", "Your_Exclusive_Offer");}
					currentPageName = "Your_Exclusive_Offer";
					dataLayerPush();
					break;
	}
	button1.style.backgroundColor = "#f9f9f9";
	button1.style.color = "#3d3935";
	button1.style.borderColor = "#f9f9f9";
	button2.style.backgroundColor = "#f9f9f9";
	button2.style.color = "#3d3935";
	button2.style.borderColor = "#f9f9f9";
	
	if (buttonID == 8) {
		document.getElementById('goldButton').style.backgroundColor = "#a07730";
		document.getElementById('goldButton').style.color = "#fff";
		document.getElementById('goldButton').style.borderColor = "#a07730";
		document.getElementById('headerGoldButton').style.backgroundColor = "#a07730";
		document.getElementById('headerGoldButton').style.color = "#fff";
		document.getElementById('headerGoldButton').style.borderColor = "#a07730";
	}

	// Pause any working videos
	closeAllVideos();
	
	// Scroll the page to the top
	scrollTop();
	
	// Hide all burger menus
	checkAll(false);
	returnBurgerMenu();
	
	// Load videos
	loadVimeoVideos(pageName);
};

function loadVimeoVideos(pageID) {
	var page = document.getElementById(pageID);
	
	var iframes = page.getElementsByTagName("IFRAME");

	for (var i=0; i < iframes.length; i++) {
		if (iframes[i].src == "about:blank") {
			
			iframes[i].src = iframes[i].name;
			
			iframes[i].style.width = '100%';
			
			if (showPlayButtons == true) {
				var style = window.getComputedStyle(iframes[i]); 
				iframes[i].parentElement.style.marginTop = style.getPropertyValue('margin-top');
				iframes[i].style.marginTop = 0;
			}
			
			var player = new Vimeo.Player(iframes[i]);
			player.on('play', function(data) {
				var buttons = page.getElementsByClassName("vidPlayButton");
				for (var b=0; b < buttons.length; b++) {
						buttons[b].style.display = "none";
				}
			});
			
			player.on('pause', function(data) {
				var buttons = page.getElementsByClassName("vidPlayButton");
				for (var b=0; b < buttons.length; b++) {
						if (showPlayButtons == true) {
							buttons[b].style.display = "block";
						}
				
				}
			});
		}
	}
};


// Reformat burger menu icon
function burgerIconFormat() {
	var burgerMenu = document.getElementById("topBurgerMenu");
	if (burgerMenu.checked == false) {
		var cross = '\u2A2F'
		icon = document.getElementById('burgerIcon');
		icon.textContent = cross;
		icon.style.fontSize = "11vw";
		icon.style.color = "#a07730"
	} else {
		icon = document.getElementById('burgerIcon');
		icon.textContent = '\u2630';
		icon.style.fontSize = "10vw";
		icon.style.color = "black"
	}
};

// Return burger menu icon
function returnBurgerMenu() {
	icon = document.getElementById('burgerIcon');
	icon.textContent = '\u2630';
	icon.style.fontSize = "10vw";
		icon.style.color = "black"
}

// Scroll to the top of the page
function scrollTop() {
	if ('scrollRestoration' in history) {
    	history.scrollRestoration = 'manual';
	}
	// This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
	window.scrollTo(0,0);
}

function scrollBottom() {
	window.scrollTo(0, document.body.scrollHeight);
}
	
// Uncheck all checkboxes
function checkAll(checktoggle)
{
  checkboxes = document.getElementsByTagName('input');
 
  for (var i=0; i<checkboxes.length; i++)  {
    if (checkboxes[i].type == 'checkbox')   {
      checkboxes[i].checked = checktoggle;
    }
  }
}

// hide all of the fullscreen videos
function hideVideos() {
	
	var y = document.getElementsByClassName("fullScreenVidContainer");
	for (var i = 0; i < y.length; i++){
        y[i].style.display = "none";
    }
	
	closeAllVideos();
};

// Open up a fullscreen video
function openVideo(videoContainer, autoplay, addHistory) {
	// Hide any other popup that may be open
	hidePopups();
	
	// Get the container
	container = document.getElementById(videoContainer);
	
   // Make the container fullscreen
   if (container.className == "popup") {
	   container.style.display = "flex";
   } else {
	container.style.display = "block";
   }
   // The videos currently don't autoplay
   /*
   
   if (autoplay == true) {
		// Get the container's children
		var containerChildren = container.getElementsByTagName("IFRAME");
   
		// Find the iframe
		for (i = 0; i < (containerChildren.length); i++) {
			// Play the video
			var iframe = containerChildren[i];
			var player = new Vimeo.Player(iframe);
			player.play();
		}
   }
   */
   
	if (addHistory != false) {
   
		let stateObj = {
			pageNo: currentPage,
			pageName: currentPageName,
			openPop: null,
			openVid: videoContainer,
		}
   
		history.pushState(stateObj, "", "#"+videoContainer);
					
		dataLayerPush();
	}
};

// Close all the videos in the Bubl
function closeAllVideos() {
	all = document.getElementsByTagName("IFRAME");

	for (var i=0, max=all.length; i < max; i++) {
		// Pause the video
		var iframe = all[i];
		if (iframe.src != "about:blank") {
			var player = new Vimeo.Player(iframe);
			player.unload();
		}
	}
}

// hide all of the map popups
function hidePopups() {
	var y = document.getElementsByClassName("popup");
	for (var t = 0; t < y.length; t++){
        y[t].style.display = "none";
    }
	
	closeAllVideos();
};

// Open a map popup
function openPopup(popup, addHistory) {
	// If the popup is open, close it 
	if (document.getElementById(popup).style.display == "flex") {
		hidePopups();
	} else {
		// Hide any other popup that may be open
		hidePopups();
		// Get the container
		document.getElementById(popup).style.display = "flex";
	}
		
	if (addHistory != false) {
		// Add the page change to the history
		let stateObj = {
			pageNo: currentPage,
			pageName: currentPageName,
			openPop: popup,
			openVid:  null,
		}
	
		history.pushState(stateObj, "", "#"+popup);
					
		dataLayerPush();
	}
	
	return true;
};

function pushToHistory() {
	
	// Add the page change to the history
	let stateObj = {
		pageNo: currentPage,
		pageName: currentPageName,
		openPop: null,
		openVid: null,
	}
	
	history.pushState(stateObj, "", currentPageName);
	dataLayerPush();
}

function dataLayerPush() {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
	'event': 'Pageview',
	'pagePath': window.location.href,
	'pageTitle': currentPageName,
	});
}


// Revert to a previously saved state
window.addEventListener('popstate', function(event) {
	if (event.state.pageName == "diningExperiences") {
		pageButton('diningExperiences',6, false);
	} else {
		switch(event.state.pageNo) {
			case 1:	pageButton('page1',1, false);
							break;
			case 2:	pageButton('page2',2, false);
							break;
			case 3:	pageButton('page3',3, false);
							break;
			case 4:	pageButton('page4',4, false);
							break;
			case 5:	pageButton('page5',5, false);
							break;
			case 6:	pageButton('page6',6, false);
							break;
			case 7:	pageButton('page7',7, false);
							break;
			case 8:	pageButton('page8',8, false);
							break;
		}
	}
	
	if (event.state.openPop != null) {
		openPopup(event.state.openPop, false);
	} else {
		hidePopups();
	}
	
	if (event.state.openVid != null) {
		openVideo(event.state.openVid, false, false);
	} else {
		hideVideos();
	}
});

//-------------------------------------------------------------------------------- Sort out mobile design elements
const mediaQuery = window.matchMedia('(max-device-width: 480px)')

function handleScreenChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!')
	  showPlayButtons = true;
	  var buttons = document.getElementsByClassName("vidPlayButton");
	for (var b=0; b < buttons.length; b++) {
		buttons[b].style.display = "block";
	}
  } else {
	  showPlayButtons = false;
	  var buttons = document.getElementsByClassName("vidPlayButton");
	for (var b=0; b < buttons.length; b++) {
		buttons[b].style.display = "none";
	}
  }
}

mediaQuery.addListener(handleScreenChange)

// Initial check
handleScreenChange(mediaQuery)
