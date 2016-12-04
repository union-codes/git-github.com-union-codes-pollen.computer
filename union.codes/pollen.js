//create custum CSS properties  see pollen.css

// get variable form inline style
// element.style.getPropertyValue("--foo");

// getvariable from wherever
// getComputedStyle(element).getPropertyValue("--foo");

// set variabe on inline style 
// element.style.setProperty("--foo", 37 + 3);

//https://www.youtube.com/watch?v=2an6-WVPuJU

//detect mouse move 

var root = document.documentElelment;

document.addEventListener("mousemove", evt =>{

let x = evt.clientX / innerWidth;
let y = evt.clientY / innerHeight;

root.style.setProperty("--mouse-x", x);
root.style.setProperty("--mouse-y", y);

});


// set a default value for html inputs

for (input of document.querySelectorAll("input")){
	input.style.setProperty("--value", input.value)
}

documtent.addEventListener("input", evt => {
	var input = evt.target;
	input.style.setProperty("--value", input.value)

});


// add the --lenght css variable to p.typing

for (let element of document.querySelectorAll(".typing")){
	let length = element.textcontent.length;
	element.style.setproperty("--length", length);
}


//detect scroll position
for (let el of document.querySelectorAll(".scrolling")){

	el.addEventListener("scroll", evt => {
		let maxScroll = el.scrollHeight -el.offsetHeight;
		let scroll = el.scrollTop / maxScroll;
		el.style.setProperty("--scroll", scroll);
	});
}













