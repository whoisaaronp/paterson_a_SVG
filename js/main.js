// SVG Using JAVASCRIPT //

(() => {

// let invoke a fire!! to see if it's working?
	console.log('Tis firing!!');

	// establish your variable naming convention.
	var allMyicons = document.querySelectorAll("img");
	// debugger;
	function logIconId(){
		console.log(this.id);

	}


	// we are listening for a click event for all the icons.
	// next what happens to each icons when a click event is executed.
	// allMyicons.addEventListener("click", logIconId);
	// this is the same as print
	allMyicons.forEach(thisallMyicons => thisallMyicons.addEventListener("click", logIconId));

	

})();
