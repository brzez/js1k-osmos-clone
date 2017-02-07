var all = [];

function make(){
    var o = {x:0, y:0};
    all.push(o);
    return o;
}

function update(o){

}

var player = make();

setInterval(function(){
    for(var i=all.length;i-->0;){
        update(all[i]);
    }
}, 30);
