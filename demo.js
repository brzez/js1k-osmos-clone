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
    var o;
    do{
        o = {x: rng() * w, y: rng() * h, r: r, t: t||0, vx: 0, vy: 0, a: 0};
    }while(all.filter(function(e){
        return dist(e, o) < e.r + o.r && e != o;
    }).length);

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
    for(var i=9;i--;){
        make(0, player.r * i / 9 + 8);
    }
}

setInterval(function(){
    c.fillStyle = 0;
    c.fillRect(0,0, w, h);

    if(all.length == 1){
        wave();
    }

    for(var i=all.length;i-->0;){
        var self = all[i];
        // ai
        if(!self.t && rng() > .99){
            move(self, rng() * 7);
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
        c.strokeStyle = self.t ? "#fff" : 'rgb('+(self.a/player.a * 255 | 0)+', '+(player.a/self.a * 255 | 0)+',0)';
        c.lineWidth = m.abs(self.vx) + m.abs(self.vx) + 1;
        c.arc(self.x, self.y, self.a, 0, 7);
        c.stroke();

        // collision
        for(var j=0;j<all.length;j++){
            var entity_b = all[j];
            if(i != j && dist(self, entity_b) < self.r + entity_b.r && self.r < entity_b.r){
                entity_b.r += self.r;
                self.d = 1;
            }
        }

        if(self.d){
            all.splice(i, 1);
        }
    }

    // restart when dead
    player.d && confirm("Wave: " + waveCounter + "\nAgain?") && top.reload();
    
}, 15);

b.onmouseup = function(e) {
    move(player, m.atan2(e.clientY - player.y, e.clientX - player.x));
};
