let image = document.getElementById("a");
let images = ["11.png", "22.png", "33.png"];

setInterval(function(){
    let rnd = Math.floor(Math.random()*images.length);
    image.src = images[rnd];
}, 200);


