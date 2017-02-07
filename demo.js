/*
    canvas: window.a
    ctx: window.c
    body: window.b
 */
var all = [];
var w = a.width;
var h = a.height;

function make(t){
    var o = {x:w/2, y:h/2, r: 8, t: t||1, vx: 0, vy: 0};
    all.push(o);
    return o;
}

function update(o){
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
    }

    b.onmousemove = function(e) {
        player.vx = e.x > w/2 ? 1 : -1;
        player.vy = e.y > h/2 ? 1 : -1;
    };
}, 30);
