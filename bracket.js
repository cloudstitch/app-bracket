function dashedLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.setLineDash([10,5]);
  context.moveTo(x1,y1);
  context.lineTo(x2,y2);
  context.closePath();
  context.stroke();
};

function drawDashes(root) {
  var c = document.getElementsByClassName("ttl-quarter-line")[0];
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0,0,150,75);
  dashedLine(ctx, 0, 0, 200, 200, 4);  
}

// document.addEventListener("DOMContentLoaded", function(event) { 
//   var root = document.getElementById('tournament-bracket');
//   drawDashes(root);
// });

