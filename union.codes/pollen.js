

// URL constructor pattern:
url = new URL(urlString, [baseURLstring])
url = new URL(urlString, baseURLobject)


// from specifications:  developer.mozilla.org

var a = new URL("/", "https://developer.mozilla.org"); // Creates a URL pointing to 'https://developer.mozilla.org/'
var b = new URL("https://developer.mozilla.org");      // Creates a URL pointing to 'https://developer.mozilla.org/'
var c = new URL('en-US/docs', b);                      // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var d = new URL('/en-US/docs', b);                     // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var f = new URL('/en-US/docs', d);                     // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var g = new URL('/en-US/docs', "https://developer.mozilla.org/fr-FR/toto");
                                                       // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var h = new URL('/en-US/docs', a);                     // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var i = new URL('/en-US/docs', '');                    // Raises a SYNTAX ERROR exception as '/en-US/docs' is not valid
var j = new URL('/en-US/docs');                        // Raises a SYNTAX ERROR exception as 'about:blank/en-US/docs' is not valid
var k = new URL('http://www.example.com', 'https://developers.mozilla.com');
                                                       // Creates a URL pointing to 'http://www.example.com/'
var l = new URL('http://www.example.com', b);          // Creates a URL pointing to 'http://www.example.com/'




// URL methods
constructor:  URL()
properties:  origin
			 searchParams
methods: 			 
	URLUtils.toString()
	URLUtils.href  // Returns a DOMString containing the whole URL. It is a synonym for URLUtils.href, it can't be used to modify the value.
		// static methods
		URL.createObjectURL()
		URL.revokeObjectURL()

additional:


redular expressions

regular expression literals
var re = /ab+c/;

or calling the constructor function of the RegExp opbect
var re = new RegExp("ab+c");

Patterns:


pollen.object.pollen.object

object.computer.object.computer

object.computer.pollen.object

// .Attribute    .{{}}
.agency (3)
.blue 
.cafe (2)
.cloud (2)
.computer (11)
.codes (4)
.email
.estate
.exchange
.flowers
.healthcare (2)
.host (2)
.help
.ltda (2)
.lgbt
.party
.pink
.press (2)
.solutions
.tips
.town (to come potentially) (5)
.technology
.xyz (3)
.zone (2)





.computer (11)
.town (to come potentially) (5)
.codes (4)
.agency (3)
.xyz (3)
.cafe (2)
.cloud (2)
.healthcare (2)
.host (2)
.ltda (2)
.press(2)
.zone (2)
.blue 
.email
.estate
.exchange
.flowers
.help
.lgbt
.party
.pink
.solutions
.tips
.technology

// * Important .properties 
.computer (11)
.codes (4)
.agency (3)
.cloud (2)
.host (2)
.press(2)
.zone (2)
.email
.exchange
.help
.solutions




 //{{}}.  compent.
 artifact.
 beethoven.
 bach.
 composer.
 intension. (4)
 intelligence.
 mozart.
 mutation.
 number.
 pollen. (12)
 respolyn.
 rhamses.
 speak.
 stage. (8)
 security.
 science.
 svg.
 tilde. (5)
 union.
 vermont. (3)



 pollen. (12) 
 stage. (8)
 tilde. (5)
 intension. (4)
 vermont. (3)
 artifact.
 beethoven.
 bach.
 composer.
 intelligence.
 mozart.
 mutation.
 number.
 respolyn.
 rhamses.
 speak.
 security.
 science.
 svg.
 union.

// * Important objects 
pollen. (12)
stage. (8)
intension. (4)
artifact.
composer.
intelligence.
mutation.
number.
speak.
security.
svg.
union.
 




pollen.computer
pollen.agency
pollen.host
pollen.help
pollen.solutions
stage.cloud
stage.zone
stage.email
stage.exchange
intension.computer
intension.agency
intension.cloud
internsion.press









//create custum CSS properties  see pollen.css

// get variable form inline style
// element.style.getPropertyValue("--foo");

// getvariable from wherever
// getComputedStyle(element).getPropertyValue("--foo");

// set variabe on inline style 
// element.style.setProperty("--foo", 37 + 3);

//https://www.youtube.com/watch?v=2an6-WVPuJU
//
//detect mouse move 
var root = document.documentElelment;

document.addEventListener("mousemove", evt =>{

let x = evt.clientX / innerWidth;
let y = evt.clientY / innerHeight;

root.style.setProperty("--mouse-x", x);
root.style.setProperty("--mouse-y", y);

});
//
// set a default value for html inputs
for (input of document.querySelectorAll("input")){
	input.style.setProperty("--value", input.value)
}

documtent.addEventListener("input", evt => {
	var input = evt.target;
	input.style.setProperty("--value", input.value)
	
});
//
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
//
//













