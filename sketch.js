var circles = [];

function setup() { 
 createCanvas(windowWidth,windowHeight); 
 // Lets make sure we don't get stuck in infinite loop 
 var protection = 0; 
 // Try to get to 500 
 while (circles.length < 60000) { 
 // Pick a random circle 
 var circle = { x: random(width), 
               y: random(height), 
               r: random(6, 36),
               rr: random(255),
               g: random(255),
               b: random(255) 
              }; 
 // Does it overlap any previous circles?
 var overlapping = false;
 for (var j = 0; j < circles.length; j++) { 
       var other = circles[j]; 
       var d = dist(circle.x, circle.y, other.x, other.y); 
       if (d < circle.r + other.r) { 
           overlapping = true; 
       } 
 }
 // If not keep it!
 if (!overlapping) { 
    circles.push(circle); 
 }
 // Are we stuck?
 protection++;
 if (protection > 10000) { 
    break; 
 } 
}
 // Draw all the circles
 for (var i = 0; i < circles.length; i++) { 
     fill(circles[i].rr,circles[i].g,circles[i].b);
     noStroke();
     ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2); } 
}