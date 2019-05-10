var canvas  =document.getElementById('my-canvas')
var ctx = canvas.getContext('2d')
console.log(ctx)
ctx.fillStyle = "#dddddd"; //设置颜色
ctx.fillRect(10,10, 130, 130); //绘制方块

var path = new Path2D()
path.arc(75,75,50,0 ,Math.PI *2 ,true);
path.moveTo(110,75);
path.arc(75, 75, 35, 0, Math.PI, false);
path.moveTo(65, 65);
path.arc(60, 65, 5, 0, Math.PI*2, true);
path.moveTo(95, 65);
path.arc(90, 65, 5, 0, Math.PI*2, true);
ctx.strokeStyle = '#0000ff';
ctx.stroke(path);