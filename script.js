const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const template = new Image();

template.src = "template.png";

template.onload = function(){

    ctx.drawImage(template,0,0,1080,1350);

}
