/**
 * TODO:
 * - [x] highlight player
 * - [x] screen bounds
 * - [x] random radius
 * - [x] spawn a small thing behind
 * - [] enemy color depends on player.r/enemy.r
 * - [] ai / logic
 * - [] eating anim 
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

var friction = .9995;

var waveCounter = 0;

function dist(a, b){
    return m.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y)*(a.y - b.y));
}

function make(t, r){
    var o; 
    var maxTries = 100;
    do{
        o = {x: rng() * w, y: rng() * h, r: r||8, t: t||0, vx: 0, vy: 0, a: 0};
    }while(all.filter(function(entity){
        return dist(o, entity) < (o.r + entity.r);
    }).length && maxTries--);

    all.push(o);
    return o;
}

var player = make(2, 30);

function move(o, vx, vy){
    o.vx = vx;
    o.vy = vy;
}

function wave(){
    waveCounter++;
    for(var i=15;i--;){
        make(0, player.r * i / 15 + .3);
    }
}

setInterval(function(){
    c.fillStyle = '#000';
    c.fillRect(0,0, w, h);
    c.fillStyle = "#fff";
    c.fillText("Wave: " + waveCounter, 0, 9)
    for(var i=all.length;i-->0;){
        var self = all[i];
        // ai
        if(!self.t && rng() > .99){
            var r = 7 * rng();
            move(self, m.cos(r), m.sin(r));
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
        c.strokeStyle = self.t ? "#fff" : "#0f0";
        c.arc(self.x, self.y, self.a, 0, 7);
        c.stroke();
        var die = self.r < 1;

        // collision
        for(var j=0;j<all.length;j++){
            if(i == j) continue;
            var entity_b = all[j];
            if(dist(self, entity_b) < self.r+entity_b.r){
                if(self.r <= entity_b.r){
                    entity_b.r += self.r;
                    die = 1;
                    break;
                }
            }
        }

        if(die){
            all.splice(i, 1);
        }
    }
    if(all.length == 1){
        wave();
    }
    
    b.onmouseup = function(e) {
        var v = {x: e.x - player.x, y: e.y - player.y};
        var len = m.sqrt(v.x*v.x+v.y*v.y);
        v.x /= len;
        v.y /= len;
        move(player, v.x, v.y);
    };
}, 15);
