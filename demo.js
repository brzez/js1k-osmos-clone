/**
 * TODO:
 * - [x] highlight player
 * - [x] screen bounds
 * - [x] random radius
 * - [x] spawn a small thing behind
 * - [x] enemy color depends on player.r/enemy.r
 * - [] ai / logic
 * - [x] eating anim 
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

var friction = .95;

var waveCounter = 0;

function dist(a, b){
    return m.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y)*(a.y - b.y));
}

function make(t, r){
    var o = {x: rng() * w, y: rng() * h, r: r, t: t||0, vx: 0, vy: 0, a: 0}; 
    all.push(o);
    return o;
}

var player = make(2);

function move(o, r){
    o.vx = m.cos(r) * 5;
    o.vy = m.sin(r) * 5;
}

function wave(){
    waveCounter++;
    player.r = rng() * 30 + 8;
    for(var i=15;i--;){
        make(0, player.r * i / 15 + 8);
    }
}

setInterval(function(){
    c.fillStyle = '#000';
    c.fillRect(0,0, w, h);
    c.fillStyle = "#fff";
    c.fillText("Wave: " + waveCounter, 0, 9);

    if(all.length == 1){
        wave();
    }

    for(var i=all.length;i-->0;){
        var self = all[i];
        // ai
        if(!self.t && rng() > .99){
            var r = 7 * rng();
            move(self, r);
        }
        self.vx *= friction;
        self.vy *= friction;
        self.x += self.vx;
        self.y += self.vy;

        // screen bounds
        self.x = m.max(0, m.min(w, self.x));
        self.y = m.max(0, m.min(h, self.y));

        self.a += (self.r - self.a) * .1;

        c.beginPath();
        c.strokeStyle = self.t ? "#fff" : player.a < self.a ? 'rgb('+(self.a/player.a * 255 | 0)+', 0,0)' : 'rgb(0, '+(player.a/self.a * 255 | 0)+',0)';
        c.arc(self.x, self.y, self.a, 0, 7);
        c.stroke();
        var die = self.r < 1;

        // collision
        for(var j=0;j<all.length;j++){
            if(i == j) continue;
            var entity_b = all[j];
            if(dist(self, entity_b) < self.r + entity_b.r && self.r < entity_b.r){
                entity_b.r += self.r;
                self.d = die = 1;
                break;
            }
        }

        if(die){
            all.splice(i, 1);
        }
    }

    // restart when dead
    player.d && confirm("Dead. Restart?") && top.reload();
    
}, 15);

b.onmouseup = function(e) {
    var r = m.atan2(e.y - player.y, e.x - player.x);
    move(player, r);
};
