/**
 * TODO:
 * - [x] highlight player
 * - [x] screen bounds
 * - [] random radius
 * - [x] spawn a small thing behind
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

var player = make(2);
player.r = 30;

setInterval(function(){
    c.fillStyle = '#000';
    c.fillRect(0,0, w, h);
    for(var i=all.length;i-->0;){
        var self = all[i];
        // ai
        if(!self.t && rng() > .99){
            // self.vx = rng() * 2 - 1;
            // self.vy = rng() * 2 - 1;
        }
        self.vx *= friction;
        self.vy *= friction;
        self.x += self.vx;
        self.y += self.vy;

        // screen bounds
        self.x = m.max(0, m.min(w, self.x));
        self.y = m.max(0, m.min(h, self.y));

        c.beginPath();
        c.strokeStyle = self.t ? "#fff" : "#0f0";
        c.arc(self.x, self.y, self.r, 0, 7);
        c.stroke();

        var die = self.r < 1;

        // collision
        for(var j=0;j<all.length;j++){
            if(i == j) continue;
            var entity_b = all[j];
            var dist = m.sqrt((self.x - entity_b.x) * (self.x - entity_b.x) + (self.y - entity_b.y)*(self.y - entity_b.y));
            if(dist < self.r+entity_b.r){
                if(self.r <= entity_b.r){
                    entity_b.r += self.r;
                    die = 1;
                    break;
                }
            }
        }

        if(die) all.splice(i, 1);       
        

        if(all.length < 1){
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

        var poop = make();
        var f = player.r * .1;
        player.r -= f;
        poop.r = f;
        poop.x = player.x + player.vx * -1 * (player.r + poop.r);
        poop.y = player.y + player.vy * -1 * (player.r + poop.r);
        poop.vx = player.vx * -1;
        poop.vy = player.vy * -1;
    };
}, 15);
