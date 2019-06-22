var canvas, info;
var run=true;
var fps = 1000 / 30;
var mouse = new Point();


function Point(){
    this.x = 0;
    this.y = 0;
}



window.onload = function(){
    canvas = document.getElementById('canvas');
    canvas.width = 255;
    canvas.height = 255;

    var context  = canvas.getContext('2d');
    context.fillRect(mouse.x,mouse.y,mouse.x+30,mouse.y+30);

    canvas.addEventListener('mousemove', mouseMove, true);

    info = document.getElementById('info');

    (function(){
        info.innerHTML=mouse.x + ':' + mouse.y;

        if(run){setTimeout(arguments.callee, fps);}
    })();

};


function mouseMove(event){
    mouse.x = event.clientX-canvas.offsetLeft;
    mouse.y = event.clientY-canvas.offsetTop;
}
