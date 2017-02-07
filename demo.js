/*
    canvas: window.a
    ctx: window.c
    body: window.b
 */
var all = [];
var w = a.width;
var h = a.height;

var rng = Math.random;

function make(t){
    var o = {x: rng() * w, y: rng() * h, r: 8, t: t||1, vx: 0, vy: 0};
    all.push(o);
    return o;
}

// todo: move to setinterval
function update(o){
    if(o.t==1 && rng() > .99){
        o.vx = rng() * 2 - 1;
        o.vy = rng() * 2 - 1;
    }
    o.x += o.vx;
    o.y += o.vy;
    c.fillRect(o.x, o.y, 8, 8);
}

var player = make(2);

setInterval(function(){
    c.save();
    c.fillStyle = 'rgba(255,255,255,.03)';
    c.fillRect(0,0, w, h);
    c.restore();
    for(var i=all.length;i-->0;){
        update(all[i]);

        if(all.length < 10){make();}
    }

    b.onmousemove = function(e) {
        player.vx = e.x > w/2 ? 1 : -1;
        player.vy = e.y > h/2 ? 1 : -1;
    };
}, 30);
