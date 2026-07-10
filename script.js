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
function fitText(text, x, y, maxWidth, maxSize) {

    let size = maxSize;

    do {
        ctx.font = `italic bold ${size}px Arial`;
        size--;
    } while (ctx.measureText(text).width > maxWidth && size > 14);

    ctx.fillText(text, x, y);

}
function draw(){

    ctx.clearRect(0,0,1080,1350);

    ctx.drawImage(template,0,0);

    // Name
    ctx.fillStyle="white";
    ctx.font="italic bold 40px Arial";

    let name=document.getElementById("name").value.toUpperCase();

    if(name!=""){
        fitText(name,355,897,520,40);
    }

    // Songs
    ctx.font="italic bold 26px Arial";

    const leftX=92;
    const rightX=585;

    let y=972;

    for(let i=1;i<=6;i++){

        const song=document.getElementById("song"+i).value;

        fitText(song, leftX, y, 365, 26);

        y+=66;

    }

    y=972;

    for(let i=7;i<=12;i++){

        const song=document.getElementById("song"+i).value;

        fitText(song, rightX, y, 365, 26);

        y+=66;

    }

}
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {

    const link = document.createElement("a");

    let filename = document.getElementById("name").value.trim();

    if(filename === "")
        filename = "dream-tracklist";

    filename = filename.replace(/[^a-z0-9]/gi,"-").toLowerCase();

    link.download = filename + ".png";

    link.href = canvas.toDataURL("image/png");

    link.click();

});
