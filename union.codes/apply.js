// code for map to browser via css as a DOM method

//<!--Apply class to body with browser version-->
//<script type="text/javascript">
	var nVer = navigator.appVersion; var nAgt = navigator.userAgent; var bN = navigator.appName; var fullV = "" + parseFloat(navigator.appVersion); var majorV = parseInt(navigator.appVersion, 10); var nameOffset, verOffset, ix; if ((verOffset = nAgt.indexOf("Opera")) !== -1) { bN = "Opera"; fullV = nAgt.substring(verOffset + 6); if ((verOffset = nAgt.indexOf("Version")) !== -1) { fullV = nAgt.substring(verOffset + 8) } } else { if ((verOffset = nAgt.indexOf("MSIE")) !== -1) { bN = "IE"; fullV = nAgt.substring(verOffset + 5) } else { if ((verOffset = nAgt.indexOf("Chrome")) !== -1) { bN = "Chrome"; fullV = nAgt.substring(verOffset + 7) } else { if ((verOffset = nAgt.indexOf("Safari")) !== -1) { bN = "Safari"; fullV = nAgt.substring(verOffset + 7); if ((verOffset = nAgt.indexOf("Version")) !== -1) { fullV = nAgt.substring(verOffset + 8) } } else { if ((verOffset = nAgt.indexOf("Firefox")) !== -1) { bN = "Firefox"; fullV = nAgt.substring(verOffset + 8) } else { if ((nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/"))) { bN = nAgt.substring(nameOffset, verOffset); fullV = nAgt.substring(verOffset + 1); if (bN.toLowerCase() == bN.toUpperCase()) { bN = navigator.appName } } } } } } } if ((ix = fullV.indexOf(";")) !== -1) { fullV = fullV.substring(0, ix) } if ((ix = fullV.indexOf(" ")) !== -1) { fullV = fullV.substring(0, ix) } majorV = parseInt("" + fullV, 10); if (isNaN(majorV)) { fullV = "" + parseFloat(navigator.appVersion); majorV = parseInt(navigator.appVersion, 10) } 
	document.getElementsByTagName("body")[0].className += " " +  bN + " " +  bN + majorV + " cmsORX cmsORX1 BT-pk";


//Closure of above gives:  (https://closure-compiler.appspot.com/)

// var nVer = navigator.appVersion, nAgt = navigator.userAgent, bN = navigator.appName, fullV = "" + parseFloat(navigator.appVersion), majorV = parseInt(navigator.appVersion, 10), nameOffset, verOffset, ix;
// -1 !== (verOffset = nAgt.indexOf("Opera")) ? (bN = "Opera", fullV = nAgt.substring(verOffset + 6), -1 !== (verOffset = nAgt.indexOf("Version")) && (fullV = nAgt.substring(verOffset + 8))) : -1 !== (verOffset = nAgt.indexOf("MSIE")) ? (bN = "IE", fullV = nAgt.substring(verOffset + 5)) : -1 !== (verOffset = nAgt.indexOf("Chrome")) ? (bN = "Chrome", fullV = nAgt.substring(verOffset + 7)) : -1 !== (verOffset = nAgt.indexOf("Safari")) ? (bN = "Safari", fullV = nAgt.substring(verOffset + 7), -1 !== (verOffset = 
// nAgt.indexOf("Version")) && (fullV = nAgt.substring(verOffset + 8))) : -1 !== (verOffset = nAgt.indexOf("Firefox")) ? (bN = "Firefox", fullV = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (bN = nAgt.substring(nameOffset, verOffset), fullV = nAgt.substring(verOffset + 1), bN.toLowerCase() == bN.toUpperCase() && (bN = navigator.appName));
// -1 !== (ix = fullV.indexOf(";")) && (fullV = fullV.substring(0, ix));
// -1 !== (ix = fullV.indexOf(" ")) && (fullV = fullV.substring(0, ix));
// majorV = parseInt("" + fullV, 10);
// isNaN(majorV) && (fullV = "" + parseFloat(navigator.appVersion), majorV = parseInt(navigator.appVersion, 10));
// document.getElementsByTagName("body")[0].className += " " + bN + " " + bN + majorV + " cmsORX cmsORX1 BT-pk";







//detected:

// Opera
// Opera
// Version
// MSIE
// IE
// Chrome
// Chrome
// Safari
// Safari
// Version
// Firefox
// Firefox

// css classes assigned to body 

// body.Opera
// body.Opera
// body.Version
// body.MSIE
// body.IE
// body.Chrome
// body.Chrome
// body.Safari
// body.Safari
// body.Version
// body.Firefox
// body.Firefox





// ALTERNATIVE DEVICE DETECTION METHOD BELOW




    // if (navigator.userAgent.indexOf('MSIE') != -1)
    //  var detectIEregexp = /MSIE (\d+\.\d+);/ //test for MSIE x.x
    // else // if no "MSIE" string in userAgent
    //  var detectIEregexp = /Trident.*rv[ :]*(\d+\.\d+)/ //test for rv:x.x or rv x.x where Trident string exists

    // if (detectIEregexp.test(navigator.userAgent)){ //if some form of IE
    //  var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
     
    // if (ieversion>=10)
    //      document.getElementById('wrapper').style.width = '1em'
    //  else if (ieversion==9)
    //      document.getElementById('wrapper').style.width = '100em'
    // }
    // else{

    // }


// END ALTERNATIVE DEVICE DETECTION METHOD BELOW













