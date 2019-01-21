// SVG Using JAVASCRIPT
// 

(() => {

// this is a self invoking anonynous function
	console.log('Its firing!');

	// 1st thing is you want to interact with the elements
	//storing the reference to the element on the page
	//document is the 'thing' being the web page.
	//querySelector is the 
	var badge = document.querySelector("img");
	// below (2) gets a reference to all the elements that match the selector and selects 'All'
	var otherBadges = document.querySelectorAll(".jpgBadge");
	// functions are the same in JS as in Python: 
	// what do you want to have happen on a click?
	function logBadgeId(){
		console.log(this.id);
		// debugger;
	}
	// what events are we listening for? click? mouseover? 
	// and what should happen when we hear one
	badge.addEventListener("click", logBadgeId);
	
	// this is the same as print
	// 
	otherBadges.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));

 })();

