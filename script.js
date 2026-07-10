const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const template = new Image();
template.src = "template.png";

const songContainer = document.getElementById("songInputs");

// create 12 song boxes
for(let i=1;i<=12;i++){

    const input=document.createElement("input");

    input.placeholder="Song "+i;

    input.id="song"+i;

    songContainer.appendChild(input);

    input.addEventListener("input",draw);

}

document.getElementById("name").addEventListener("input",draw);

template.onload=draw;

function draw(){

    ctx.clearRect(0,0,1080,1350);

    ctx.drawImage(template,0,0);

    // Name
    ctx.fillStyle="white";
    ctx.font="italic bold 40px Arial";

    let name=document.getElementById("name").value.toUpperCase();

    if(name!=""){
        ctx.fillText(name,355,897);
    }

    // Songs
    ctx.font="italic bold 26px Arial";

    const leftX=92;
    const rightX=585;

    let y=972;

    for(let i=1;i<=6;i++){

        const song=document.getElementById("song"+i).value;

        ctx.fillText(song,leftX,y);

        y+=66;

    }

    y=972;

    for(let i=7;i<=12;i++){

        const song=document.getElementById("song"+i).value;

        ctx.fillText(song,rightX,y);

        y+=66;

    }

}
