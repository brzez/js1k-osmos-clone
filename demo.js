/**
 * TODO:
 * - [x] highlight player
 * - [] screen bounds
 * - [] random radius
 * - [] spawn a small thing behind
 * - [] enemy color depends on player.r/enemy.r
 */

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

var friction = .995;

function make(t){
    var o = {x: rng() * w, y: rng() * h, r: 8, t: t||0, vx: 0, vy: 0};
    all.push(o);
    return o;
}

// todo: move to setinterval
function update(o){
    if(o.t==0 && rng() > .99){
        o.vx = rng() * 2 - 1;
        o.vy = rng() * 2 - 1;
    }
    o.vx *= friction;
    o.vy *= friction;
    o.x += o.vx;
    o.y += o.vy;
    c.beginPath();
    c.strokeStyle = o.t ? "#fff" : "#0f0";
    c.arc(o.x, o.y, o.r, 0, 7);
    c.stroke();
}

var player = make(2);

setInterval(function(){
    c.save();
    c.fillStyle = 'rgba(0,0,0,.1)';
    c.fillRect(0,0, w, h);
    c.restore();
    for(var i=all.length;i-->0;){
        update(all[i]);

        // collision
        for(var j=i;j<all.length;j++){
            if(i == j) continue;
            var entity_a = all[i];
            var entity_b = all[j];
            var dist = (entity_a.x - entity_b.x) * (entity_a.x - entity_b.x) + (entity_a.y - entity_b.y)*(entity_a.y - entity_b.y);
            if(dist < entity_a.r*entity_a.r+entity_b.r*entity_b.r){
                if(entity_a.r < entity_b.r){
                    var entityToDie = i;
                    entity_b.r += entity_a.r;
                }else{
                    var entityToDie = j;
                    entity_a.r += entity_b.r;
                }

                all.splice(entityToDie, 1);
            }
        }

        if(all.length < 10){
            make();
        }
    }

    b.onmouseup = function(e) {
        var v = {x: e.x - player.x, y: e.y - player.y};
        var len = m.sqrt(v.x*v.x+v.y*v.y);
        v.x /= len;
        v.y /= len;
        player.vx = v.x;
        player.vy = v.y;
    };
}, 15);
