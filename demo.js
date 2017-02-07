/*
    canvas: window.a
    ctx: window.c
    body: window.b
 */
var all = [];
var w = a.width;
var h = a.height;
var m = Math;
var rng = m.random;

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
    c.fillRect(o.x, o.y, 8 * o.t, 8 * o.t);
}

var player = make(2);

setInterval(function(){
    c.save();
    c.fillStyle = 'rgba(255,255,255,.03)';
    c.fillRect(0,0, w, h);
    c.restore();
    for(var i=all.length;i-->0;){
        update(all[i]);

        if(all.length < 10){
            make();
        }
    }

    b.onmousemove = function(e) {
        var v = {x: e.x - player.x, y: e.y - player.y};
        var len = m.sqrt(v.x*v.x+v.y*v.y);
        v.x /= len;
        v.y /= len;
        player.vx = v.x;
        player.vy = v.y;
    };
}, 30);
